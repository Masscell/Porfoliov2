import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DX88OWdn.js","_app/immutable/chunks/DqbGOY_1.js","_app/immutable/chunks/CBrUOdHu.js","_app/immutable/chunks/CHf7XyyS.js","_app/immutable/chunks/BDWROwD3.js","_app/immutable/chunks/CO6nug5s.js","_app/immutable/chunks/t0yeuLjc.js"];
export const stylesheets = [];
export const fonts = [];
