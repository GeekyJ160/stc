import { useEffect } from "react";
import { Activity, Bell, Briefcase, Radio, ScanLine, Settings } from "lucide-react";
import { Mark, Wordmark } from "@/components/stockism/mark";
import { Onboarding } from "@/components/stockism/onboarding";
import {
  AlertsScreen,
  DetailScreen,
  HomeScreen,
  PortfolioScreen,
  ScannerScreen,
  SettingsScreen,
  SignalsScreen,
} from "@/components/stockism/screens";
import { marketStatus, type Screen } from "@/lib/stockism/model";
import { fetchYahooQuotes } from "@/lib/stockism/quotes";
import { allAlerts, useStock } from "@/lib/stockism/store";

const NAV: { id: Screen; label: string; icon: typeof Activity }[] = [
  { id: "home", label: "Home", icon: Activity },
  { id: "signals", label: "Signals", icon: Radio },
  { id: "scanner", label: "Scanner", icon: ScanLine },
  { id: "alerts", label: "Alerts", icon: Bell },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
];

export function App() {
  const hydrated = useStock((state) => state.hydrated);
  const hydrate = useStock((state) => state.hydrate);
  const profile = useStock((state) => state.profile);
  const positions = useStock((state) => state.positions);
  const read = useStock((state) => state.read);
  const persist = useStock((state) => state.persist);
  const tick = useStock((state) => state.tick);
  const applyLive = useStock((state) => state.applyLive);
  const markFeedError = useStock((state) => state.markFeedError);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (!hydrated) return;
    persist();
  }, [hydrated, profile, positions, read, persist]);

  useEffect(() => {
    if (!hydrated || !profile.onboarded) return;
    const id = window.setInterval(() => tick(), 2500);
    return () => window.clearInterval(id);
  }, [hydrated, profile.onboarded, tick]);

  useEffect(() => {
    if (!hydrated || !profile.onboarded) return;
    let cancel = false;
    async function pull() {
      if (document.hidden) return;
      try {
        const data = await fetchYahooQuotes();
        if (!cancel) applyLive(data.quotes, data.asOf);
      } catch (error) {
        if (!cancel) markFeedError(error instanceof Error ? error.message : "Yahoo Finance unavailable");
      }
    }
    void pull();
    const id = window.setInterval(() => void pull(), 15_000);
    const onVisible = () => {
      if (!document.hidden) void pull();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancel = true;
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [hydrated, profile.onboarded, applyLive, markFeedError]);

  if (!hydrated) return <Splash />;
  if (!profile.onboarded) return <Onboarding />;
  return <Shell />;
}

function Splash() {
  return (
    <div className="spotlight grid min-h-dvh place-items-center">
      <div className="grid justify-items-center gap-3">
        <Mark size={56} />
        <Wordmark />
      </div>
    </div>
  );
}

function Shell() {
  const screen = useStock((state) => state.screen);
  const setScreen = useStock((state) => state.setScreen);
  const intel = useStock((state) => state.profile.intel);
  const feed = useStock((state) => state.feed);
  const categories = useStock((state) => state.profile.categories);
  const extra = useStock((state) => state.extra);
  const read = useStock((state) => state.read);
  const toast = useStock((state) => state.toast);
  const dismissToast = useStock((state) => state.dismissToast);
  const openSignal = useStock((state) => state.openSignal);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => dismissToast(), 5200);
    return () => window.clearTimeout(id);
  }, [toast, dismissToast]);

  const status = marketStatus(feed.asOf);
  const feedText = feed.error && !feed.ok ? "Yahoo down" : feed.error ? "Yahoo delayed" : `Yahoo · ${status.label}`;
  const unread = allAlerts(extra).filter(
    (alert) => categories.includes(alert.category) && !read.includes(alert.id),
  ).length;
  const active = screen === "detail" ? "signals" : screen;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto grid min-h-dvh max-w-6xl md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden border-r border-line md:flex md:flex-col md:px-4 md:py-6">
          <div className="flex items-center gap-2 px-2">
            <Mark size={32} />
            <Wordmark />
          </div>
          <nav className="mt-8 grid gap-1" aria-label="Primary">
            {NAV.map((item) => {
              const Icon = item.icon;
              const on = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-current={on ? "page" : undefined}
                  onClick={() => setScreen(item.id)}
                  className={`flex h-12 items-center gap-3 rounded-xl px-3 text-sm ${
                    on ? "bg-surface-2 text-fg" : "text-muted"
                  }`}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {item.label}
                  {item.id === "alerts" && unread > 0 ? (
                    <span className="ml-auto font-mono text-xs text-primary">{unread}</span>
                  ) : null}
                </button>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => setScreen("settings")}
            className={`mt-auto flex h-12 items-center gap-3 rounded-xl px-3 text-sm ${
              screen === "settings" ? "bg-surface-2 text-fg" : "text-muted"
            }`}
          >
            <Settings className="size-4" aria-hidden="true" />
            Settings
          </button>
        </aside>

        <div className="flex min-w-0 flex-col">
          <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur">
            <div className="flex h-14 items-center justify-between gap-3 px-4">
              <div className="flex items-center gap-2 md:hidden">
                <Mark size={28} />
                <Wordmark />
              </div>
              <p className="hidden font-mono text-xs tracking-widest text-faint uppercase md:block">
                {intel ? "System online" : "System standby"}
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-flex max-w-40 items-center gap-2 font-mono text-xs text-faint">
                  <span
                    className={`size-1.5 rounded-full ${status.live && intel ? "live-dot bg-primary" : "bg-faint"}`}
                  />
                  <span className="truncate">{feedText}</span>
                </span>
                <button
                  type="button"
                  aria-label="System settings"
                  onClick={() => setScreen("settings")}
                  className="grid size-11 place-items-center rounded-xl text-muted md:hidden"
                >
                  <Settings className="size-5" />
                </button>
              </div>
            </div>
            {intel ? <div className="scanbar" aria-hidden="true" /> : <div className="h-0.5 bg-line" />}
          </header>

          {toast ? (
            <button
              type="button"
              onClick={() => {
                dismissToast();
                if (toast.signalId) openSignal(toast.signalId);
                else setScreen("alerts");
              }}
              className="mx-4 mt-3 rounded-xl border border-primary bg-surface px-4 py-3 text-left"
            >
              <p className="font-mono text-xs tracking-widest text-primary">NEW ALERT</p>
              <p className="mt-1 text-sm font-medium">{toast.title}</p>
              <p className="mt-1 text-sm text-muted">{toast.body}</p>
            </button>
          ) : null}

          <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-5 pb-28 md:pb-10">
            {screen === "home" ? <HomeScreen /> : null}
            {screen === "signals" ? <SignalsScreen /> : null}
            {screen === "detail" ? <DetailScreen /> : null}
            {screen === "scanner" ? <ScannerScreen /> : null}
            {screen === "alerts" ? <AlertsScreen /> : null}
            {screen === "portfolio" ? <PortfolioScreen /> : null}
            {screen === "settings" ? <SettingsScreen /> : null}
          </main>
        </div>
      </div>

      <nav
        className="nav-safe fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/95 backdrop-blur md:hidden"
        aria-label="Primary"
      >
        <ul className="grid grid-cols-5">
          {NAV.map((item) => {
            const Icon = item.icon;
            const on = active === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  aria-current={on ? "page" : undefined}
                  onClick={() => setScreen(item.id)}
                  className={`flex h-16 w-full flex-col items-center justify-center gap-1 text-xs ${
                    on ? "text-primary" : "text-faint"
                  }`}
                >
                  <span className="relative">
                    <Icon className="size-5" aria-hidden="true" />
                    {item.id === "alerts" && unread > 0 ? (
                      <span className="absolute -top-1 -right-2 size-2 rounded-full bg-primary" />
                    ) : null}
                  </span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
