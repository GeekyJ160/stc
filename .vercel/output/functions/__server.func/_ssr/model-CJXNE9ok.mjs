//#region node_modules/.nitro/vite/services/ssr/assets/model-CJXNE9ok.js
var CATEGORIES = [
	{
		id: "momentum",
		label: "Momentum Setups",
		short: "Momentum"
	},
	{
		id: "volatility",
		label: "Volatility Spikes",
		short: "Volatility"
	},
	{
		id: "sector",
		label: "Sector Rotations",
		short: "Sector"
	},
	{
		id: "pattern",
		label: "Pattern Matches",
		short: "Pattern"
	},
	{
		id: "risk",
		label: "Risk Warnings",
		short: "Risk"
	}
];
var KIND_CATEGORY = {
	"Momentum Setup": "momentum",
	"Volatility Spike": "volatility",
	"Sector Rotation": "sector",
	"Pattern Match": "pattern",
	"Risk Warning": "risk"
};
var DEFAULT_PROFILE = {
	onboarded: false,
	capital: 5e3,
	risk: "balanced",
	categories: [
		"momentum",
		"volatility",
		"sector",
		"pattern",
		"risk"
	],
	channels: ["push"],
	frequency: "realtime",
	intel: true
};
var PULSE_LINES = [
	"Momentum rising in mid-cap tech. Volatility stable.",
	"Healthcare bid is firm. Energy still softening.",
	"Financials neutral. Large-cap trend steady.",
	"Small-cap ranges widening. Leadership has not rotated."
];
var INSTRUMENTS = [
	{
		ticker: "IOT",
		name: "Samsara",
		sector: "Technology",
		cap: "Mid",
		price: 38.4,
		changePct: 2.35
	},
	{
		ticker: "AVGO",
		name: "Broadcom",
		sector: "Technology",
		cap: "Large",
		price: 184.2,
		changePct: 1.62
	},
	{
		ticker: "PLTR",
		name: "Palantir",
		sector: "Technology",
		cap: "Large",
		price: 42.15,
		changePct: 2.84
	},
	{
		ticker: "SMCI",
		name: "Super Micro",
		sector: "Technology",
		cap: "Mid",
		price: 48.6,
		changePct: 4.42
	},
	{
		ticker: "CRWD",
		name: "CrowdStrike",
		sector: "Technology",
		cap: "Large",
		price: 312.4,
		changePct: 1.05
	},
	{
		ticker: "AMD",
		name: "AMD",
		sector: "Technology",
		cap: "Large",
		price: 168.9,
		changePct: 2.18
	},
	{
		ticker: "NVDA",
		name: "NVIDIA",
		sector: "Technology",
		cap: "Large",
		price: 138.4,
		changePct: 1.74
	},
	{
		ticker: "LLY",
		name: "Eli Lilly",
		sector: "Healthcare",
		cap: "Large",
		price: 892.3,
		changePct: 1.28
	},
	{
		ticker: "UNH",
		name: "UnitedHealth",
		sector: "Healthcare",
		cap: "Large",
		price: 548.2,
		changePct: -.64
	},
	{
		ticker: "XOM",
		name: "Exxon Mobil",
		sector: "Energy",
		cap: "Large",
		price: 118.4,
		changePct: -1.12
	},
	{
		ticker: "CVX",
		name: "Chevron",
		sector: "Energy",
		cap: "Large",
		price: 152.1,
		changePct: -.58
	},
	{
		ticker: "COP",
		name: "ConocoPhillips",
		sector: "Energy",
		cap: "Large",
		price: 109.8,
		changePct: -1.46
	},
	{
		ticker: "JPM",
		name: "JPMorgan",
		sector: "Financials",
		cap: "Large",
		price: 228.5,
		changePct: .72
	},
	{
		ticker: "GS",
		name: "Goldman Sachs",
		sector: "Financials",
		cap: "Large",
		price: 524,
		changePct: .94
	},
	{
		ticker: "CAT",
		name: "Caterpillar",
		sector: "Industrials",
		cap: "Large",
		price: 396.7,
		changePct: .61
	},
	{
		ticker: "BA",
		name: "Boeing",
		sector: "Industrials",
		cap: "Large",
		price: 178.2,
		changePct: -.38
	}
];
var SIGNALS = [
	{
		id: "sig-iot",
		ticker: "IOT",
		kind: "Momentum Setup",
		trend: "Up",
		trendStrength: "High",
		volatility: "Low",
		probability: 72,
		volumeStatus: "Elevated",
		volumeCopy: "Unusual inflow detected.",
		pattern: 78,
		riskLevel: "Medium",
		note: "Continuation likely. Watch for volume confirmation.",
		commentary: "Momentum shift forming. Probability favors continuation if volume holds."
	},
	{
		id: "sig-avgo",
		ticker: "AVGO",
		kind: "Momentum Setup",
		trend: "Up",
		trendStrength: "High",
		volatility: "Low",
		probability: 74,
		volumeStatus: "Elevated",
		volumeCopy: "Inflow above the 20-session norm.",
		pattern: 76,
		riskLevel: "Low",
		note: "Trend is orderly. No chase required.",
		commentary: "Large-cap leadership is intact. Adds only make sense on a pause, not a spike."
	},
	{
		id: "sig-pltr",
		ticker: "PLTR",
		kind: "Pattern Match",
		trend: "Up",
		trendStrength: "High",
		volatility: "Moderate",
		probability: 69,
		volumeStatus: "Building",
		volumeCopy: "Volume is rising, not yet extreme.",
		pattern: 74,
		riskLevel: "Medium",
		note: "Pattern is constructive. Wait for the range to resolve.",
		commentary: "Historical matches favor continuation. The setup is early, not confirmed."
	},
	{
		id: "sig-lly",
		ticker: "LLY",
		kind: "Sector Rotation",
		trend: "Up",
		trendStrength: "Medium",
		volatility: "Low",
		probability: 67,
		volumeStatus: "Steady",
		volumeCopy: "Participation is broad inside healthcare.",
		pattern: 71,
		riskLevel: "Low",
		note: "Rotation into healthcare is orderly.",
		commentary: "Sector bid is real. Single-name risk stays modest if the trend holds."
	},
	{
		id: "sig-gs",
		ticker: "GS",
		kind: "Momentum Setup",
		trend: "Up",
		trendStrength: "Medium",
		volatility: "Moderate",
		probability: 66,
		volumeStatus: "Steady",
		volumeCopy: "No unusual block prints.",
		pattern: 64,
		riskLevel: "Medium",
		note: "Financials bid is holding. Not a leadership change.",
		commentary: "Momentum is positive and unremarkable. Size it as a secondary setup."
	},
	{
		id: "sig-crwd",
		ticker: "CRWD",
		kind: "Pattern Match",
		trend: "Up",
		trendStrength: "Medium",
		volatility: "Low",
		probability: 64,
		volumeStatus: "Normal",
		volumeCopy: "Volume is inside the usual band.",
		pattern: 70,
		riskLevel: "Low",
		note: "Pattern match is decent. Catalyst is missing.",
		commentary: "Structure is clean. Probability does not justify urgency."
	},
	{
		id: "sig-jpm",
		ticker: "JPM",
		kind: "Pattern Match",
		trend: "Up",
		trendStrength: "Medium",
		volatility: "Low",
		probability: 63,
		volumeStatus: "Normal",
		volumeCopy: "Flow is balanced.",
		pattern: 66,
		riskLevel: "Low",
		note: "Quiet trend. Useful as a stabilizer, not a lead.",
		commentary: "Continuation is possible. Nothing in the tape argues for speed."
	},
	{
		id: "sig-cat",
		ticker: "CAT",
		kind: "Sector Rotation",
		trend: "Up",
		trendStrength: "Medium",
		volatility: "Moderate",
		probability: 63,
		volumeStatus: "Building",
		volumeCopy: "Industrials are participating, not leading.",
		pattern: 62,
		riskLevel: "Medium",
		note: "Rotation is early. Trend stability is the tell.",
		commentary: "Multiple sectors are showing early rotation. This one is not confirmed."
	},
	{
		id: "sig-smci",
		ticker: "SMCI",
		kind: "Volatility Spike",
		trend: "Up",
		trendStrength: "High",
		volatility: "High",
		probability: 61,
		volumeStatus: "Elevated",
		volumeCopy: "Range expansion with heavy prints.",
		pattern: 58,
		riskLevel: "High",
		note: "Move is fast. Confirmation is incomplete.",
		commentary: "Volatility is doing the work. Smaller size until the range cools."
	},
	{
		id: "sig-amd",
		ticker: "AMD",
		kind: "Volatility Spike",
		trend: "Up",
		trendStrength: "Medium",
		volatility: "Moderate",
		probability: 59,
		volumeStatus: "Elevated",
		volumeCopy: "Short-term volume is hot versus last week.",
		pattern: 55,
		riskLevel: "Medium",
		note: "Semi bid is broad. This name is the noisy one.",
		commentary: "A spike without a base. Treat it as a watch item, not a core."
	},
	{
		id: "sig-xom",
		ticker: "XOM",
		kind: "Risk Warning",
		trend: "Down",
		trendStrength: "Medium",
		volatility: "Moderate",
		probability: 58,
		volumeStatus: "Rising",
		volumeCopy: "Selling is steady, not panicked.",
		pattern: 49,
		riskLevel: "Medium",
		note: "Energy is weakening. Do not average a fading tape.",
		commentary: "Downside pressure is orderly. The warning is about exposure, not a crash call."
	},
	{
		id: "sig-cop",
		ticker: "COP",
		kind: "Risk Warning",
		trend: "Down",
		trendStrength: "Low",
		volatility: "High",
		probability: 48,
		volumeStatus: "Erratic",
		volumeCopy: "Prints are uneven. No clean bid.",
		pattern: 41,
		riskLevel: "High",
		note: "High-vol fade. Outside a conservative book.",
		commentary: "Probability does not favor a turn. Reduce, don't explain the position."
	}
];
var SEED_ALERTS = [
	{
		id: "al-iot",
		ticker: "IOT",
		category: "momentum",
		title: "Momentum Alert — Mid-Cap Tech",
		minutesAgo: 8,
		probability: 72,
		body: "Momentum rising. Watch for breakout confirmation.",
		signalId: "sig-iot"
	},
	{
		id: "al-avgo",
		ticker: "AVGO",
		category: "momentum",
		title: "Momentum Alert — Large-Cap Tech",
		minutesAgo: 22,
		probability: 74,
		body: "Continuation likely. Volume still supportive.",
		signalId: "sig-avgo"
	},
	{
		id: "al-gs",
		ticker: "GS",
		category: "momentum",
		title: "Momentum Alert — Large-Cap Financials",
		minutesAgo: 47,
		probability: 66,
		body: "Financials bid holding. Trend strength moderate.",
		signalId: "sig-gs"
	},
	{
		id: "al-smci",
		ticker: "SMCI",
		category: "volatility",
		title: "Volatility Alert — Mid-Cap Tech",
		minutesAgo: 14,
		probability: 61,
		body: "Range expanding. Size smaller until it cools.",
		signalId: "sig-smci"
	},
	{
		id: "al-amd",
		ticker: "AMD",
		category: "volatility",
		title: "Volatility Alert — Large-Cap Tech",
		minutesAgo: 36,
		probability: 59,
		body: "Volatility up in semis. Confirmation missing.",
		signalId: "sig-amd"
	},
	{
		id: "al-lly",
		ticker: "LLY",
		category: "sector",
		title: "Sector Alert — Large-Cap Healthcare",
		minutesAgo: 19,
		probability: 67,
		body: "Healthcare rotation building. Momentum positive.",
		signalId: "sig-lly"
	},
	{
		id: "al-cat",
		ticker: "CAT",
		category: "sector",
		title: "Sector Alert — Large-Cap Industrials",
		minutesAgo: 54,
		probability: 63,
		body: "Industrials participating. Not a leadership shift yet.",
		signalId: "sig-cat"
	}
];
var SAMPLE_POSITIONS = [
	{
		id: "p-avgo",
		ticker: "AVGO",
		shares: 10,
		avg: 176.4
	},
	{
		id: "p-iot",
		ticker: "IOT",
		shares: 40,
		avg: 36.2
	},
	{
		id: "p-smci",
		ticker: "SMCI",
		shares: 17,
		avg: 44.8
	},
	{
		id: "p-xom",
		ticker: "XOM",
		shares: 15,
		avg: 121.5
	},
	{
		id: "p-jpm",
		ticker: "JPM",
		shares: 5,
		avg: 221
	},
	{
		id: "p-lly",
		ticker: "LLY",
		shares: 2,
		avg: 860
	},
	{
		id: "p-cat",
		ticker: "CAT",
		shares: 2,
		avg: 388
	}
];
var instrumentMap = new Map(INSTRUMENTS.map((item) => [item.ticker, item]));
var signalMap = new Map(SIGNALS.map((item) => [item.id, item]));
function instrument(ticker) {
	const found = instrumentMap.get(ticker);
	if (!found) throw new Error(`Unknown ticker ${ticker}`);
	return found;
}
function signalById(id) {
	return signalMap.get(id);
}
function signalForTicker(ticker) {
	return SIGNALS.find((item) => item.ticker === ticker);
}
function mulberry32(seed) {
	let state = seed >>> 0;
	return () => {
		state = state + 1831565813 | 0;
		let t = Math.imul(state ^ state >>> 15, 1 | state);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function tickerSeed(ticker) {
	return ticker.split("").reduce((sum, char) => sum + char.charCodeAt(0) * 17, 101);
}
function makeSeries(ticker, price, changePct) {
	const rand = mulberry32(tickerSeed(ticker));
	const count = 32;
	const start = price / (1 + changePct / 100);
	const drift = (price - start) / count;
	const out = [];
	let value = start;
	for (let index = 0; index < count; index += 1) {
		value += drift + (rand() - .5) * price * .006;
		out.push(Math.round(value * 100) / 100);
	}
	out[31] = Math.round(price * 100) / 100;
	return out;
}
function initialQuotes() {
	const quotes = {};
	for (const item of INSTRUMENTS) quotes[item.ticker] = {
		price: item.price,
		changePct: item.changePct,
		base: item.price,
		series: makeSeries(item.ticker, item.price, item.changePct)
	};
	return quotes;
}
function formatMoney(value, digits = 0) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(value);
}
function formatPrice(value) {
	return formatMoney(value, value >= 1e3 ? 0 : 2);
}
function formatPct(value) {
	return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
}
function formatClock(date) {
	return date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit"
	});
}
function formatStamp(minutesAgo, now = /* @__PURE__ */ new Date()) {
	return formatClock(/* @__PURE__ */ new Date(now.getTime() - minutesAgo * 6e4));
}
function parseCapital(input) {
	const cleaned = input.trim().toLowerCase().replace(/\$/g, "").replace(/,/g, "").replace(/\s+/g, "");
	if (!cleaned) return null;
	const parts = cleaned.split(/[-–—]/).map(parsePart);
	if (parts.some((part) => part == null)) return null;
	const numbers = parts;
	if (numbers.length === 1) return numbers[0];
	return Math.round((numbers[0] + numbers[1]) / 2);
}
function parsePart(part) {
	const match = part.match(/^(\d+(\.\d+)?)(k|m)?$/);
	if (!match) return null;
	let value = Number(match[1]);
	if (match[3] === "k") value *= 1e3;
	if (match[3] === "m") value *= 1e6;
	if (!Number.isFinite(value) || value <= 0 || value > 1e9) return null;
	return Math.round(value);
}
function capLabel(cap) {
	if (cap === "Large") return "Large-Cap";
	if (cap === "Mid") return "Mid-Cap";
	return "Small-Cap";
}
function sectorShort(sector) {
	return sector === "Technology" ? "Tech" : sector;
}
function setupTitle(signal, item) {
	return `${signal.kind} — ${capLabel(item.cap)} ${sectorShort(item.sector)}`;
}
function alertTitle(signal, item) {
	return `${signal.kind.replace("Setup", "Alert").replace("Spike", "Alert").replace("Match", "Alert").replace("Rotation", "Alert").replace("Warning", "Alert")} — ${capLabel(item.cap)} ${sectorShort(item.sector)}`;
}
function inProfile(signal, risk) {
	if (risk === "aggressive") return true;
	if (risk === "balanced") return signal.probability >= 58 && signal.riskLevel !== "High";
	return signal.probability >= 65 && signal.volatility !== "High" && signal.kind !== "Risk Warning";
}
function capitalInsight(capital, mode) {
	const money = formatMoney(capital);
	if (capital < 15e3) return mode === "card" ? `With ${money}: diversify across 2–3 correlated setups.` : `With ${money}: stagger entries to reduce volatility impact.`;
	if (capital < 4e4) return `With ${money}: stagger entries. Keep any one name a modest slice of capital.`;
	return `With ${money}: position-sizing model recommended.`;
}
function secondaryCapitalLine(capital) {
	if (capital >= 4e4) return "With $5,000: stagger entries to reduce volatility impact.";
	return "With $50,000: position-sizing model recommended.";
}
function trendCopy(signal) {
	if (signal.trend === "Up") return "Momentum increasing across multiple timeframes.";
	if (signal.trend === "Down") return "Momentum fading across the short window.";
	return "No confirmed direction. Waiting on range resolution.";
}
function categoryCounts(alerts) {
	return CATEGORIES.map((item) => ({
		category: item.id,
		count: alerts.filter((alert) => alert.category === item.id).length
	})).filter((item) => item.count > 0);
}
function breakdownText(alerts) {
	const labels = {
		momentum: "momentum",
		volatility: "volatility",
		sector: "sector rotation",
		pattern: "pattern",
		risk: "risk"
	};
	return categoryCounts(alerts).map((item) => `${item.count} ${labels[item.category]}`).join(", ");
}
function isCategory(value) {
	return CATEGORIES.some((item) => item.id === value);
}
function isRisk(value) {
	return value === "conservative" || value === "balanced" || value === "aggressive";
}
function isChannel(value) {
	return value === "push" || value === "sms" || value === "email";
}
function isFrequency(value) {
	return value === "realtime" || value === "hourly" || value === "daily";
}
function sectorBoards(quotes) {
	return [
		"Technology",
		"Energy",
		"Financials",
		"Healthcare",
		"Industrials"
	].map((name) => {
		const avg = sectorAvg(quotes, name);
		return {
			name,
			avg,
			strength: sectorWord(avg),
			score: Math.max(8, Math.min(96, Math.round(50 + avg * 14)))
		};
	});
}
function sectorWord(avg) {
	if (avg >= 1.2) return "High";
	if (avg >= .35) return "Rising Momentum";
	if (avg <= -1.2) return "Weakening";
	if (avg <= -.35) return "Soft";
	return "Neutral";
}
function sectorAvg(quotes, sector) {
	const rows = INSTRUMENTS.filter((item) => item.sector === sector);
	return rows.reduce((sum, item) => sum + (quotes[item.ticker]?.changePct ?? 0), 0) / (rows.length || 1);
}
function bookVolatility(quotes) {
	const moves = INSTRUMENTS.map((item) => Math.abs(quotes[item.ticker]?.changePct ?? 0));
	const avg = moves.reduce((sum, value) => sum + value, 0) / (moves.length || 1);
	if (avg >= 1.8) return {
		level: "Elevated",
		note: "Wide session. Size down on the fast names."
	};
	if (avg >= .7) return {
		level: "Moderate",
		note: "Ordinary session range. Breakouts still need volume."
	};
	return {
		level: "Low",
		note: "Tight session. Most of the book is drifting."
	};
}
function pulseFromQuotes(quotes) {
	const spy = quotes.SPY;
	if (!spy) return null;
	return `SPY ${formatPct(spy.changePct)}. Tech ${formatPct(sectorAvg(quotes, "Technology"))}. Energy ${formatPct(sectorAvg(quotes, "Energy"))}.`;
}
function marketStatus(asOf, now = Date.now()) {
	if (!asOf) return {
		live: false,
		label: "Connecting"
	};
	const live = (now - asOf) / 6e4 < 15 && inRegularSession(now);
	const clock = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
		timeZone: "America/New_York"
	}).format(new Date(asOf));
	return {
		live,
		label: live ? "Live" : `${clock} ET`
	};
}
function inRegularSession(now) {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		weekday: "short",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	}).formatToParts(new Date(now));
	const read = (type) => parts.find((part) => part.type === type)?.value ?? "";
	const day = read("weekday");
	if (day === "Sat" || day === "Sun") return false;
	const minutes = Number(read("hour")) * 60 + Number(read("minute"));
	return minutes >= 570 && minutes < 960;
}
//#endregion
export { setupTitle as A, isRisk as C, secondaryCapitalLine as D, pulseFromQuotes as E, signalForTicker as M, trendCopy as N, sectorBoards as O, isFrequency as S, parseCapital as T, inProfile as _, PULSE_LINES as a, isCategory as b, SIGNALS as c, breakdownText as d, capitalInsight as f, formatStamp as g, formatPrice as h, KIND_CATEGORY as i, signalById as j, sectorShort as k, alertTitle as l, formatPct as m, DEFAULT_PROFILE as n, SAMPLE_POSITIONS as o, formatMoney as p, INSTRUMENTS as r, SEED_ALERTS as s, CATEGORIES as t, bookVolatility as u, initialQuotes as v, marketStatus as w, isChannel as x, instrument as y };
