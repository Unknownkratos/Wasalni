export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.afaa8ab8.js","app":"_app/immutable/entry/app.7bdeb568.js","imports":["_app/immutable/entry/start.afaa8ab8.js","_app/immutable/chunks/index.b1627846.js","_app/immutable/chunks/singletons.9e321781.js","_app/immutable/chunks/index.3c8c5a90.js","_app/immutable/entry/app.7bdeb568.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.b1627846.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/bus",
				pattern: /^\/bus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/metro",
				pattern: /^\/metro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
