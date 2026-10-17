import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quotes-BR969EtF.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchYahooQuotes_createServerFn_handler = createServerRpc({
	id: "f3e168a5aa7a181a8c260ccc86336abc4c806f5c6b559824cd888971462e44f5",
	name: "fetchYahooQuotes",
	filename: "src/lib/stockism/quotes.ts"
}, (opts) => fetchYahooQuotes.__executeServer(opts));
var fetchYahooQuotes = createServerFn({ method: "GET" }).handler(fetchYahooQuotes_createServerFn_handler, async () => {
	const { loadYahooQuotes } = await import("./yahoo.server-Cuxe1qso.mjs");
	return loadYahooQuotes();
});
//#endregion
export { fetchYahooQuotes_createServerFn_handler };
