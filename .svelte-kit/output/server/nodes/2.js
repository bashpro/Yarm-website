

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fdfe5500.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/index.c6531af0.js","_app/immutable/chunks/form.89a703c3.js","_app/immutable/chunks/FormTemplate.4c5172bd.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/url.d5684080.js","_app/immutable/chunks/store.2fc47c2f.js","_app/immutable/chunks/index.ea390ae7.js","_app/immutable/chunks/ninjainfo.8fc67b0c.js"];
export const stylesheets = ["_app/immutable/assets/FormTemplate.1a603187.css","_app/immutable/assets/store.4f1e9ba5.css"];
export const fonts = [];
