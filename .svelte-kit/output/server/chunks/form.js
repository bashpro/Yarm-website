import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { F as FormTemplate } from "./FormTemplate.js";
const Aboutus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex flex-wrap bg-zinc-200" data-svelte-h="svelte-j5a9ec"><div class="flex flex-1 min-h-[50dvh] min-w-[320px] max-[970px]:h-[auto] max-[692px]:h-[30dvh]"><img alt="" class="group-hover:scale-[1.1] scale-100 transition-all duration-200 w-full h-full object-cover filter brightness-[0.8] grayscale-[0.5] " src="imgs/about-us.JPG"></div> <div class="justify-center flex flex-1 min-h-[50dvh] min-w-[320px] max-[970px]:h-[auto] max-[692px]:text-[16px] flex-col p-3 font-thin overflow-hidden text-lg text-center"><p class="pb-6 text-3xl ">About Us</p> <p class="pb-3">Our Classes start as young as the age of 5 with our Children&#39;s Program  Ninja Tots and then onto Karate Kids. For teens and adults, there is a wide range of classes encompassing, Kickboxing, Urban Self Defence and Fitness.</p> <p class="pb-3">We recommend at least attending 2 classes a week, to see constant progression in training.</p> <p class="">Remember you can try any of our classes for <b>free</b>, just get in touch and book a class that is convenient for you or your  child.</p></div></div>`;
});
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="section h-auto" id="the-form"><div class="ml-[15px] mr-[15px]" id="form">${validate_component(FormTemplate, "FormTemplate").$$render(
    $$result,
    {
      title: "Unclock your full potential!",
      titleTextStyle: "sm:text-5xl text-2xl",
      subTitle: "Book your first <b>free</b> introductory Session Today",
      subtitleTextStyle: "sm:text-3xl text-lg"
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Aboutus as A,
  Form as F
};
