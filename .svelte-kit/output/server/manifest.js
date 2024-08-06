export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "bashpro.github.io/Yarm-website/_app",
	assets: new Set([".nojekyll","favicon.png","imgs/about-us.JPG","imgs/adults.JPG","imgs/IMG_0614-web.PNG","imgs/IMG_0614.PNG","imgs/IMG_0615-web.PNG","imgs/IMG_0615.PNG","imgs/IMG_0617-web.PNG","imgs/IMG_0617.PNG","imgs/IMG_0619-web.PNG","imgs/IMG_0619.PNG","imgs/IMG_0620-web.PNG","imgs/IMG_0620.PNG","imgs/IMG_0621-web.PNG","imgs/IMG_0621.PNG","imgs/index.html","imgs/junior-class.JPG","imgs/karate-kids.JPG","imgs/kickboxing.JPG","imgs/ladies-only.JPG","imgs/mma.mp4","imgs/mma3.mp4","imgs/ninja-tots.JPG","imgs/over-50s.JPG","imgs/Pypre.JPG","imgs/rules.JPG","imgs/script.js","imgs/sitting down.webp","imgs/style.css","imgs/the-team.PNG","imgs/Tony-Rice-web.PNG","imgs/tony-rice.JPG","imgs/Tony-Rice.PNG","imgs/users-female.JPG","imgs/users-male.JPG","imgs/YMAA_logo.png","mma3-old.mp4","mma3.mp4","mma3.webm","script.js","style.css","YMAA_logo.png","YMAA_logo_new.png"]),
	mimeTypes: {".png":"image/png",".JPG":"image/jpeg",".PNG":"image/png",".html":"text/html",".mp4":"video/mp4",".js":"application/javascript",".webp":"image/webp",".css":"text/css",".webm":"video/webm"},
	_: {
		client: {"start":"_app/immutable/entry/start.feb8183f.js","app":"_app/immutable/entry/app.e4566ce5.js","imports":["_app/immutable/entry/start.feb8183f.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/singletons.334b6aeb.js","_app/immutable/chunks/index.ea390ae7.js","_app/immutable/entry/app.e4566ce5.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/index.c6531af0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
