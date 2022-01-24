export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-9a1a8914.js","js":["start-9a1a8914.js","chunks/vendor-1dddfd70.js","chunks/singletons-a6a7384f.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/search\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/movie\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,4],
				b: [1]
			}
		]
	}
};
