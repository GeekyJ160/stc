import { useEffect, useRef, useState, type ReactNode } from "react";
import { Area, AreaChart, YAxis } from "recharts";
import { ChevronRight } from "lucide-react";
import { Card, EmptyState, Eyebrow, GhostButton, Meter, PrimaryButton, Spark } from "@/components/stockism/ui";
import {
  CATEGORIES,
  INSTRUMENTS,
  PULSE_LINES,
  SIGNALS,
  bookVolatility,
  breakdownText,
  capitalInsight,
  formatMoney,
  formatPct,
  formatPrice,
  formatStamp,
  inProfile,
  instrument,
  parseCapital,
  pulseFromQuotes,
  secondaryCapitalLine,
  sectorBoards,
  sectorShort,
  setupTitle,
  signalById,
  signalForTicker,
  trendCopy,
  type AlertItem,
  type Category,
  type Channel,
  type Frequency,
  type Quote,
  type RiskMode,
  type Signal,
  KIND_CATEGORY,
} from "@/lib/stockism/model";
import { allAlerts, useStock } from "@/lib/stockism/store";

export function HomeScreen() {
  const profile = useStock((state) => state.profile);
  const read = useStock((state) => state.read);
  const extra = useStock((state) => state.extra);
  const pulse = useStock((state) => state.pulse);
  const quotes = useStock((state) => state.quotes);
  const setScreen = useStock((state) => state.setScreen);
  const openSignal = useStock((state) => state.openSignal);
  const patchProfile = useStock((state) => state.patchProfile);
  const visible = visibleSignals(profile.risk, profile.categories);
  const top = visible.slice(0, 3);
  const alerts = allAlerts(extra).filter(
    (alert) => !read.includes(alert.id) && profile.categories.includes(alert.category),
  );
  const vol = bookVolatility(quotes);
  const livePulse = pulseFromQuotes(quotes);
  const pulseLine = !profile.intel
    ? "Monitoring paused. Intelligence mode is off."
    : (livePulse ?? PULSE_LINES[pulse]);
  const spark = quotes.SPY?.series ?? quotes.NVDA?.series ?? [1, 2];

  return (
    <div className="grid gap-4">
      <header>
        <Eyebrow>{profile.intel ? "System Online" : "System Standby"}</Eyebrow>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          {profile.intel ? "Yahoo Finance is on the tape." : "Intelligence mode is off."}
        </h1>
      </header>

      <Card>
        <Eyebrow>Market Pulse</Eyebrow>
        <p className="mt-3 text-lg leading-snug text-fg">{pulseLine}</p>
        <div className="mt-4">
          <Spark values={spark} up={(quotes.SPY?.changePct ?? quotes.NVDA?.changePct ?? 0) >= 0} />
        </div>
      </Card>

      <Card>
        <div className="flex items-start justify-between gap-3">
          <div>
            <Eyebrow>Today’s Key Signals</Eyebrow>
            <p className="mt-2 text-sm text-muted">High-probability setups detected across multiple sectors.</p>
          </div>
        </div>
        {top.length === 0 ? (
          <p className="mt-4 text-sm text-muted">No active signals inside this profile.</p>
        ) : (
          <ul className="mt-4 divide-y divide-line">
            {top.map((signal) => {
              const item = instrument(signal.ticker);
              const quote = quotes[signal.ticker];
              return (
                <li key={signal.id}>
                  <button
                    type="button"
                    onClick={() => openSignal(signal.id)}
                    className="flex w-full items-center gap-3 py-3 text-left"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-sm text-fg">
                        {signal.ticker}{" "}
                        <span className="text-muted">{formatPct(quote.changePct)}</span>
                      </p>
                      <p className="truncate text-sm text-muted">{setupTitle(signal, item)}</p>
                    </div>
                    <span
                      className={`font-mono text-sm tabular-nums ${signal.probability >= 70 ? "text-heat" : "text-fg"}`}
                    >
                      {signal.probability}%
                    </span>
                    <ChevronRight className="size-4 text-faint" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <GhostButton className="mt-2 w-full" onClick={() => setScreen("signals")}>
          View Signals
        </GhostButton>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <Eyebrow>Volatility Snapshot</Eyebrow>
          <p className="mt-3 text-lg font-medium">Volatility Level: {vol.level}</p>
          <p className="mt-2 text-sm text-muted">{vol.note}</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Low", "Moderate", "Elevated"].map((level) => (
              <div
                key={level}
                className={`rounded-lg py-2 text-center font-mono text-xs ${
                  vol.level === level ? "bg-primary text-bg" : "bg-surface-2 text-faint"
                }`}
              >
                {level}
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <Eyebrow>Alert Summary</Eyebrow>
          <p className="mt-3 font-mono text-3xl tabular-nums text-fg">{alerts.length}</p>
          <p className="mt-1 text-sm text-muted">New Alerts</p>
          <p className="mt-2 text-sm text-muted">
            {alerts.length ? breakdownText(alerts) : "All clear. System monitoring in real time."}
          </p>
          <GhostButton className="mt-4 w-full" onClick={() => setScreen("alerts")}>
            Open Alerts
          </GhostButton>
        </Card>
      </div>

      <Card className="bg-surface-2">
        <h2 className="text-lg font-semibold">System Online. Stay Ahead of the Market.</h2>
        <div className="mt-4 grid gap-3">
          <PrimaryButton onClick={() => patchProfile({ intel: !profile.intel })}>
            {profile.intel ? "Intelligence Mode On" : "Activate Intelligence Mode"}
          </PrimaryButton>
          <GhostButton onClick={() => setScreen("signals")}>View Signals</GhostButton>
          <GhostButton onClick={() => setScreen("settings")}>Customize Alerts</GhostButton>
        </div>
      </Card>
    </div>
  );
}

export function SignalsScreen() {
  const profile = useStock((state) => state.profile);
  const quotes = useStock((state) => state.quotes);
  const openSignal = useStock((state) => state.openSignal);
  const [sector, setSector] = useState("All");
  const [prob, setProb] = useState(0);
  const [vol, setVol] = useState("Any");
  const [trend, setTrend] = useState("Any");
  const [profileOnly, setProfileOnly] = useState(true);

  const sectors = ["All", ...new Set(INSTRUMENTS.map((item) => item.sector))];
  const list = SIGNALS.filter((signal) => {
    const item = instrument(signal.ticker);
    if (!profile.categories.includes(KIND_CATEGORY[signal.kind])) return false;
    if (profileOnly && !inProfile(signal, profile.risk)) return false;
    if (sector !== "All" && item.sector !== sector) return false;
    if (signal.probability < prob) return false;
    if (vol !== "Any" && signal.volatility !== vol) return false;
    if (trend !== "Any" && signal.trendStrength !== trend) return false;
    return true;
  }).sort((a, b) => b.probability - a.probability);

  return (
    <div className="grid gap-4">
      <header>
        <Eyebrow>Signals</Eyebrow>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Active Signals</h1>
        <p className="mt-2 text-sm text-muted">Real-time opportunities detected by the system.</p>
      </header>

      <div>
        <p className="font-mono text-xs tracking-widest text-faint uppercase">Filter Signals</p>
        <div className="scroll-x mt-2 flex flex-nowrap gap-2 pb-1">
          {sectors.map((item) => (
            <Chip key={item} on={sector === item} onClick={() => setSector(item)}>
              {item === "Technology" ? "Tech" : item}
            </Chip>
          ))}
        </div>
        <div className="scroll-x mt-2 flex flex-nowrap gap-2">
          <Chip on={prob === 0} onClick={() => setProb(0)}>Any probability</Chip>
          <Chip on={prob === 60} onClick={() => setProb(60)}>60%+</Chip>
          <Chip on={prob === 70} onClick={() => setProb(70)}>70%+</Chip>
          {["Any", "Low", "Moderate", "High"].map((item) => (
            <Chip key={`v-${item}`} on={vol === item} onClick={() => setVol(item)}>
              {item === "Any" ? "Any volatility" : item}
            </Chip>
          ))}
          {["Any", "High", "Medium", "Low"].map((item) => (
            <Chip key={`t-${item}`} on={trend === item} onClick={() => setTrend(item)}>
              {item === "Any" ? "Any trend" : `${item} trend`}
            </Chip>
          ))}
          <Chip on={profileOnly} onClick={() => setProfileOnly((value) => !value)}>
            {profile.risk} profile
          </Chip>
        </div>
      </div>

      {list.length === 0 ? (
        <EmptyState
          title="No Active Signals"
          body="System scanning. New opportunities will appear soon."
          action={
            <GhostButton
              onClick={() => {
                setSector("All");
                setProb(0);
                setVol("Any");
                setTrend("Any");
                setProfileOnly(false);
              }}
            >
              Reset filters
            </GhostButton>
          }
        />
      ) : (
        <ul className="grid gap-3">
          {list.map((signal) => (
            <SignalCard
              key={signal.id}
              signal={signal}
              quote={quotes[signal.ticker]}
              capital={profile.capital}
              onOpen={() => openSignal(signal.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function SignalCard({
  signal,
  quote,
  capital,
  onOpen,
}: {
  signal: Signal;
  quote: Quote;
  capital: number;
  onOpen: () => void;
}) {
  const item = instrument(signal.ticker);
  return (
    <li>
      <article className="rounded-2xl border border-line bg-surface p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-xs tracking-wide text-primary uppercase">{signal.kind}</p>
            <h2 className="mt-1 text-lg font-semibold">{setupTitle(signal, item)}</h2>
            <p className="mt-1 font-mono text-sm text-muted">
              {signal.ticker} · {item.name} · {formatPrice(quote.price)}{" "}
              <span className={quote.changePct >= 0 ? "text-primary" : "text-risk"}>
                {formatPct(quote.changePct)}
              </span>
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-faint">Probability</p>
            <p className={`font-mono text-2xl tabular-nums ${signal.probability >= 70 ? "text-heat" : "text-fg"}`}>
              {signal.probability}%
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted">
          Trend Strength: {signal.trendStrength} · Volatility: {signal.volatility}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fg">AI Note: {signal.note}</p>
        <p className="mt-2 text-sm text-faint">Capital-Aware Insight: {capitalInsight(capital, "card")}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Spark values={quote.series} up={quote.changePct >= 0} />
          <GhostButton className="w-full sm:w-auto" onClick={onOpen}>
            View Analysis
          </GhostButton>
        </div>
      </article>
    </li>
  );
}

export function DetailScreen() {
  const selectedId = useStock((state) => state.selectedId);
  const quotes = useStock((state) => state.quotes);
  const capital = useStock((state) => state.profile.capital);
  const setScreen = useStock((state) => state.setScreen);
  const signal = selectedId ? signalById(selectedId) : undefined;

  if (!signal) {
    return (
      <EmptyState
        title="No Active Signals"
        body="System scanning. New opportunities will appear soon."
        action={<GhostButton onClick={() => setScreen("signals")}>Back to signals</GhostButton>}
      />
    );
  }

  const item = instrument(signal.ticker);
  const quote = quotes[signal.ticker];

  return (
    <div className="grid gap-4">
      <button type="button" onClick={() => setScreen("signals")} className="w-fit text-sm text-primary">
        Back to signals
      </button>
      <header>
        <Eyebrow>Signal Analysis</Eyebrow>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">{setupTitle(signal, item)}</h1>
        <p className="mt-2 font-mono text-sm text-muted">
          {signal.ticker} · {item.name} · {formatPrice(quote.price)}{" "}
          <span className={quote.changePct >= 0 ? "text-primary" : "text-risk"}>{formatPct(quote.changePct)}</span>
        </p>
      </header>
      <PriceChart series={quote.series} up={signal.trend !== "Down"} />
      <div className="grid gap-3 sm:grid-cols-2">
        <Card>
          <Eyebrow>Trend</Eyebrow>
          <p className="mt-2 text-lg font-medium">Trend Direction: {signal.trend}</p>
          <p className="mt-2 text-sm text-muted">{trendCopy(signal)}</p>
        </Card>
        <Card>
          <Eyebrow>Volume</Eyebrow>
          <p className="mt-2 text-lg font-medium">Volume Status: {signal.volumeStatus}</p>
          <p className="mt-2 text-sm text-muted">{signal.volumeCopy}</p>
        </Card>
        <Card>
          <Eyebrow>Pattern Match</Eyebrow>
          <p className="mt-2 font-mono text-3xl tabular-nums text-heat">{signal.pattern}%</p>
          <p className="mt-2 text-sm text-muted">Historical continuation in similar setups.</p>
          <div className="mt-3">
            <Meter score={signal.pattern} />
          </div>
        </Card>
        <Card>
          <Eyebrow>Risk Score</Eyebrow>
          <p className="mt-2 text-lg font-medium">Risk Level: {signal.riskLevel}</p>
          <p className="mt-2 text-sm text-muted">
            {signal.riskLevel === "High"
              ? "Volatility is elevated. Size down."
              : "Volatility stable but rising."}
          </p>
        </Card>
      </div>
      <Card>
        <Eyebrow>AI Commentary</Eyebrow>
        <p className="mt-3 text-base leading-relaxed">“{signal.commentary}”</p>
      </Card>
      <Card>
        <Eyebrow>Capital-Aware Suggestions</Eyebrow>
        <p className="mt-3 text-sm leading-relaxed text-fg">{capitalInsight(capital, "detail")}</p>
        <p className="mt-2 text-sm text-faint">{secondaryCapitalLine(capital)}</p>
      </Card>
      <p className="text-xs text-faint">
        Session prices from Yahoo Finance. The scan is a model, not investment advice.
      </p>
    </div>
  );
}

function PriceChart({ series, up }: { series: number[]; up: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(320);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setWidth(Math.max(200, Math.floor(el.clientWidth)));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const color = up ? "var(--color-primary)" : "var(--color-risk)";
  const data = series.map((value, index) => ({ index, value }));
  return (
    <div ref={ref} className="h-36 w-full overflow-hidden rounded-2xl border border-line bg-surface">
      <AreaChart width={width} height={144} data={data} margin={{ top: 12, right: 0, left: 0, bottom: 0 }}>
        <YAxis hide domain={["dataMin", "dataMax"]} />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill={color}
          fillOpacity={0.14}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </div>
  );
}

export function ScannerScreen() {
  const quotes = useStock((state) => state.quotes);
  const openSignal = useStock((state) => state.openSignal);
  const ranked = [...INSTRUMENTS].sort((a, b) => moverScore(b.ticker, quotes) - moverScore(a.ticker, quotes)).slice(0, 6);

  return (
    <div className="grid gap-4">
      <header>
        <Eyebrow>Scanner</Eyebrow>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Market Scanner</h1>
        <p className="mt-2 text-sm text-muted">Live session from Yahoo Finance.</p>
      </header>
      <div className="grid grid-cols-2 gap-3">
        {sectorBoards(quotes).map((tile) => (
          <Card key={tile.name} className="p-3">
            <p className="text-sm font-medium">{tile.name}</p>
            <p className={`mt-1 text-sm ${tile.avg >= 0.35 ? "text-primary" : tile.avg <= -0.35 ? "text-risk" : "text-muted"}`}>
              {tile.strength} · {formatPct(tile.avg)}
            </p>
            <div className="mt-3">
              <Meter score={tile.score} />
            </div>
          </Card>
        ))}
      </div>
      <Card>
        <Eyebrow>Top Movers</Eyebrow>
        <h2 className="mt-2 text-lg font-semibold">Top Active Stocks</h2>
        <p className="mt-1 text-sm text-muted">Ranked by momentum and anomaly detection.</p>
        <ul className="mt-3 divide-y divide-line">
          {ranked.map((item) => {
            const quote = quotes[item.ticker];
            const signal = signalForTicker(item.ticker);
            return (
              <li key={item.ticker} className="flex items-center gap-3 py-3">
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-sm">{item.ticker}</p>
                  <p className="truncate text-sm text-muted">
                    {item.name} · {sectorShort(item.sector)}
                  </p>
                </div>
                <Spark values={quote.series} up={quote.changePct >= 0} />
                <div className="w-20 text-right">
                  <p className="font-mono text-sm tabular-nums">{formatPrice(quote.price)}</p>
                  <p className={`font-mono text-xs tabular-nums ${quote.changePct >= 0 ? "text-primary" : "text-risk"}`}>
                    {formatPct(quote.changePct)}
                  </p>
                </div>
                {signal ? (
                  <button
                    type="button"
                    className="h-11 shrink-0 px-2 text-sm text-primary"
                    onClick={() => openSignal(signal.id)}
                  >
                    Open
                  </button>
                ) : (
                  <span className="w-11 shrink-0 text-right font-mono text-xs text-faint">Scan</span>
                )}
              </li>
            );
          })}
        </ul>
      </Card>
      <Card>
        <p className="text-sm leading-relaxed text-muted">
          “Multiple sectors showing early rotation. Monitor trend stability.”
        </p>
      </Card>
    </div>
  );
}

export function AlertsScreen() {
  const profile = useStock((state) => state.profile);
  const extra = useStock((state) => state.extra);
  const read = useStock((state) => state.read);
  const toggleRead = useStock((state) => state.toggleRead);
  const openSignal = useStock((state) => state.openSignal);
  const [filter, setFilter] = useState<Category | "all">("all");
  const alerts = allAlerts(extra).filter((alert) => profile.categories.includes(alert.category));
  const shown = alerts.filter((alert) => filter === "all" || alert.category === filter);

  return (
    <div className="grid gap-4">
      <header>
        <Eyebrow>Alerts</Eyebrow>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Real-Time Alerts</h1>
        {profile.frequency !== "realtime" ? (
          <p className="mt-2 text-sm text-muted">
            {profile.frequency === "hourly" ? "Hourly" : "Daily"} digest. Live push is paused.
          </p>
        ) : null}
      </header>
      <div className="scroll-x flex flex-nowrap gap-2">
        <Chip on={filter === "all"} onClick={() => setFilter("all")}>
          All
        </Chip>
        {CATEGORIES.map((item) => (
          <Chip key={item.id} on={filter === item.id} onClick={() => setFilter(item.id)}>
            {item.short}
          </Chip>
        ))}
      </div>
      {shown.length === 0 ? (
        <EmptyState title="No New Alerts" body="All clear. System monitoring in real time." />
      ) : (
        <ul className="grid gap-3">
          {shown.map((alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              unread={!read.includes(alert.id)}
              onOpen={() => {
                if (!read.includes(alert.id)) toggleRead(alert.id);
                if (alert.signalId) openSignal(alert.signalId);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function AlertCard({ alert, unread, onOpen }: { alert: AlertItem; unread: boolean; onOpen: () => void }) {
  return (
    <li>
      <button
        type="button"
        onClick={onOpen}
        className={`w-full rounded-2xl border p-4 text-left ${unread ? "border-primary bg-surface" : "border-line bg-surface"}`}
      >
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-base font-semibold">{alert.title}</h2>
          {unread ? <span className="font-mono text-xs text-primary">NEW</span> : null}
        </div>
        <p className="mt-2 font-mono text-xs text-faint">
          {alert.ticker} · Timestamp: {formatStamp(alert.minutesAgo)} · Probability: {alert.probability}%
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">“{alert.body}”</p>
      </button>
    </li>
  );
}

export function PortfolioScreen() {
  const positions = useStock((state) => state.positions);
  const quotes = useStock((state) => state.quotes);
  const addPosition = useStock((state) => state.addPosition);
  const removePosition = useStock((state) => state.removePosition);
  const loadSample = useStock((state) => state.loadSample);
  const clearPositions = useStock((state) => state.clearPositions);
  const [ticker, setTicker] = useState(INSTRUMENTS[0].ticker);
  const [shares, setShares] = useState("10");
  const [avg, setAvg] = useState("");
  const [error, setError] = useState("");

  if (positions.length === 0) {
    return (
      <div className="grid gap-4">
        <header>
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Portfolio Overview</h1>
        </header>
        <EmptyState
          title="No Positions Added"
          body="Add your holdings to unlock portfolio insights."
          action={
            <PrimaryButton
              onClick={() => {
                loadSample();
              }}
            >
              Load sample book
            </PrimaryButton>
          }
        />
        <AddForm
          ticker={ticker}
          shares={shares}
          avg={avg}
          error={error}
          onTicker={setTicker}
          onShares={setShares}
          onAvg={setAvg}
          onAdd={() => {
            const count = Number(shares);
            const cost = Number(avg || quotes[ticker].price);
            if (!Number.isFinite(count) || count <= 0 || !Number.isFinite(cost) || cost <= 0) {
              setError("Shares and average cost need to be positive numbers.");
              return;
            }
            setError("");
            addPosition({ ticker, shares: count, avg: cost });
          }}
        />
      </div>
    );
  }

  const rows = positions.map((position) => {
    const quote = quotes[position.ticker];
    const item = instrument(position.ticker);
    const value = position.shares * quote.price;
    const cost = position.shares * position.avg;
    return { position, item, quote, value, pnl: value - cost };
  });
  const total = rows.reduce((sum, row) => sum + row.value, 0);
  const bySector = new Map<string, number>();
  for (const row of rows) {
    bySector.set(row.item.sector, (bySector.get(row.item.sector) ?? 0) + row.value);
  }
  const highVol = rows
    .filter((row) => signalForTicker(row.position.ticker)?.volatility === "High")
    .reduce((sum, row) => sum + row.value, 0);
  const highShare = total > 0 ? highVol / total : 0;
  const risk = highShare > 0.2 ? "Elevated" : highShare > 0.05 ? "Moderate" : "Contained";

  return (
    <div className="grid gap-4">
      <header className="flex items-end justify-between gap-3">
        <div>
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Portfolio Overview</h1>
        </div>
        <button type="button" className="text-sm text-faint" onClick={clearPositions}>
          Clear
        </button>
      </header>
      <Card>
        <p className="font-mono text-xs text-faint">Reference value</p>
        <p className="mt-1 font-mono text-3xl tabular-nums">{formatMoney(total)}</p>
        <p className={`mt-1 font-mono text-sm tabular-nums ${rows.reduce((s, r) => s + r.pnl, 0) >= 0 ? "text-primary" : "text-risk"}`}>
          {formatMoney(rows.reduce((sum, row) => sum + row.pnl, 0))} vs cost
        </p>
      </Card>
      <Card>
        <Eyebrow>Exposure</Eyebrow>
        <h2 className="mt-2 text-lg font-medium">Sector Exposure</h2>
        <ul className="mt-3 grid gap-3">
          {[...bySector.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([sector, value]) => (
              <li key={sector}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{sector}</span>
                  <span className="font-mono tabular-nums text-muted">{Math.round((value / total) * 100)}%</span>
                </div>
                <Meter score={Math.round((value / total) * 100)} />
              </li>
            ))}
        </ul>
      </Card>
      <Card>
        <Eyebrow>Risk Distribution</Eyebrow>
        <p className="mt-2 text-lg font-medium">Risk Level: {risk}</p>
        <p className="mt-2 text-sm text-muted">
          {highShare > 0.05
            ? "Exposure to high-volatility assets detected."
            : "High-volatility names are a small slice of this book."}
        </p>
      </Card>
      <Card>
        <Eyebrow>AI Note</Eyebrow>
        <p className="mt-3 text-sm leading-relaxed">
          {highShare > 0.05
            ? "Consider balancing with lower-volatility sectors to stabilize drawdowns."
            : "Mix is inside the band. Keep new risk from crowding the same sector."}
        </p>
      </Card>
      <ul className="grid gap-2">
        {rows.map((row) => (
          <li key={row.position.id} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="font-mono text-sm">{row.position.ticker}</p>
              <p className="text-sm text-muted">
                {row.position.shares} sh · avg {formatPrice(row.position.avg)}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm tabular-nums">{formatMoney(row.value)}</p>
              <p className={`font-mono text-xs tabular-nums ${row.pnl >= 0 ? "text-primary" : "text-risk"}`}>
                {formatMoney(row.pnl)}
              </p>
            </div>
            <button
              type="button"
              className="text-sm text-faint"
              onClick={() => removePosition(row.position.id)}
              aria-label={`Remove ${row.position.ticker}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <AddForm
        ticker={ticker}
        shares={shares}
        avg={avg}
        error={error}
        onTicker={setTicker}
        onShares={setShares}
        onAvg={setAvg}
        onAdd={() => {
          const count = Number(shares);
          const cost = Number(avg || quotes[ticker].price);
          if (!Number.isFinite(count) || count <= 0 || !Number.isFinite(cost) || cost <= 0) {
            setError("Shares and average cost need to be positive numbers.");
            return;
          }
          setError("");
          addPosition({ ticker, shares: count, avg: cost });
        }}
      />
    </div>
  );
}

function AddForm({
  ticker,
  shares,
  avg,
  error,
  onTicker,
  onShares,
  onAvg,
  onAdd,
}: {
  ticker: string;
  shares: string;
  avg: string;
  error: string;
  onTicker: (value: string) => void;
  onShares: (value: string) => void;
  onAvg: (value: string) => void;
  onAdd: () => void;
}) {
  return (
    <Card>
      <h2 className="text-base font-semibold">Add a position</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="grid gap-1 text-sm text-muted">
          Ticker
          <select
            value={ticker}
            onChange={(event) => onTicker(event.target.value)}
            className="h-12 rounded-xl border border-line bg-bg px-3 text-fg"
          >
            {INSTRUMENTS.map((item) => (
              <option key={item.ticker} value={item.ticker}>
                {item.ticker}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm text-muted">
          Shares
          <input
            inputMode="decimal"
            value={shares}
            onChange={(event) => onShares(event.target.value)}
            className="h-12 rounded-xl border border-line bg-bg px-3 font-mono text-fg"
          />
        </label>
        <label className="grid gap-1 text-sm text-muted">
          Avg cost
          <input
            inputMode="decimal"
            value={avg}
            placeholder="Market"
            onChange={(event) => onAvg(event.target.value)}
            className="h-12 rounded-xl border border-line bg-bg px-3 font-mono text-fg"
          />
        </label>
      </div>
      {error ? <p className="mt-2 text-sm text-risk">{error}</p> : null}
      <GhostButton className="mt-4" onClick={onAdd}>
        Add holding
      </GhostButton>
    </Card>
  );
}

export function SettingsScreen() {
  const profile = useStock((state) => state.profile);
  const patchProfile = useStock((state) => state.patchProfile);
  const resetSystem = useStock((state) => state.resetSystem);
  const [capitalText, setCapitalText] = useState(String(profile.capital));
  const parsed = parseCapital(capitalText);

  function commitCapital() {
    if (parsed == null) return;
    patchProfile({ capital: parsed });
  }

  return (
    <div className="grid gap-4">
      <header>
        <Eyebrow>Settings</Eyebrow>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">System Settings</h1>
      </header>
      <Card>
        <h2 className="text-base font-semibold">Capital Range</h2>
        <p className="mt-1 text-sm text-muted">Update your capital range for tailored insights.</p>
        <input
          value={capitalText}
          onChange={(event) => setCapitalText(event.target.value)}
          onBlur={commitCapital}
          className="mt-3 h-12 w-full rounded-xl border border-line bg-bg px-3 font-mono text-fg"
        />
        <GhostButton className="mt-3" disabled={parsed == null} onClick={commitCapital}>
          Save range
        </GhostButton>
      </Card>
      <Card>
        <h2 className="text-base font-semibold">Risk Profile</h2>
        <p className="mt-1 text-sm text-muted">Adjust how aggressively the system surfaces opportunities.</p>
        <div className="mt-3 grid gap-2">
          {(["conservative", "balanced", "aggressive"] as RiskMode[]).map((mode) => (
            <Chip key={mode} on={profile.risk === mode} onClick={() => patchProfile({ risk: mode })}>
              {mode}
            </Chip>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="text-base font-semibold">Alert Frequency</h2>
        <p className="mt-1 text-sm text-muted">Choose how often alerts are delivered.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(
            [
              ["realtime", "Real time"],
              ["hourly", "Hourly"],
              ["daily", "Daily"],
            ] as [Frequency, string][]
          ).map(([id, label]) => (
            <Chip key={id} on={profile.frequency === id} onClick={() => patchProfile({ frequency: id })}>
              {label}
            </Chip>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="text-base font-semibold">Notification Channels</h2>
        <p className="mt-1 text-sm text-muted">Push · SMS · Email</p>
        <div className="mt-3 grid gap-2">
          {(
            [
              ["push", "Push"],
              ["sms", "SMS"],
              ["email", "Email"],
            ] as [Channel, string][]
          ).map(([id, label]) => {
            const on = profile.channels.includes(id);
            return (
              <button
                key={id}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  const channels = on
                    ? profile.channels.filter((item) => item !== id)
                    : [...profile.channels, id];
                  if (channels.length === 0) return;
                  patchProfile({ channels });
                }}
                className={`flex h-12 items-center justify-between rounded-xl border px-4 text-sm ${
                  on ? "border-primary bg-surface-2" : "border-line"
                }`}
              >
                {label}
                <span className="font-mono text-xs text-muted">{on ? "On" : "Off"}</span>
              </button>
            );
          })}
        </div>
      </Card>
      <Card>
        <h2 className="text-base font-semibold">Alert Categories</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {CATEGORIES.map((item) => {
            const on = profile.categories.includes(item.id);
            return (
              <Chip
                key={item.id}
                on={on}
                onClick={() => {
                  const categories = on
                    ? profile.categories.filter((id) => id !== item.id)
                    : [...profile.categories, item.id];
                  if (categories.length === 0) return;
                  patchProfile({ categories });
                }}
              >
                {item.short}
              </Chip>
            );
          })}
        </div>
      </Card>
      <Card>
        <h2 className="text-base font-semibold">Theme</h2>
        <p className="mt-2 text-sm text-muted">Dark Mode (default). The system ships dark.</p>
      </Card>
      <Card>
        <p className="text-sm leading-relaxed text-muted">
          Session prices come from Yahoo Finance and refresh while this screen is open. The signal
          model does not place orders, send real SMS, or give investment advice.
        </p>
        <button type="button" className="mt-4 text-sm text-risk" onClick={resetSystem}>
          Reset system
        </button>
      </Card>
    </div>
  );
}

function Chip({ on, children, onClick }: { on: boolean; children: ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-10 shrink-0 rounded-lg border px-3 text-sm capitalize ${
        on ? "border-primary bg-surface-2 text-fg" : "border-line text-muted"
      }`}
    >
      {children}
    </button>
  );
}

function visibleSignals(risk: RiskMode, categories: Category[]) {
  return SIGNALS.filter(
    (signal) => categories.includes(KIND_CATEGORY[signal.kind]) && inProfile(signal, risk),
  ).sort((a, b) => b.probability - a.probability);
}

function moverScore(ticker: string, quotes: Record<string, Quote>): number {
  const quote = quotes[ticker];
  const signal = signalForTicker(ticker);
  return Math.abs(quote.changePct) * (signal ? 1.35 : 1) + (signal?.probability ?? 0) / 40;
}
