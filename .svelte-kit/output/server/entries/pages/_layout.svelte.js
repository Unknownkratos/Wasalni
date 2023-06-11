import { c as create_ssr_component } from "../../chunks/index2.js";
import "../../chunks/platform.js";
import "@ionic/core";
import { initialize } from "@ionic/core/components/index.js";
import "ionic-svelte/components/all.js";
const setupIonicBase = async (config) => {
  initialize(config);
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("ion-ce");
  }
};
const variables = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setupIonicBase();
  return `<ion-app>${slots.default ? slots.default({}) : ``}</ion-app>`;
});
export {
  Layout as default
};
