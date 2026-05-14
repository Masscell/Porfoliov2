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
		client: {start:"_app/immutable/entry/start.D45Pxn8D.js",app:"_app/immutable/entry/app.UhZYb38f.js",imports:["_app/immutable/entry/start.D45Pxn8D.js","_app/immutable/chunks/C6FuXhYH.js","_app/immutable/chunks/CBrUOdHu.js","_app/immutable/entry/app.UhZYb38f.js","_app/immutable/chunks/CBrUOdHu.js","_app/immutable/chunks/t0yeuLjc.js","_app/immutable/chunks/DqbGOY_1.js","_app/immutable/chunks/BDWROwD3.js","_app/immutable/chunks/CO6nug5s.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
