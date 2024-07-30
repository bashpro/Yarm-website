import { c as create_ssr_component, b as each, v as validate_component, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { F as Form, A as Aboutus } from "../../../chunks/form.js";
import "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let array = [
    {
      icon: "fa-envelope",
      title: "Email",
      text: "info@yarmmartialarts.co.uk"
    },
    {
      icon: "fa-phone",
      title: "Phone",
      text: "01642 354 937"
    },
    {
      icon: "fa-brands fa-square-facebook",
      title: "Facebook",
      text: "@yarmmartialarts"
    }
  ];
  return `<div class="flex w-full flex-col"><div class="flex flex-col bg-zinc-100 max-[1072px]:h-auto h-auto p-[60px] max-[600px]:p-6 max-[600px]:pt-[50px] transition-all duration-200 font-thin"><div class="text-center flex justify-center items-center flex-col" data-svelte-h="svelte-1hkg8il"><h1 class="text-5xl max-[1000px]:text-3xl mb-6">Contact Us</h1> <p class="text-2xl max-[1000px]:text-lg tracking-wider">Get in touch!</p> <p class="text-2xl max-[1000px]:text-lg mb-8 tracking-wider">We&#39;d love to hear from you!</p> <img class="w-[200px] object-cover min-w-[100px] filter brightness-[0.8] grayscale-[0.3]" src="./YMAA_logo_new.png" alt="logo"></div> <div class="flex-1 flex flex-wrap items-center justify-center">${each(array, ({ icon, title, text }) => {
    return `<a target="_blank"${add_attribute(
      "href",
      title == "Email" ? `mailto:${text}` : title == "Phone" ? `tel:${text}` : `https://www.facebook.com/yarmmartialarts`,
      0
    )} class="min-w-[300px] flex justify-center items-center flex-col cursor-pointer flex-1 flex-grow h-[200px]"><i class="${"fa-solid " + escape(icon, true) + " text-6xl mb-[10px] hover:text-[#b73030] text-zinc-400 duration-200 transition-all"}"></i> <h2 class="text-xl">${escape(text)}</h2> </a>`;
  })}</div></div> ${validate_component(Form, "Form").$$render($$result, {}, {}, {})} ${validate_component(Aboutus, "Aboutus").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
