

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5ba41bae.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/index.c6531af0.js","_app/immutable/chunks/singletons.ac834ec5.js","_app/immutable/chunks/index.ea390ae7.js"];
export const stylesheets = [];
export const fonts = [];
