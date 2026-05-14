import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BesA3BMy.js","_app/immutable/chunks/BWVDpIwq.js","_app/immutable/chunks/BOx1Dl6y.js","_app/immutable/chunks/DADbbnOU.js","_app/immutable/chunks/CEoA1FfT.js","_app/immutable/chunks/Bj18zKkp.js","_app/immutable/chunks/DuCmBTT3.js"];
export const stylesheets = [];
export const fonts = [];
