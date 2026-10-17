import { create } from "zustand";
import {
  DEFAULT_PROFILE,
  INSTRUMENTS,
  KIND_CATEGORY,
  SAMPLE_POSITIONS,
  SEED_ALERTS,
  SIGNALS,
  alertTitle,
  inProfile,
  initialQuotes,
  instrument,
  isCategory,
  isChannel,
  isFrequency,
  isRisk,
  type AlertItem,
  type Position,
  type Profile,
  type Quote,
  type Screen,
} from "@/lib/stockism/model";

const KEY = "stockism-v1";

export type Toast = { id: string; title: string; body: string; signalId?: string };

export type Feed = { ok: boolean; asOf: number | null; error: string | null };

type LiveRow = { ticker: string; price: number; changePct: number; series: number[] };

const EMPTY_FEED: Feed = { ok: false, asOf: null, error: null };

type State = {
  hydrated: boolean;
  profile: Profile;
  positions: Position[];
  read: string[];
  extra: AlertItem[];
  toast: Toast | null;
  quotes: Record<string, Quote>;
  feed: Feed;
  screen: Screen;
  selectedId: string | null;
  pulse: number;
  ticks: number;
  hydrate: () => void;
  persist: () => void;
  patchProfile: (patch: Partial<Profile>) => void;
  setScreen: (screen: Screen) => void;
  openSignal: (id: string) => void;
  toggleRead: (id: string) => void;
  markAllRead: (ids: string[]) => void;
  addPosition: (position: Omit<Position, "id">) => void;
  removePosition: (id: string) => void;
  loadSample: () => void;
  clearPositions: () => void;
  dismissToast: () => void;
  applyLive: (rows: LiveRow[], asOf: number) => void;
  markFeedError: (message: string) => void;
  tick: () => void;
  finishOnboarding: (profile: Profile) => void;
  resetSystem: () => void;
};

function asProfile(value: unknown): Profile | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Partial<Profile>;
  if (typeof raw.capital !== "number" || raw.capital <= 0) return null;
  if (!isRisk(String(raw.risk))) return null;
  const categories = Array.isArray(raw.categories) ? raw.categories.filter(isCategory) : null;
  const channels = Array.isArray(raw.channels) ? raw.channels.filter(isChannel) : null;
  if (!categories || !channels || !isFrequency(String(raw.frequency))) return null;
  return {
    onboarded: Boolean(raw.onboarded),
    capital: Math.round(raw.capital),
    risk: raw.risk as Profile["risk"],
    categories,
    channels,
    frequency: raw.frequency as Profile["frequency"],
    intel: raw.intel !== false,
  };
}

function asPositions(value: unknown): Position[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const row = item as Partial<Position>;
    if (typeof row.id !== "string" || typeof row.ticker !== "string") return [];
    if (!INSTRUMENTS.some((name) => name.ticker === row.ticker)) return [];
    if (typeof row.shares !== "number" || typeof row.avg !== "number") return [];
    if (row.shares <= 0 || row.avg <= 0) return [];
    return [{ id: row.id, ticker: row.ticker, shares: row.shares, avg: row.avg }];
  });
}

export const useStock = create<State>((set, get) => ({
  hydrated: false,
  profile: DEFAULT_PROFILE,
  positions: [],
  read: [],
  extra: [],
  toast: null,
  quotes: initialQuotes(),
  feed: EMPTY_FEED,
  screen: "home",
  selectedId: null,
  pulse: 0,
  ticks: 0,
  hydrate: () => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { profile?: unknown; positions?: unknown; read?: unknown };
        const profile = asProfile(parsed.profile);
        const positions = asPositions(parsed.positions);
        const read = Array.isArray(parsed.read) ? parsed.read.filter((id) => typeof id === "string") : [];
        if (profile) {
          set({ profile, positions, read, hydrated: true });
          return;
        }
      }
    } catch {
      /* keep defaults */
    }
    set({ hydrated: true });
  },
  persist: () => {
    const { profile, positions, read } = get();
    localStorage.setItem(KEY, JSON.stringify({ profile, positions, read }));
  },
  patchProfile: (patch) => set((state) => ({ profile: { ...state.profile, ...patch } })),
  setScreen: (screen) => set({ screen }),
  openSignal: (id) => set({ screen: "detail", selectedId: id }),
  toggleRead: (id) =>
    set((state) => ({
      read: state.read.includes(id) ? state.read.filter((item) => item !== id) : [...state.read, id],
    })),
  markAllRead: (ids) => set((state) => ({ read: Array.from(new Set([...state.read, ...ids])) })),
  addPosition: (position) =>
    set((state) => ({
      positions: [...state.positions, { ...position, id: `p-${Date.now()}` }],
    })),
  removePosition: (id) => set((state) => ({ positions: state.positions.filter((item) => item.id !== id) })),
  loadSample: () => set({ positions: SAMPLE_POSITIONS.map((item) => ({ ...item })) }),
  clearPositions: () => set({ positions: [] }),
  dismissToast: () => set({ toast: null }),
  applyLive: (rows, asOf) =>
    set((state) => {
      const quotes = { ...state.quotes };
      for (const row of rows) {
        const previous = quotes[row.ticker];
        quotes[row.ticker] = {
          price: row.price,
          changePct: row.changePct,
          base: row.price,
          series: row.series.length >= 2 ? row.series : (previous?.series ?? row.series),
        };
      }
      return { quotes, feed: { ok: true, asOf, error: null } };
    }),
  markFeedError: (message) =>
    set((state) => ({
      feed: { ok: state.feed.ok, asOf: state.feed.asOf, error: message },
    })),
  tick: () => {
    const state = get();
    const ticks = state.ticks + 1;
    const pulse = ticks % 10 === 0 ? (state.pulse + 1) % 4 : state.pulse;
    let extra = state.extra;
    let toast = state.toast;
    if (state.profile.intel && state.profile.frequency === "realtime" && ticks % 8 === 0) {
      const pool = SIGNALS.filter(
        (signal) =>
          state.profile.categories.includes(KIND_CATEGORY[signal.kind]) &&
          inProfile(signal, state.profile.risk),
      );
      const recent = new Set(extra.slice(-3).map((item) => item.ticker));
      const pick = pool.filter((signal) => !recent.has(signal.ticker));
      const chosen = pick[Math.floor(Math.random() * pick.length)];
      if (chosen) {
        const item = instrument(chosen.ticker);
        const alert: AlertItem = {
          id: `live-${chosen.ticker}-${ticks}`,
          ticker: chosen.ticker,
          category: KIND_CATEGORY[chosen.kind],
          title: alertTitle(chosen, item),
          minutesAgo: 0,
          probability: chosen.probability,
          body: chosen.note,
          signalId: chosen.id,
        };
        extra = [alert, ...extra].slice(0, 8);
        toast = { id: alert.id, title: alert.title, body: alert.body, signalId: alert.signalId };
      }
    }
    set({ ticks, pulse, extra, toast });
  },
  finishOnboarding: (profile) => set({ profile, screen: "home" }),
  resetSystem: () => {
    localStorage.removeItem(KEY);
    set({
      profile: DEFAULT_PROFILE,
      positions: [],
      read: [],
      extra: [],
      toast: null,
      screen: "home",
      selectedId: null,
      quotes: initialQuotes(),
      feed: EMPTY_FEED,
      pulse: 0,
      ticks: 0,
    });
  },
}));

export function allAlerts(extra: AlertItem[]): AlertItem[] {
  return [...extra, ...SEED_ALERTS];
}
