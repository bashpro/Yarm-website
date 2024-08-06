import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../chunks/ssr.js";
import { n as navOpenVal, m as mobileModeVal, a as appFuncs } from "../../chunks/store.js";
import { c as changeURL } from "../../chunks/url.js";
import { F as FormTemplate } from "../../chunks/FormTemplate.js";
let flTextPadding = "pl-[18px]";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date = /* @__PURE__ */ new Date();
  return `<div class="flex flex-row flex-wrap px-[15px] py-[25px]" id="footer"><div id="f-left" class="flex flex-1 min-w-[320px] text-zinc-500"><div id="fl-info" class="flex flex-col flex-[1.2] select-text"><p class="text-xl font-[400] text-zinc-900" data-svelte-h="svelte-u4oav9">Contact Info:</p> <p data-svelte-h="svelte-mg8xzr"><i class="fa-solid fa-location-dot"></i> Yarm Martial Arts</p> <p${add_attribute("class", flTextPadding, 0)}>10 West Street</p> <p${add_attribute("class", flTextPadding, 0)}>Yarm</p> <p${add_attribute("class", flTextPadding, 0)}>Stockton on Tees</p> <p class="${escape(flTextPadding, true) + " pb-2"}">TS15 9BU</p> <a href="tel:01642354937" class="py-1 hover:text-zinc-950 transition-all duration-200" data-svelte-h="svelte-16rgefb"><i class="fa-solid fa-phone"></i> 01642 354 937</a> <a href="mailto:info@yarmmartialarts.co.uk" class="py-1 hover:text-zinc-950 transition-all duration-200" data-svelte-h="svelte-1tesw3g"><i class="fa-solid fa-envelope"></i> info@yarmmartialarts.co.uk</a> <p class="py-4"><i class="fa-regular fa-copyright"></i> ${escape(date.getFullYear())} Yarm Martials arts</p></div> <div id="fl-times" class="flex flex-col flex-1 text-zinc-500 " data-svelte-h="svelte-1w3vc2g"><p class="text-xl font-[400] text-zinc-900">Opening Times:</p> <p>Mon - Fri: 9am - 8pm</p> <p>Saturday: 9am - 12pm</p> <p class="pb-4">Sunday: Closed</p> <a href="https://www.facebook.com/yarmmartialarts" target="_blank"><i class="fa-solid fa-square-facebook fa-brands text-2xl hover:text-zinc-950 transition-all duration-200"></i></a></div></div> <div id="f-right" class="flex flex-1 min-w-[320px]" data-svelte-h="svelte-45gi2v"> <div class="mapouter flex-1 w-full relative p-3"><div class="gmap_canvas w-full"><iframe class="flex-1 w-full relative" height="250" width="600" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Yarm%20Martial%20Arts&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> <br></div></div></div></div>`;
});
const app = "";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navOpen;
  let mobileMode;
  navOpenVal.subscribe((i) => navOpen = i);
  mobileModeVal.subscribe((i) => mobileMode = i);
  let navClass;
  let mobileClass;
  let navMenuList = [];
  function newNavMenu(item) {
    let newItem;
    function createItem(newItemData) {
      newItem = {
        name: newItemData.name,
        icon: newItemData.icon,
        parent: newItemData.parent,
        hideText: false,
        hover: false
      };
      newItemData.func ? newItem.func = newItemData.func : newItem.func = () => false;
      if (newItemData.hideText === true) {
        newItem.hideText = true;
      }
      navMenuList = [...navMenuList, newItem];
    }
    if (Array.isArray(item)) {
      for (let newItemData of item) {
        createItem(newItemData);
      }
    } else {
      createItem(item);
    }
  }
  let navMenuSections = [
    { name: "n-top", classes: "" },
    { name: "n-middle", classes: "flex-1" },
    { name: "n-bottom", classes: "" }
  ];
  newNavMenu([
    {
      name: "Home",
      icon: "fa-house",
      parent: "n-top",
      hideText: true,
      func: () => {
        changeURL("");
      }
    },
    {
      name: "",
      icon: "fa-bars",
      parent: "n-top",
      hideText: true,
      func: () => {
        navOpenVal.set(false);
      }
    },
    {
      name: "Our Approach",
      icon: "fa-user-ninja",
      parent: "n-middle",
      func: () => {
        changeURL("our approach");
      }
    },
    {
      name: "Our Classes",
      icon: "fa-user-graduate",
      parent: "n-middle",
      func: () => {
        changeURL("our classes");
      }
    },
    {
      name: "Meet The Team",
      icon: "fa-user-group fa-xs",
      parent: "n-middle",
      func: () => {
        changeURL("meet the team");
      }
    },
    {
      name: "Time Table",
      icon: "fa-calendar-days",
      parent: "n-middle",
      func: () => {
        changeURL("time table");
      }
    },
    {
      name: "Contact Us",
      icon: "fa-envelope",
      parent: "n-middle",
      func: () => {
        changeURL("contact us");
      }
    },
    {
      name: "Facebook",
      icon: "fa-square-facebook fa-brands",
      parent: "n-bottom",
      func: () => {
        changeURL("", "https://www.facebook.com/yarmmartialarts/");
      }
    }
  ]);
  navClass = navOpen ? "min-w-[200px]" : "min-w-[50px]";
  {
    {
      mobileMode && navOpen ? mobileClass = "max-[500px]:left-[0px] left-[0px] max-[500px]:w-[100vw] max-[500px]:min-w-[100vw]" : mobileClass = "max-[500px]:left-[-60px] left-[0px] max-[500px]:w-[0px] max-[500px]:min-w-[0px]";
    }
  }
  return `<div class="${escape(navClass, true) + " z-30 w-[50px] h-full bg-zinc-900 flex flex-col overflow-hidden transition-all relative " + escape(mobileClass, true)}" id="nav">${each(navMenuSections, (section) => {
    return `<div class="${"z-30 flex " + escape(
      section.name == "n-top" && mobileMode ? "flex-row" : "flex-col",
      true
    ) + " justify-center " + escape(section.classes, true)}"${add_attribute("id", section.name, 0)}>${each(navMenuList, (menuItem) => {
      return `${menuItem.parent === section.name ? `<button type="button" class="${"flex " + escape(
        menuItem.name == "Home" && mobileMode ? "w-full" : "w-[200px]",
        true
      ) + " h-[50px] items-center transition-all duration-200 hover:ml-1 group text-[#b73030] hover:text-zinc-200 relative " + escape(menuItem.icon == "fa-bars" ? "w-[fit-content]" : "", true) + " " + escape(
        menuItem.icon == "fa-bars" && !mobileMode ? "hidden" : "",
        true
      )}"${add_attribute("data-icon-text", menuItem.name, 0)}><p class="flex px-2 text-lg ml-2 mr-4"><i class="${"fa-solid " + escape(menuItem.icon, true)}"${add_attribute("data-icon-text", menuItem.name, 0)}></i></p> <p class="flex flex-1 items-center font-[500]">${escape(menuItem.name)}</p> <p class="${[
        "z-30 fixed left-[60px] px-3 py-1 rounded bg-zinc-900 transition-all duration-200 text-[#b73030] group-hover:text-zinc-200",
        menuItem.hover == false ? "hidden" : ""
      ].join(" ").trim()}">${escape(menuItem.name)}</p> </button>` : ``}`;
    })} </div>`;
  })}</div>`;
});
function secToMil(time) {
  return time * 1e3;
}
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let popupActive = false, dontShowAgainButton = false;
  setTimeout(
    () => {
      {
        popupActive = true;
      }
    },
    secToMil(30)
  );
  return `${popupActive ? `<div id="popup" class="${"top-0 left-0 w-full h-[100svh] fixed z-50 bg-opacity-40 bg-zinc-900 flex flex-col justify-center items-center opacity-0 " + escape(
    popupActive ? "transition-all duration-200 opacity-100" : "",
    true
  )}"><div class="w-[80vw] h-auto bg-zinc-200 "><div class="flex h-[50px] items-center justify-end"><button class="w-[50px] flex justify-center items-center" data-svelte-h="svelte-3gxgrw"><p class="text-2xl">x</p></button></div> ${validate_component(FormTemplate, "FormTemplate").$$render(
    $$result,
    {
      title: "Ready to book your first session on us?",
      titleTextStyle: "sm:text-[2.5rem] text-2xl",
      subTitle: "Just click this button below",
      subtitleTextStyle: "sm:text-3xl text-lg"
    },
    {},
    {}
  )} <div class="flex justify-center items-center"><input class="mr-4" type="checkbox"${add_attribute("checked", dontShowAgainButton, 1)}> <p data-svelte-h="svelte-oxp0lj">Don&#39;t show popup again</p></div></div></div>` : ``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-ub543t::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0, 0, 0, 0.3);background-color:rgba(0, 0, 0, 0)}.svelte-ub543t::-webkit-scrollbar{width:4px;background-color:rgba(0, 0, 0, 0)}.svelte-ub543t::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.2);border-radius:4px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}.svelte-ub543t::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.4)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let app2 = appFuncs().getAppData();
  if (app2.length < 1) {
    let obj = { selectedNinjaCard: "Ninja Tots" };
    appFuncs().setAppData(obj);
    app2 = appFuncs().getAppData();
    console.log(app2);
  }
  navOpenVal.subscribe((i) => i);
  let mainWindow;
  mobileModeVal.subscribe((i) => i);
  $$result.css.add(css);
  {
    {
      mobileModeVal.set(false);
    }
  }
  return ` <div class="flex flex-row select-none w-screen h-[100dvh] z-50 svelte-ub543t"><div class="flex flex-row w-screen h-[100dvh] select-none svelte-ub543t" id="content-holder">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <div class="z-[10] flex flex-col w-full h-auto bg-zinc-50 overflow-hidden overflow-y-auto svelte-ub543t" id="main-content"${add_attribute("this", mainWindow, 0)}><div class="z-[20] h-[50px] min-w-[calc(100%)] flex flex-col fixed transition-all duration-200 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-zinc-[rgba(0,0,0,0)] svelte-ub543t" id="mc-top"><div class="flex svelte-ub543t" id="mct-left"><div class="w-50px svelte-ub543t" id="mctl-navbar"><button class="flex w-[50px] h-[50px] items-center justify-center transition-all duration-200 hover:ml-1 text-zinc-400 hover:text-zinc-100 relative svelte-ub543t" id="mctl-btn" data-icon-text="bars" data-svelte-h="svelte-z9228n"><p class="flex px-2 text-lg ml-2 mr-4 svelte-ub543t" id="mctl-btn"><i class="fa-solid fa-bars svelte-ub543t" id="mctl-btn" data-icon-text="bars"></i></p></button></div> <div class="fixed right-[0px] top-[0px] svelte-ub543t" id="mctl-login" data-svelte-h="svelte-14whyoo"></div></div></div> <div class="flex h-auto flex-1 flex-col  svelte-ub543t" id="mc-bottom">${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div></div></div> ${validate_component(Popup, "Popup").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
