import { r as INSTRUMENTS } from "./model-CJXNE9ok.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/yahoo.server-Cuxe1qso.js
var SYMBOLS = [...INSTRUMENTS.map((item) => item.ticker), "SPY"];
var UA = "Mozilla/5.0 (compatible; Stockism/1.0; +https://finance.yahoo.com)";
var cache = null;
async function loadYahooQuotes() {
	if (cache && Date.now() - cache.at < 12e3) return cache.payload;
	const payload = await pull();
	cache = {
		at: Date.now(),
		payload
	};
	return payload;
}
async function pull() {
	let lastError = "Yahoo Finance did not respond";
	for (const interval of ["1m", "5m"]) try {
		return await pullInterval(interval);
	} catch (error) {
		lastError = error instanceof Error ? error.message : lastError;
	}
	throw new Error(lastError);
}
async function pullInterval(interval) {
	const url = "https://query1.finance.yahoo.com/v8/finance/spark?symbols=" + encodeURIComponent(SYMBOLS.join(",")) + `&range=1d&interval=${interval}`;
	const response = await fetch(url, {
		headers: {
			Accept: "application/json",
			"User-Agent": UA
		},
		signal: AbortSignal.timeout(12e3)
	});
	if (!response.ok) throw new Error(`Yahoo Finance returned ${response.status}`);
	const body = await response.json();
	const quotes = [];
	let asOf = 0;
	for (const symbol of SYMBOLS) {
		const row = body[symbol];
		if (!row) continue;
		const closes = (row.close ?? []).filter((value) => typeof value === "number" && Number.isFinite(value));
		const price = finite(row.fulldayPrice) ?? closes.at(-1);
		if (price == null) continue;
		const previous = finite(row.previousClose);
		const changePct = finite(row.fulldayChangePercent) ?? (previous ? (price - previous) / previous * 100 : 0);
		const end = finite(row.end);
		if (end) asOf = Math.max(asOf, end * 1e3);
		quotes.push({
			ticker: row.symbol || symbol,
			price: round(price, 4),
			changePct: round(changePct, 2),
			series: downsample(closes.length ? closes : [price], 32)
		});
	}
	if (quotes.length === 0) throw new Error("Yahoo Finance returned no prices");
	return {
		quotes,
		asOf: asOf || Date.now()
	};
}
function finite(value) {
	return typeof value === "number" && Number.isFinite(value) ? value : null;
}
function round(value, digits) {
	const factor = 10 ** digits;
	return Math.round(value * factor) / factor;
}
function downsample(values, count) {
	if (values.length <= count) return values.map((value) => round(value, 4));
	const out = [];
	const step = (values.length - 1) / (count - 1);
	for (let index = 0; index < count; index += 1) out.push(round(values[Math.round(index * step)], 4));
	return out;
}
//#endregion
export { loadYahooQuotes };
