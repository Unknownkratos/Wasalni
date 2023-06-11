import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/chunks/0.27cd619d.js","_app/immutable/chunks/_layout.7144f342.js","_app/immutable/chunks/index.b1627846.js","_app/immutable/chunks/platform.7f1c6cbc.js","_app/immutable/chunks/index.3c8c5a90.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
export const stylesheets = ["_app/immutable/assets/_layout.d0322363.css","_app/immutable/assets/platform.3243fe02.css"];
export const fonts = [];
