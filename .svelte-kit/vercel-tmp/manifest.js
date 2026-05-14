export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","og.svg","resume.pdf"]),
	mimeTypes: {".svg":"image/svg+xml",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.WdwLUXHP.js",app:"_app/immutable/entry/app.C8G7htLU.js",imports:["_app/immutable/entry/start.WdwLUXHP.js","_app/immutable/chunks/BskdB5aB.js","_app/immutable/chunks/CBrUOdHu.js","_app/immutable/entry/app.C8G7htLU.js","_app/immutable/chunks/CBrUOdHu.js","_app/immutable/chunks/t0yeuLjc.js","_app/immutable/chunks/DqbGOY_1.js","_app/immutable/chunks/BDWROwD3.js","_app/immutable/chunks/CO6nug5s.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.ts.js'))
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
