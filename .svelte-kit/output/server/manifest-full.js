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
		client: {start:"_app/immutable/entry/start.B-gi-pjC.js",app:"_app/immutable/entry/app.CtFgOhL1.js",imports:["_app/immutable/entry/start.B-gi-pjC.js","_app/immutable/chunks/oJvD7KkA.js","_app/immutable/chunks/BOx1Dl6y.js","_app/immutable/entry/app.CtFgOhL1.js","_app/immutable/chunks/BOx1Dl6y.js","_app/immutable/chunks/DuCmBTT3.js","_app/immutable/chunks/BWVDpIwq.js","_app/immutable/chunks/CEoA1FfT.js","_app/immutable/chunks/Bj18zKkp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
