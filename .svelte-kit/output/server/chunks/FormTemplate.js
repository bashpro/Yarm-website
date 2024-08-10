import { c as create_ssr_component, e as escape } from "./ssr.js";
const FormTemplate_svelte_svelte_type_style_lang = "";
const css = {
  code: ".acuity-embed-button.svelte-1dwkkw8{margin-bottom:30px;background-color:#9a1d29;color:white;font-weight:100;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;border-radius:0.25rem;transition:all 0.2s}.acuity-embed-button.svelte-1dwkkw8:hover{background-color:#b73030}",
  map: null
};
const FormTemplate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "", subTitle = "", titleTextStyle = "", subtitleTextStyle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  if ($$props.titleTextStyle === void 0 && $$bindings.titleTextStyle && titleTextStyle !== void 0)
    $$bindings.titleTextStyle(titleTextStyle);
  if ($$props.subtitleTextStyle === void 0 && $$bindings.subtitleTextStyle && subtitleTextStyle !== void 0)
    $$bindings.subtitleTextStyle(subtitleTextStyle);
  $$result.css.add(css);
  return `<p class="${escape(titleTextStyle, true) + " font-thin mt-[40px] mb-[30px] text-center w-full svelte-1dwkkw8"}">${escape(title)}</p> <p class="${escape(subtitleTextStyle, true) + " font-thin text-center mb-[20px] svelte-1dwkkw8"}"><!-- HTML_TAG_START -->${subTitle}<!-- HTML_TAG_END --></p>  <div class="flex flex-wrap max-w-[740px] justify-center w-full ml-auto mr-auto mb-[30px]" id="agreementForm" data-svelte-h="svelte-1h8u7uj"> <a id="formBtn" href="https://app.acuityscheduling.com/schedule.php?owner=29629232" target="_blank" class="text-lg acuity-embed-button bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded transition-all duration-200 svelte-1dwkkw8">Schedule Appointment</a> <link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/29629232.css" id="acuity-button-styles"> <script src="https://embed.acuityscheduling.com/embed/button/29629232.js" async><\/script> </div>`;
});
export {
  FormTemplate as F
};
