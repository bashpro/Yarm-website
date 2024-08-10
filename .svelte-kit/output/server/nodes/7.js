

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/time-table/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.6c75368d.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/index.c6531af0.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/ninjainfo.8fc67b0c.js"];
export const stylesheets = ["_app/immutable/assets/7.26c5d1af.css"];
export const fonts = [];
