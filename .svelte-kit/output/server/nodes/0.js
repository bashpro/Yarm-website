import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ffbb83b4.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/index.c6531af0.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/store.2fc47c2f.js","_app/immutable/chunks/index.ea390ae7.js","_app/immutable/chunks/url.2ff28665.js","_app/immutable/chunks/FormTemplate.4c5172bd.js"];
export const stylesheets = ["_app/immutable/assets/0.e51ed3b0.css","_app/immutable/assets/store.4f1e9ba5.css","_app/immutable/assets/FormTemplate.1a603187.css"];
export const fonts = [];
