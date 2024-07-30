import { g as getContext, c as create_ssr_component, d as subscribe, e as escape } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="flex w-full h-screen justify-center items-center flex-col"><h1 class="text-4xl pb-2">${escape($page.status)}: Page ${escape($page.error.message)}</h1> <span data-svelte-h="svelte-1fkixa1"><a href="/" class="text-zinc-600">click here</a> to redirect</span></div>`;
});
export {
  Error$1 as default
};
