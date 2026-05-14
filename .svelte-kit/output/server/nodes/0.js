import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CKBI6dOx.js","_app/immutable/chunks/BWVDpIwq.js","_app/immutable/chunks/BOx1Dl6y.js","_app/immutable/chunks/DADbbnOU.js","_app/immutable/chunks/Bj18zKkp.js"];
export const stylesheets = ["_app/immutable/assets/0.CahryQML.css"];
export const fonts = [];
