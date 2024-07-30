

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/our-approach/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.79b5c382.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/index.c6531af0.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/5.4b5de7ff.css"];
export const fonts = [];
