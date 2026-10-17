import { createServerFn } from "@tanstack/react-start";

export type YahooPayload = {
  quotes: { ticker: string; price: number; changePct: number; series: number[] }[];
  asOf: number;
};

export const fetchYahooQuotes = createServerFn({ method: "GET" }).handler(async (): Promise<YahooPayload> => {
  const { loadYahooQuotes } = await import("./yahoo.server");
  return loadYahooQuotes();
});
