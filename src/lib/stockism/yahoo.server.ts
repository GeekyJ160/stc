import { INSTRUMENTS } from "@/lib/stockism/model";

export type YahooRow = {
  ticker: string;
  price: number;
  changePct: number;
  series: number[];
};

export type YahooPayload = {
  quotes: YahooRow[];
  asOf: number;
};

const SYMBOLS = [...INSTRUMENTS.map((item) => item.ticker), "SPY"];
const UA = "Mozilla/5.0 (compatible; Stockism/1.0; +https://finance.yahoo.com)";

let cache: { at: number; payload: YahooPayload } | null = null;

type SparkRow = {
  symbol?: string;
  fulldayPrice?: number;
  fulldayChangePercent?: number;
  previousClose?: number;
  close?: Array<number | null>;
  end?: number;
};

export async function loadYahooQuotes(): Promise<YahooPayload> {
  if (cache && Date.now() - cache.at < 12_000) return cache.payload;
  const payload = await pull();
  cache = { at: Date.now(), payload };
  return payload;
}

async function pull(): Promise<YahooPayload> {
  let lastError = "Yahoo Finance did not respond";
  for (const interval of ["1m", "5m"] as const) {
    try {
      return await pullInterval(interval);
    } catch (error) {
      lastError = error instanceof Error ? error.message : lastError;
    }
  }
  throw new Error(lastError);
}

async function pullInterval(interval: "1m" | "5m"): Promise<YahooPayload> {
  const url =
    "https://query1.finance.yahoo.com/v8/finance/spark?symbols=" +
    encodeURIComponent(SYMBOLS.join(",")) +
    `&range=1d&interval=${interval}`;
  const response = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": UA },
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error(`Yahoo Finance returned ${response.status}`);
  const body = (await response.json()) as Record<string, SparkRow>;
  const quotes: YahooRow[] = [];
  let asOf = 0;
  for (const symbol of SYMBOLS) {
    const row = body[symbol];
    if (!row) continue;
    const closes = (row.close ?? []).filter((value): value is number => typeof value === "number" && Number.isFinite(value));
    const price = finite(row.fulldayPrice) ?? closes.at(-1);
    if (price == null) continue;
    const previous = finite(row.previousClose);
    const changePct =
      finite(row.fulldayChangePercent) ??
      (previous ? ((price - previous) / previous) * 100 : 0);
    const end = finite(row.end);
    if (end) asOf = Math.max(asOf, end * 1000);
    quotes.push({
      ticker: row.symbol || symbol,
      price: round(price, 4),
      changePct: round(changePct, 2),
      series: downsample(closes.length ? closes : [price], 32),
    });
  }
  if (quotes.length === 0) throw new Error("Yahoo Finance returned no prices");
  return { quotes, asOf: asOf || Date.now() };
}

function finite(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function round(value: number, digits: number): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function downsample(values: number[], count: number): number[] {
  if (values.length <= count) return values.map((value) => round(value, 4));
  const out: number[] = [];
  const step = (values.length - 1) / (count - 1);
  for (let index = 0; index < count; index += 1) {
    out.push(round(values[Math.round(index * step)], 4));
  }
  return out;
}
