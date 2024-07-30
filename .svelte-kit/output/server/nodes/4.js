

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/meet-the-team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.76d2de0c.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/index.c6531af0.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/4.65362384.css"];
export const fonts = [];
