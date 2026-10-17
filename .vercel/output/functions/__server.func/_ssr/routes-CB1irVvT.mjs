import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as ChevronRight, c as Activity, i as Radio, n as Settings, o as Briefcase, r as ScanLine, s as Bell } from "../_libs/lucide-react.mjs";
import { A as setupTitle, C as isRisk, D as secondaryCapitalLine, E as pulseFromQuotes, M as signalForTicker, N as trendCopy, O as sectorBoards, S as isFrequency, T as parseCapital, _ as inProfile, a as PULSE_LINES, b as isCategory, c as SIGNALS, d as breakdownText, f as capitalInsight, g as formatStamp, h as formatPrice, i as KIND_CATEGORY, j as signalById, k as sectorShort, l as alertTitle, m as formatPct, n as DEFAULT_PROFILE, o as SAMPLE_POSITIONS, p as formatMoney, r as INSTRUMENTS, s as SEED_ALERTS, t as CATEGORIES, u as bookVolatility, v as initialQuotes, w as marketStatus, x as isChannel, y as instrument } from "./model-CJXNE9ok.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as YAxis, r as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CB1irVvT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Mark({ size = 36 }) {
	const id = (0, import_react.useId)().replace(/:/g, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id,
				x1: "8",
				y1: "6",
				x2: "56",
				y2: "60",
				gradientUnits: "userSpaceOnUse",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#e7f3ff" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0.45",
						stopColor: "#5eb6ff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "#1d4ed8"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M46 13H24c-6.4 0-11 4.2-11 10.2S17.6 33 24 33h16c6.2 0 11 4 11 10.2C51 50.2 45.4 54 36.2 54H14",
				fill: "none",
				stroke: `url(#${id})`,
				strokeWidth: "8",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 22.5 47 15l2.2 7.2",
				fill: "none",
				stroke: `url(#${id})`,
				strokeWidth: "3.2",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		]
	});
}
function Wordmark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-baseline gap-1.5 leading-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-base font-semibold tracking-tight text-fg",
			children: "Stock-ism"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs font-medium tracking-widest text-primary",
			children: "AI"
		})]
	});
}
var lockup_default = "/assets/lockup-jnJbCQ4E.jpg";
function PrimaryButton({ className = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: `inline-flex h-12 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-bg transition-opacity disabled:opacity-40 ${className}`,
		...props
	});
}
function GhostButton({ className = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: `inline-flex h-12 items-center justify-center rounded-xl border border-line bg-surface px-5 text-sm font-medium text-fg transition-colors hover:bg-surface-2 disabled:opacity-40 ${className}`,
		...props
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `rounded-2xl border border-line bg-surface p-4 ${className}`,
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-xs tracking-widest text-primary uppercase",
		children
	});
}
function Choice({ selected, title, detail, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": selected,
		onClick,
		className: `flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left ${selected ? "border-primary bg-surface-2" : "border-line bg-surface"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm font-medium text-fg",
			children: title
		}), detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block text-sm text-muted",
			children: detail
		}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `size-3 shrink-0 rounded-full border ${selected ? "border-primary bg-primary" : "border-line"}`,
			"aria-hidden": "true"
		})]
	});
}
function Spark({ values, up }) {
	const min = Math.min(...values);
	const span = Math.max(...values) - min || 1;
	const d = values.map((value, index) => {
		const x = index / (values.length - 1) * 72;
		const y = 22 - (value - min) / span * 20;
		return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 72 24",
		className: "h-6 w-16 shrink-0",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d,
			fill: "none",
			stroke: up ? "var(--color-primary)" : "var(--color-risk)",
			strokeWidth: "1.6"
		})
	});
}
function Meter({ score }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1.5 overflow-hidden rounded-full bg-surface-2",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-primary",
			style: { width: `${score}%` }
		})
	});
}
function EmptyState({ title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted",
				children: body
			}),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex justify-center",
				children: action
			}) : null
		]
	});
}
var KEY = "stockism-v1";
var EMPTY_FEED = {
	ok: false,
	asOf: null,
	error: null
};
function asProfile(value) {
	if (!value || typeof value !== "object") return null;
	const raw = value;
	if (typeof raw.capital !== "number" || raw.capital <= 0) return null;
	if (!isRisk(String(raw.risk))) return null;
	const categories = Array.isArray(raw.categories) ? raw.categories.filter(isCategory) : null;
	const channels = Array.isArray(raw.channels) ? raw.channels.filter(isChannel) : null;
	if (!categories || !channels || !isFrequency(String(raw.frequency))) return null;
	return {
		onboarded: Boolean(raw.onboarded),
		capital: Math.round(raw.capital),
		risk: raw.risk,
		categories,
		channels,
		frequency: raw.frequency,
		intel: raw.intel !== false
	};
}
function asPositions(value) {
	if (!Array.isArray(value)) return [];
	return value.flatMap((item) => {
		if (!item || typeof item !== "object") return [];
		const row = item;
		if (typeof row.id !== "string" || typeof row.ticker !== "string") return [];
		if (!INSTRUMENTS.some((name) => name.ticker === row.ticker)) return [];
		if (typeof row.shares !== "number" || typeof row.avg !== "number") return [];
		if (row.shares <= 0 || row.avg <= 0) return [];
		return [{
			id: row.id,
			ticker: row.ticker,
			shares: row.shares,
			avg: row.avg
		}];
	});
}
var useStock = create((set, get) => ({
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
				const parsed = JSON.parse(raw);
				const profile = asProfile(parsed.profile);
				const positions = asPositions(parsed.positions);
				const read = Array.isArray(parsed.read) ? parsed.read.filter((id) => typeof id === "string") : [];
				if (profile) {
					set({
						profile,
						positions,
						read,
						hydrated: true
					});
					return;
				}
			}
		} catch {}
		set({ hydrated: true });
	},
	persist: () => {
		const { profile, positions, read } = get();
		localStorage.setItem(KEY, JSON.stringify({
			profile,
			positions,
			read
		}));
	},
	patchProfile: (patch) => set((state) => ({ profile: {
		...state.profile,
		...patch
	} })),
	setScreen: (screen) => set({ screen }),
	openSignal: (id) => set({
		screen: "detail",
		selectedId: id
	}),
	toggleRead: (id) => set((state) => ({ read: state.read.includes(id) ? state.read.filter((item) => item !== id) : [...state.read, id] })),
	markAllRead: (ids) => set((state) => ({ read: Array.from(/* @__PURE__ */ new Set([...state.read, ...ids])) })),
	addPosition: (position) => set((state) => ({ positions: [...state.positions, {
		...position,
		id: `p-${Date.now()}`
	}] })),
	removePosition: (id) => set((state) => ({ positions: state.positions.filter((item) => item.id !== id) })),
	loadSample: () => set({ positions: SAMPLE_POSITIONS.map((item) => ({ ...item })) }),
	clearPositions: () => set({ positions: [] }),
	dismissToast: () => set({ toast: null }),
	applyLive: (rows, asOf) => set((state) => {
		const quotes = { ...state.quotes };
		for (const row of rows) {
			const previous = quotes[row.ticker];
			quotes[row.ticker] = {
				price: row.price,
				changePct: row.changePct,
				base: row.price,
				series: row.series.length >= 2 ? row.series : previous?.series ?? row.series
			};
		}
		return {
			quotes,
			feed: {
				ok: true,
				asOf,
				error: null
			}
		};
	}),
	markFeedError: (message) => set((state) => ({ feed: {
		ok: state.feed.ok,
		asOf: state.feed.asOf,
		error: message
	} })),
	tick: () => {
		const state = get();
		const ticks = state.ticks + 1;
		const pulse = ticks % 10 === 0 ? (state.pulse + 1) % 4 : state.pulse;
		let extra = state.extra;
		let toast = state.toast;
		if (state.profile.intel && state.profile.frequency === "realtime" && ticks % 8 === 0) {
			const pool = SIGNALS.filter((signal) => state.profile.categories.includes(KIND_CATEGORY[signal.kind]) && inProfile(signal, state.profile.risk));
			const recent = new Set(extra.slice(-3).map((item) => item.ticker));
			const pick = pool.filter((signal) => !recent.has(signal.ticker));
			const chosen = pick[Math.floor(Math.random() * pick.length)];
			if (chosen) {
				const item = instrument(chosen.ticker);
				const alert = {
					id: `live-${chosen.ticker}-${ticks}`,
					ticker: chosen.ticker,
					category: KIND_CATEGORY[chosen.kind],
					title: alertTitle(chosen, item),
					minutesAgo: 0,
					probability: chosen.probability,
					body: chosen.note,
					signalId: chosen.id
				};
				extra = [alert, ...extra].slice(0, 8);
				toast = {
					id: alert.id,
					title: alert.title,
					body: alert.body,
					signalId: alert.signalId
				};
			}
		}
		set({
			ticks,
			pulse,
			extra,
			toast
		});
	},
	finishOnboarding: (profile) => set({
		profile,
		screen: "home"
	}),
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
			ticks: 0
		});
	}
}));
function allAlerts(extra) {
	return [...extra, ...SEED_ALERTS];
}
var RISKS = [
	{
		id: "conservative",
		title: "Conservative",
		detail: "Higher probability. Skip high-volatility names."
	},
	{
		id: "balanced",
		title: "Balanced",
		detail: "Standard band. High-risk warnings stay visible, not featured."
	},
	{
		id: "aggressive",
		title: "Aggressive",
		detail: "Surface the full tape, including fast and fading names."
	}
];
var CHANNELS = [
	{
		id: "push",
		title: "Push Notifications",
		detail: "On-device alerts while the system is open."
	},
	{
		id: "sms",
		title: "SMS",
		detail: "Saved as a preference. Delivery is simulated here."
	},
	{
		id: "email",
		title: "Email (optional)",
		detail: "Saved as a preference. Delivery is simulated here."
	}
];
function Onboarding() {
	const finish = useStock((state) => state.finishOnboarding);
	const persist = useStock((state) => state.persist);
	const [step, setStep] = (0, import_react.useState)(0);
	const [capitalText, setCapitalText] = (0, import_react.useState)("5000");
	const [risk, setRisk] = (0, import_react.useState)("balanced");
	const [categories, setCategories] = (0, import_react.useState)(DEFAULT_PROFILE.categories);
	const [channels, setChannels] = (0, import_react.useState)(["push"]);
	const capital = parseCapital(capitalText);
	function toggleCategory(id) {
		setCategories((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	function toggleChannel(id) {
		setChannels((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	function finishSetup() {
		if (capital == null || channels.length === 0 || categories.length === 0) return;
		finish({
			onboarded: true,
			capital,
			risk,
			categories,
			channels,
			frequency: "realtime",
			intel: true
		});
		persist();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "spotlight min-h-dvh text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { size: 32 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})]
			}), step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lockup_default,
					alt: "Stock-ism AI metallic monogram",
					className: "feather mx-auto mt-6 w-full max-w-sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-semibold tracking-tight",
							children: "Stock-ism AI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base leading-relaxed text-muted",
							children: "Market-Scanning Intelligence. Tactical Alerts. Zero Noise."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							className: "mt-6 w-full",
							onClick: () => setStep(1),
							children: "Activate System"
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 h-1 overflow-hidden rounded-full bg-line",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-primary",
							style: { width: `${step / 4 * 100}%` }
						})
					}),
					step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapitalStep, {
						value: capitalText,
						valid: capital != null,
						onChange: setCapitalText
					}) : null,
					step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskStep, {
						risk,
						onChange: setRisk
					}) : null,
					step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryStep, {
						categories,
						onToggle: toggleCategory
					}) : null,
					step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelStep, {
						channels,
						onToggle: toggleChannel
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto flex gap-3 pt-8 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-12 flex-1 rounded-xl border border-line text-sm font-medium text-fg",
							onClick: () => setStep((current) => current - 1),
							children: "Back"
						}), step < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							className: "flex-1",
							disabled: step === 1 && capital == null || step === 3 && categories.length === 0,
							onClick: () => setStep((current) => current + 1),
							children: step === 2 ? "Set Profile" : step === 3 ? "Save Preferences" : "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							className: "flex-1",
							disabled: channels.length === 0,
							onClick: finishSetup,
							children: "Finish Setup"
						})]
					})
				]
			})]
		})
	});
}
function CapitalStep({ value, valid, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold tracking-tight",
			children: "Your Capital Range"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: "Tell the system how much you typically deploy."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mt-6 block text-sm text-muted",
			htmlFor: "capital",
			children: "Enter amount or range"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: "capital",
			inputMode: "decimal",
			value,
			onChange: (event) => onChange(event.target.value),
			placeholder: "5000 or 5k-10k",
			className: "mt-2 h-12 w-full rounded-xl border border-line bg-surface px-4 font-mono text-fg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-faint",
			children: "Used only to tailor alert sizing."
		}),
		!valid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-risk",
			children: "Enter a number, a shorthand like 25k, or a range."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: [
				"5000",
				"25000",
				"50000",
				"100000"
			].map((amount) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onChange(amount),
				className: `h-10 rounded-lg border px-3 font-mono text-xs ${value === amount ? "border-primary text-fg" : "border-line text-muted"}`,
				children: ["$", Number(amount).toLocaleString("en-US")]
			}, amount))
		})
	] });
}
function RiskStep({ risk, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold tracking-tight",
			children: "Your Risk Mode"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: "Choose how aggressively the system should surface opportunities."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3",
			children: RISKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				selected: risk === item.id,
				title: item.title,
				detail: item.detail,
				onClick: () => onChange(item.id)
			}, item.id))
		})
	] });
}
function CategoryStep({ categories, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold tracking-tight",
			children: "Alert Categories"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: "Choose what the system should monitor for you."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3",
			children: CATEGORIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				selected: categories.includes(item.id),
				title: item.label,
				onClick: () => onToggle(item.id)
			}, item.id))
		})
	] });
}
function ChannelStep({ channels, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold tracking-tight",
			children: "How You Want Alerts"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: "Select your delivery method."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3",
			children: CHANNELS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				selected: channels.includes(item.id),
				title: item.title,
				detail: item.detail,
				onClick: () => onToggle(item.id)
			}, item.id))
		})
	] });
}
function HomeScreen() {
	const profile = useStock((state) => state.profile);
	const read = useStock((state) => state.read);
	const extra = useStock((state) => state.extra);
	const pulse = useStock((state) => state.pulse);
	const quotes = useStock((state) => state.quotes);
	const setScreen = useStock((state) => state.setScreen);
	const openSignal = useStock((state) => state.openSignal);
	const patchProfile = useStock((state) => state.patchProfile);
	const top = visibleSignals(profile.risk, profile.categories).slice(0, 3);
	const alerts = allAlerts(extra).filter((alert) => !read.includes(alert.id) && profile.categories.includes(alert.category));
	const vol = bookVolatility(quotes);
	const livePulse = pulseFromQuotes(quotes);
	const pulseLine = !profile.intel ? "Monitoring paused. Intelligence mode is off." : livePulse ?? PULSE_LINES[pulse];
	const spark = quotes.SPY?.series ?? quotes.NVDA?.series ?? [1, 2];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: profile.intel ? "System Online" : "System Standby" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-2xl font-semibold tracking-tight",
				children: profile.intel ? "Yahoo Finance is on the tape." : "Intelligence mode is off."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Market Pulse" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg leading-snug text-fg",
					children: pulseLine
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, {
						values: spark,
						up: (quotes.SPY?.changePct ?? quotes.NVDA?.changePct ?? 0) >= 0
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-start justify-between gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Today’s Key Signals" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "High-probability setups detected across multiple sectors."
					})] })
				}),
				top.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "No active signals inside this profile."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line",
					children: top.map((signal) => {
						const item = instrument(signal.ticker);
						const quote = quotes[signal.ticker];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openSignal(signal.id),
							className: "flex w-full items-center gap-3 py-3 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-sm text-fg",
										children: [
											signal.ticker,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: formatPct(quote.changePct)
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm text-muted",
										children: setupTitle(signal, item)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `font-mono text-sm tabular-nums ${signal.probability >= 70 ? "text-heat" : "text-fg"}`,
									children: [signal.probability, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "size-4 text-faint",
									"aria-hidden": "true"
								})
							]
						}) }, signal.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					className: "mt-2 w-full",
					onClick: () => setScreen("signals"),
					children: "View Signals"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Volatility Snapshot" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-lg font-medium",
						children: ["Volatility Level: ", vol.level]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: vol.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-3 gap-2",
						children: [
							"Low",
							"Moderate",
							"Elevated"
						].map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `rounded-lg py-2 text-center font-mono text-xs ${vol.level === level ? "bg-primary text-bg" : "bg-surface-2 text-faint"}`,
							children: level
						}, level))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Alert Summary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-3xl tabular-nums text-fg",
						children: alerts.length
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "New Alerts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: alerts.length ? breakdownText(alerts) : "All clear. System monitoring in real time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						className: "mt-4 w-full",
						onClick: () => setScreen("alerts"),
						children: "Open Alerts"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "bg-surface-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "System Online. Stay Ahead of the Market."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							onClick: () => patchProfile({ intel: !profile.intel }),
							children: profile.intel ? "Intelligence Mode On" : "Activate Intelligence Mode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
							onClick: () => setScreen("signals"),
							children: "View Signals"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
							onClick: () => setScreen("settings"),
							children: "Customize Alerts"
						})
					]
				})]
			})
		]
	});
}
function SignalsScreen() {
	const profile = useStock((state) => state.profile);
	const quotes = useStock((state) => state.quotes);
	const openSignal = useStock((state) => state.openSignal);
	const [sector, setSector] = (0, import_react.useState)("All");
	const [prob, setProb] = (0, import_react.useState)(0);
	const [vol, setVol] = (0, import_react.useState)("Any");
	const [trend, setTrend] = (0, import_react.useState)("Any");
	const [profileOnly, setProfileOnly] = (0, import_react.useState)(true);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Signals" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold tracking-tight",
					children: "Active Signals"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Real-time opportunities detected by the system."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-faint uppercase",
					children: "Filter Signals"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scroll-x mt-2 flex flex-nowrap gap-2 pb-1",
					children: sectors.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: sector === item,
						onClick: () => setSector(item),
						children: item === "Technology" ? "Tech" : item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scroll-x mt-2 flex flex-nowrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: prob === 0,
							onClick: () => setProb(0),
							children: "Any probability"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: prob === 60,
							onClick: () => setProb(60),
							children: "60%+"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: prob === 70,
							onClick: () => setProb(70),
							children: "70%+"
						}),
						[
							"Any",
							"Low",
							"Moderate",
							"High"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: vol === item,
							onClick: () => setVol(item),
							children: item === "Any" ? "Any volatility" : item
						}, `v-${item}`)),
						[
							"Any",
							"High",
							"Medium",
							"Low"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: trend === item,
							onClick: () => setTrend(item),
							children: item === "Any" ? "Any trend" : `${item} trend`
						}, `t-${item}`)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							on: profileOnly,
							onClick: () => setProfileOnly((value) => !value),
							children: [profile.risk, " profile"]
						})
					]
				})
			] }),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No Active Signals",
				body: "System scanning. New opportunities will appear soon.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					onClick: () => {
						setSector("All");
						setProb(0);
						setVol("Any");
						setTrend("Any");
						setProfileOnly(false);
					},
					children: "Reset filters"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: list.map((signal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignalCard, {
					signal,
					quote: quotes[signal.ticker],
					capital: profile.capital,
					onOpen: () => openSignal(signal.id)
				}, signal.id))
			})
		]
	});
}
function SignalCard({ signal, quote, capital, onOpen }) {
	const item = instrument(signal.ticker);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-line bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-wide text-primary uppercase",
							children: signal.kind
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-lg font-semibold",
							children: setupTitle(signal, item)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-sm text-muted",
							children: [
								signal.ticker,
								" · ",
								item.name,
								" · ",
								formatPrice(quote.price),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: quote.changePct >= 0 ? "text-primary" : "text-risk",
									children: formatPct(quote.changePct)
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-faint",
						children: "Probability"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `font-mono text-2xl tabular-nums ${signal.probability >= 70 ? "text-heat" : "text-fg"}`,
						children: [signal.probability, "%"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Trend Strength: ",
					signal.trendStrength,
					" · Volatility: ",
					signal.volatility
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-fg",
				children: ["AI Note: ", signal.note]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-faint",
				children: ["Capital-Aware Insight: ", capitalInsight(capital, "card")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, {
					values: quote.series,
					up: quote.changePct >= 0
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					className: "w-full sm:w-auto",
					onClick: onOpen,
					children: "View Analysis"
				})]
			})
		]
	}) });
}
function DetailScreen() {
	const selectedId = useStock((state) => state.selectedId);
	const quotes = useStock((state) => state.quotes);
	const capital = useStock((state) => state.profile.capital);
	const setScreen = useStock((state) => state.setScreen);
	const signal = selectedId ? signalById(selectedId) : void 0;
	if (!signal) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: "No Active Signals",
		body: "System scanning. New opportunities will appear soon.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
			onClick: () => setScreen("signals"),
			children: "Back to signals"
		})
	});
	const item = instrument(signal.ticker);
	const quote = quotes[signal.ticker];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setScreen("signals"),
				className: "w-fit text-sm text-primary",
				children: "Back to signals"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Signal Analysis" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold tracking-tight",
					children: setupTitle(signal, item)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-mono text-sm text-muted",
					children: [
						signal.ticker,
						" · ",
						item.name,
						" · ",
						formatPrice(quote.price),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: quote.changePct >= 0 ? "text-primary" : "text-risk",
							children: formatPct(quote.changePct)
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceChart, {
				series: quote.series,
				up: signal.trend !== "Down"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Trend" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-lg font-medium",
							children: ["Trend Direction: ", signal.trend]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: trendCopy(signal)
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Volume" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-lg font-medium",
							children: ["Volume Status: ", signal.volumeStatus]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: signal.volumeCopy
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Pattern Match" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-mono text-3xl tabular-nums text-heat",
							children: [signal.pattern, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Historical continuation in similar setups."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, { score: signal.pattern })
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Risk Score" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-lg font-medium",
							children: ["Risk Level: ", signal.riskLevel]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: signal.riskLevel === "High" ? "Volatility is elevated. Size down." : "Volatility stable but rising."
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "AI Commentary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-base leading-relaxed",
				children: [
					"“",
					signal.commentary,
					"”"
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Capital-Aware Suggestions" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-fg",
					children: capitalInsight(capital, "detail")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-faint",
					children: secondaryCapitalLine(capital)
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-faint",
				children: "Session prices from Yahoo Finance. The scan is a model, not investment advice."
			})
		]
	});
}
function PriceChart({ series, up }) {
	const ref = (0, import_react.useRef)(null);
	const [width, setWidth] = (0, import_react.useState)(320);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const measure = () => setWidth(Math.max(200, Math.floor(el.clientWidth)));
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	const color = up ? "var(--color-primary)" : "var(--color-risk)";
	const data = series.map((value, index) => ({
		index,
		value
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "h-36 w-full overflow-hidden rounded-2xl border border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
			width,
			height: 144,
			data,
			margin: {
				top: 12,
				right: 0,
				left: 0,
				bottom: 0
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				hide: true,
				domain: ["dataMin", "dataMax"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				type: "monotone",
				dataKey: "value",
				stroke: color,
				strokeWidth: 2,
				fill: color,
				fillOpacity: .14,
				dot: false,
				isAnimationActive: false
			})]
		})
	});
}
function ScannerScreen() {
	const quotes = useStock((state) => state.quotes);
	const openSignal = useStock((state) => state.openSignal);
	const ranked = [...INSTRUMENTS].sort((a, b) => moverScore(b.ticker, quotes) - moverScore(a.ticker, quotes)).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Scanner" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold tracking-tight",
					children: "Market Scanner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Live session from Yahoo Finance."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: sectorBoards(quotes).map((tile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: tile.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `mt-1 text-sm ${tile.avg >= .35 ? "text-primary" : tile.avg <= -.35 ? "text-risk" : "text-muted"}`,
							children: [
								tile.strength,
								" · ",
								formatPct(tile.avg)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, { score: tile.score })
						})
					]
				}, tile.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Top Movers" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-lg font-semibold",
					children: "Top Active Stocks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Ranked by momentum and anomaly detection."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-line",
					children: ranked.map((item) => {
						const quote = quotes[item.ticker];
						const signal = signalForTicker(item.ticker);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-sm",
										children: item.ticker
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "truncate text-sm text-muted",
										children: [
											item.name,
											" · ",
											sectorShort(item.sector)
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, {
									values: quote.series,
									up: quote.changePct >= 0
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-20 text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-sm tabular-nums",
										children: formatPrice(quote.price)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `font-mono text-xs tabular-nums ${quote.changePct >= 0 ? "text-primary" : "text-risk"}`,
										children: formatPct(quote.changePct)
									})]
								}),
								signal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "h-11 shrink-0 px-2 text-sm text-primary",
									onClick: () => openSignal(signal.id),
									children: "Open"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-11 shrink-0 text-right font-mono text-xs text-faint",
									children: "Scan"
								})
							]
						}, item.ticker);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "“Multiple sectors showing early rotation. Monitor trend stability.”"
			}) })
		]
	});
}
function AlertsScreen() {
	const profile = useStock((state) => state.profile);
	const extra = useStock((state) => state.extra);
	const read = useStock((state) => state.read);
	const toggleRead = useStock((state) => state.toggleRead);
	const openSignal = useStock((state) => state.openSignal);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const shown = allAlerts(extra).filter((alert) => profile.categories.includes(alert.category)).filter((alert) => filter === "all" || alert.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Alerts" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold tracking-tight",
					children: "Real-Time Alerts"
				}),
				profile.frequency !== "realtime" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [profile.frequency === "hourly" ? "Hourly" : "Daily", " digest. Live push is paused."]
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scroll-x flex flex-nowrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					on: filter === "all",
					onClick: () => setFilter("all"),
					children: "All"
				}), CATEGORIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					on: filter === item.id,
					onClick: () => setFilter(item.id),
					children: item.short
				}, item.id))]
			}),
			shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No New Alerts",
				body: "All clear. System monitoring in real time."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: shown.map((alert) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertCard, {
					alert,
					unread: !read.includes(alert.id),
					onOpen: () => {
						if (!read.includes(alert.id)) toggleRead(alert.id);
						if (alert.signalId) openSignal(alert.signalId);
					}
				}, alert.id))
			})
		]
	});
}
function AlertCard({ alert, unread, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: `w-full rounded-2xl border p-4 text-left ${unread ? "border-primary bg-surface" : "border-line bg-surface"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: alert.title
				}), unread ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-primary",
					children: "NEW"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-mono text-xs text-faint",
				children: [
					alert.ticker,
					" · Timestamp: ",
					formatStamp(alert.minutesAgo),
					" · Probability: ",
					alert.probability,
					"%"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: [
					"“",
					alert.body,
					"”"
				]
			})
		]
	}) });
}
function PortfolioScreen() {
	const positions = useStock((state) => state.positions);
	const quotes = useStock((state) => state.quotes);
	const addPosition = useStock((state) => state.addPosition);
	const removePosition = useStock((state) => state.removePosition);
	const loadSample = useStock((state) => state.loadSample);
	const clearPositions = useStock((state) => state.clearPositions);
	const [ticker, setTicker] = (0, import_react.useState)(INSTRUMENTS[0].ticker);
	const [shares, setShares] = (0, import_react.useState)("10");
	const [avg, setAvg] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	if (positions.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Portfolio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-2xl font-semibold tracking-tight",
				children: "Portfolio Overview"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No Positions Added",
				body: "Add your holdings to unlock portfolio insights.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => {
						loadSample();
					},
					children: "Load sample book"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddForm, {
				ticker,
				shares,
				avg,
				error,
				onTicker: setTicker,
				onShares: setShares,
				onAvg: setAvg,
				onAdd: () => {
					const count = Number(shares);
					const cost = Number(avg || quotes[ticker].price);
					if (!Number.isFinite(count) || count <= 0 || !Number.isFinite(cost) || cost <= 0) {
						setError("Shares and average cost need to be positive numbers.");
						return;
					}
					setError("");
					addPosition({
						ticker,
						shares: count,
						avg: cost
					});
				}
			})
		]
	});
	const rows = positions.map((position) => {
		const quote = quotes[position.ticker];
		const item = instrument(position.ticker);
		const value = position.shares * quote.price;
		return {
			position,
			item,
			quote,
			value,
			pnl: value - position.shares * position.avg
		};
	});
	const total = rows.reduce((sum, row) => sum + row.value, 0);
	const bySector = /* @__PURE__ */ new Map();
	for (const row of rows) bySector.set(row.item.sector, (bySector.get(row.item.sector) ?? 0) + row.value);
	const highVol = rows.filter((row) => signalForTicker(row.position.ticker)?.volatility === "High").reduce((sum, row) => sum + row.value, 0);
	const highShare = total > 0 ? highVol / total : 0;
	const risk = highShare > .2 ? "Elevated" : highShare > .05 ? "Moderate" : "Contained";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Portfolio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold tracking-tight",
					children: "Portfolio Overview"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-faint",
					onClick: clearPositions,
					children: "Clear"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-faint",
					children: "Reference value"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-3xl tabular-nums",
					children: formatMoney(total)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `mt-1 font-mono text-sm tabular-nums ${rows.reduce((s, r) => s + r.pnl, 0) >= 0 ? "text-primary" : "text-risk"}`,
					children: [formatMoney(rows.reduce((sum, row) => sum + row.pnl, 0)), " vs cost"]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Exposure" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-lg font-medium",
					children: "Sector Exposure"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3",
					children: [...bySector.entries()].sort((a, b) => b[1] - a[1]).map(([sector, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sector }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono tabular-nums text-muted",
							children: [Math.round(value / total * 100), "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, { score: Math.round(value / total * 100) })] }, sector))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Risk Distribution" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-lg font-medium",
					children: ["Risk Level: ", risk]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: highShare > .05 ? "Exposure to high-volatility assets detected." : "High-volatility names are a small slice of this book."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "AI Note" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed",
				children: highShare > .05 ? "Consider balancing with lower-volatility sectors to stabilize drawdowns." : "Mix is inside the band. Keep new risk from crowding the same sector."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm",
								children: row.position.ticker
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									row.position.shares,
									" sh · avg ",
									formatPrice(row.position.avg)
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm tabular-nums",
								children: formatMoney(row.value)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `font-mono text-xs tabular-nums ${row.pnl >= 0 ? "text-primary" : "text-risk"}`,
								children: formatMoney(row.pnl)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-sm text-faint",
							onClick: () => removePosition(row.position.id),
							"aria-label": `Remove ${row.position.ticker}`,
							children: "Remove"
						})
					]
				}, row.position.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddForm, {
				ticker,
				shares,
				avg,
				error,
				onTicker: setTicker,
				onShares: setShares,
				onAvg: setAvg,
				onAdd: () => {
					const count = Number(shares);
					const cost = Number(avg || quotes[ticker].price);
					if (!Number.isFinite(count) || count <= 0 || !Number.isFinite(cost) || cost <= 0) {
						setError("Shares and average cost need to be positive numbers.");
						return;
					}
					setError("");
					addPosition({
						ticker,
						shares: count,
						avg: cost
					});
				}
			})
		]
	});
}
function AddForm({ ticker, shares, avg, error, onTicker, onShares, onAvg, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-base font-semibold",
			children: "Add a position"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm text-muted",
					children: ["Ticker", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: ticker,
						onChange: (event) => onTicker(event.target.value),
						className: "h-12 rounded-xl border border-line bg-bg px-3 text-fg",
						children: INSTRUMENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.ticker,
							children: item.ticker
						}, item.ticker))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm text-muted",
					children: ["Shares", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "decimal",
						value: shares,
						onChange: (event) => onShares(event.target.value),
						className: "h-12 rounded-xl border border-line bg-bg px-3 font-mono text-fg"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm text-muted",
					children: ["Avg cost", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "decimal",
						value: avg,
						placeholder: "Market",
						onChange: (event) => onAvg(event.target.value),
						className: "h-12 rounded-xl border border-line bg-bg px-3 font-mono text-fg"
					})]
				})
			]
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-risk",
			children: error
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
			className: "mt-4",
			onClick: onAdd,
			children: "Add holding"
		})
	] });
}
function SettingsScreen() {
	const profile = useStock((state) => state.profile);
	const patchProfile = useStock((state) => state.patchProfile);
	const resetSystem = useStock((state) => state.resetSystem);
	const [capitalText, setCapitalText] = (0, import_react.useState)(String(profile.capital));
	const parsed = parseCapital(capitalText);
	function commitCapital() {
		if (parsed == null) return;
		patchProfile({ capital: parsed });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-2xl font-semibold tracking-tight",
				children: "System Settings"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: "Capital Range"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Update your capital range for tailored insights."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: capitalText,
					onChange: (event) => setCapitalText(event.target.value),
					onBlur: commitCapital,
					className: "mt-3 h-12 w-full rounded-xl border border-line bg-bg px-3 font-mono text-fg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					className: "mt-3",
					disabled: parsed == null,
					onClick: commitCapital,
					children: "Save range"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: "Risk Profile"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Adjust how aggressively the system surfaces opportunities."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: [
						"conservative",
						"balanced",
						"aggressive"
					].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: profile.risk === mode,
						onClick: () => patchProfile({ risk: mode }),
						children: mode
					}, mode))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: "Alert Frequency"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Choose how often alerts are delivered."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						["realtime", "Real time"],
						["hourly", "Hourly"],
						["daily", "Daily"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: profile.frequency === id,
						onClick: () => patchProfile({ frequency: id }),
						children: label
					}, id))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: "Notification Channels"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Push · SMS · Email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: [
						["push", "Push"],
						["sms", "SMS"],
						["email", "Email"]
					].map(([id, label]) => {
						const on = profile.channels.includes(id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => {
								const channels = on ? profile.channels.filter((item) => item !== id) : [...profile.channels, id];
								if (channels.length === 0) return;
								patchProfile({ channels });
							},
							className: `flex h-12 items-center justify-between rounded-xl border px-4 text-sm ${on ? "border-primary bg-surface-2" : "border-line"}`,
							children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted",
								children: on ? "On" : "Off"
							})]
						}, id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-semibold",
				children: "Alert Categories"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: CATEGORIES.map((item) => {
					const on = profile.categories.includes(item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on,
						onClick: () => {
							const categories = on ? profile.categories.filter((id) => id !== item.id) : [...profile.categories, item.id];
							if (categories.length === 0) return;
							patchProfile({ categories });
						},
						children: item.short
					}, item.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-semibold",
				children: "Theme"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Dark Mode (default). The system ships dark."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Session prices come from Yahoo Finance and refresh while this screen is open. The signal model does not place orders, send real SMS, or give investment advice."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-4 text-sm text-risk",
				onClick: resetSystem,
				children: "Reset system"
			})] })
		]
	});
}
function Chip({ on, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `h-10 shrink-0 rounded-lg border px-3 text-sm capitalize ${on ? "border-primary bg-surface-2 text-fg" : "border-line text-muted"}`,
		children
	});
}
function visibleSignals(risk, categories) {
	return SIGNALS.filter((signal) => categories.includes(KIND_CATEGORY[signal.kind]) && inProfile(signal, risk)).sort((a, b) => b.probability - a.probability);
}
function moverScore(ticker, quotes) {
	const quote = quotes[ticker];
	const signal = signalForTicker(ticker);
	return Math.abs(quote.changePct) * (signal ? 1.35 : 1) + (signal?.probability ?? 0) / 40;
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchYahooQuotes = createServerFn({ method: "GET" }).handler(createSsrRpc("f3e168a5aa7a181a8c260ccc86336abc4c806f5c6b559824cd888971462e44f5"));
var NAV = [
	{
		id: "home",
		label: "Home",
		icon: Activity
	},
	{
		id: "signals",
		label: "Signals",
		icon: Radio
	},
	{
		id: "scanner",
		label: "Scanner",
		icon: ScanLine
	},
	{
		id: "alerts",
		label: "Alerts",
		icon: Bell
	},
	{
		id: "portfolio",
		label: "Portfolio",
		icon: Briefcase
	}
];
function App() {
	const hydrated = useStock((state) => state.hydrated);
	const hydrate = useStock((state) => state.hydrate);
	const profile = useStock((state) => state.profile);
	const positions = useStock((state) => state.positions);
	const read = useStock((state) => state.read);
	const persist = useStock((state) => state.persist);
	const tick = useStock((state) => state.tick);
	const applyLive = useStock((state) => state.applyLive);
	const markFeedError = useStock((state) => state.markFeedError);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		persist();
	}, [
		hydrated,
		profile,
		positions,
		read,
		persist
	]);
	(0, import_react.useEffect)(() => {
		if (!hydrated || !profile.onboarded) return;
		const id = window.setInterval(() => tick(), 2500);
		return () => window.clearInterval(id);
	}, [
		hydrated,
		profile.onboarded,
		tick
	]);
	(0, import_react.useEffect)(() => {
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
		pull();
		const id = window.setInterval(() => void pull(), 15e3);
		const onVisible = () => {
			if (!document.hidden) pull();
		};
		document.addEventListener("visibilitychange", onVisible);
		return () => {
			cancel = true;
			window.clearInterval(id);
			document.removeEventListener("visibilitychange", onVisible);
		};
	}, [
		hydrated,
		profile.onboarded,
		applyLive,
		markFeedError
	]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {});
	if (!profile.onboarded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {});
}
function Splash() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "spotlight grid min-h-dvh place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid justify-items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { size: 56 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})]
		})
	});
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
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const id = window.setTimeout(() => dismissToast(), 5200);
		return () => window.clearTimeout(id);
	}, [toast, dismissToast]);
	const status = marketStatus(feed.asOf);
	const feedText = feed.error && !feed.ok ? "Yahoo down" : feed.error ? "Yahoo delayed" : `Yahoo · ${status.label}`;
	const unread = allAlerts(extra).filter((alert) => categories.includes(alert.category) && !read.includes(alert.id)).length;
	const active = screen === "detail" ? "signals" : screen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-dvh max-w-6xl md:grid-cols-[220px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden border-r border-line md:flex md:flex-col md:px-4 md:py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { size: 32 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-8 grid gap-1",
						"aria-label": "Primary",
						children: NAV.map((item) => {
							const Icon = item.icon;
							const on = active === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-current": on ? "page" : void 0,
								onClick: () => setScreen(item.id),
								className: `flex h-12 items-center gap-3 rounded-xl px-3 text-sm ${on ? "bg-surface-2 text-fg" : "text-muted"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4",
										"aria-hidden": "true"
									}),
									item.label,
									item.id === "alerts" && unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto font-mono text-xs text-primary",
										children: unread
									}) : null
								]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setScreen("settings"),
						className: `mt-auto flex h-12 items-center gap-3 rounded-xl px-3 text-sm ${screen === "settings" ? "bg-surface-2 text-fg" : "text-muted"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Settings"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-14 items-center justify-between gap-3 px-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 md:hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { size: 28 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hidden font-mono text-xs tracking-widest text-faint uppercase md:block",
									children: intel ? "System online" : "System standby"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex max-w-40 items-center gap-2 font-mono text-xs text-faint",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1.5 rounded-full ${status.live && intel ? "live-dot bg-primary" : "bg-faint"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: feedText
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "System settings",
										onClick: () => setScreen("settings"),
										className: "grid size-11 place-items-center rounded-xl text-muted md:hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
									})]
								})
							]
						}), intel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "scanbar",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 bg-line" })]
					}),
					toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							dismissToast();
							if (toast.signalId) openSignal(toast.signalId);
							else setScreen("alerts");
						},
						className: "mx-4 mt-3 rounded-xl border border-primary bg-surface px-4 py-3 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-primary",
								children: "NEW ALERT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium",
								children: toast.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: toast.body
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "mx-auto w-full max-w-3xl flex-1 px-4 py-5 pb-28 md:pb-10",
						children: [
							screen === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {}) : null,
							screen === "signals" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignalsScreen, {}) : null,
							screen === "detail" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailScreen, {}) : null,
							screen === "scanner" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScannerScreen, {}) : null,
							screen === "alerts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertsScreen, {}) : null,
							screen === "portfolio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioScreen, {}) : null,
							screen === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsScreen, {}) : null
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "nav-safe fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/95 backdrop-blur md:hidden",
			"aria-label": "Primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-5",
				children: NAV.map((item) => {
					const Icon = item.icon;
					const on = active === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-current": on ? "page" : void 0,
						onClick: () => setScreen(item.id),
						className: `flex h-16 w-full flex-col items-center justify-center gap-1 text-xs ${on ? "text-primary" : "text-faint"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": "true"
							}), item.id === "alerts" && unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-1 -right-2 size-2 rounded-full bg-primary" }) : null]
						}), item.label]
					}) }, item.id);
				})
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { Home as component };
