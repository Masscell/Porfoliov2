import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DUg5HgGm.js","_app/immutable/chunks/DqbGOY_1.js","_app/immutable/chunks/CBrUOdHu.js","_app/immutable/chunks/CHf7XyyS.js","_app/immutable/chunks/CO6nug5s.js"];
export const stylesheets = ["_app/immutable/assets/0.CahryQML.css"];
export const fonts = [];
