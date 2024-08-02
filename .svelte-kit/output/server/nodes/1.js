

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8738329b.js","_app/immutable/chunks/scheduler.13ff1175.js","_app/immutable/chunks/index.c6531af0.js","_app/immutable/chunks/singletons.8e2f7992.js","_app/immutable/chunks/index.ea390ae7.js"];
export const stylesheets = [];
export const fonts = [];
