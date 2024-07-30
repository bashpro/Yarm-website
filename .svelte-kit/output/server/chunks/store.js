import { w as writable, r as readable } from "./index2.js";
import { f as get_store_value } from "./ssr.js";
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const appStore = localStorageStore("app", []);
let appStoreLocal;
appStore.subscribe((i) => {
  appStoreLocal = i;
});
const navOpenVal = writable(false);
const mobileModeVal = writable(false);
function appFuncs() {
  let _ = {
    /**
     * Sets the application data in the local storage.
     * @param {any} data - The data to set.
     */
    setAppData: (data) => {
      appStore.set(data);
    },
    /**
     * Retrieves the application data from the local storage.
     * @returns {any} The application data.
     */
    getAppData: () => {
      return appStoreLocal;
    }
  };
  return _;
}
export {
  appFuncs as a,
  mobileModeVal as m,
  navOpenVal as n
};
