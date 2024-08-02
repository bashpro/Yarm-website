import { c as create_ssr_component, e as escape, b as each, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { F as Form, A as Aboutus } from "../../chunks/form.js";
import "../../chunks/url.js";
import { m as mobileModeVal, n as navOpenVal } from "../../chunks/store.js";
import { n as ninjaCards } from "../../chunks/ninjainfo.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative w-full h-screen" id="hero"><video class="absolute inset-0 w-full h-full object-cover filter brightness-[0.6]" src="${"./mma3." + escape("webm", true)}" autoplay loop muted playsinline></video> <div class="z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col" id="hero-text" data-svelte-h="svelte-m7ofzz"><div class="flex justify-center min-w-[240px] w-[28%]" id="hero-logo"><img class="object-cover min-w-[100px] filter brightness-[0.9] grayscale-[0.3]" src="./YMAA_logo_new.png" alt="logo"></div> <p class="text-white sm:text-6xl font-thin mb-[10px] text-center text-4xl">Welcome to Yarm Martial Arts</p> <p class="text-white sm:text-3xl font-thin text-center text-xl">Opening the Doors to Your Future</p> <p class="text-white sm:text-xl font-thin text-center text-lg">Established Since 2001</p> <div class="flex w-[100px] h-[50px]" id="arrow-down"></div></div> </div>`;
});
const Ninjacards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mobileMode;
  mobileModeVal.subscribe((i) => mobileMode = i);
  let span = ["min-w-[320px]", "min-w-[500px]"];
  return `<div class="section h-auto" id="ninja-age-cards"><div class="${"flex flex-wrap max-w-[100%] " + escape(span[0], true) + " justify-center w-full ml-auto mr-auto"}" id="ages-cards">${each(ninjaCards, ({ ages, title, subTitle, imgSrc }) => {
    return `<button class="${"card cursor-pointer group overflow-hidden " + escape(!mobileMode ? span[1] : span[0], true) + " sm:h-[320px] h-[280px] flex grow flex-col flex-1 justify-end relative"}"><img alt="" class="group-hover:scale-[1.1] scale-100 transition-all duration-200 w-full h-full object-cover filter brightness-[0.8] grayscale-[0.5] "${add_attribute("src", imgSrc, 0)}> <div class="card-text text-left hover:text-white text-zinc-300 font-thin px-[15px] pb-[15px] flex justify-end flex-col absolute h-full w-full transition-all duration-200 hover:from-[rgba(0,0,0,0.1)] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-zinc-[rgba(0,0,0,0)]"><p class="sm:text-3xl text-2xl">${escape(title)}</p> <p class="sm:text-2xl text-lg">${escape(ages)}</p> <p class="sm:text-lg text-[15px] ">${escape(subTitle)}</p> <p class="sm:text-lg text-[15px] " data-svelte-h="svelte-elhkz1">Click to find out more</p></div> </button>`;
  })}</div> ${each(span, (classes) => {
    return `<span class="${"hidden " + escape(classes, true)}"></span>`;
  })}</div>`;
});
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mobileMode;
  let navOpen;
  let mobileWidth;
  let mobileWidthNum;
  mobileModeVal.subscribe((i) => mobileMode = i);
  navOpenVal.subscribe((i) => navOpen = i);
  let testimonials = [
    {
      author: "Sue Kelly, Mother of Joe and Ben",
      description: "This is our 11th year at the academy which speaks for itself. Both my sons are Blackbelts and still love to train and coach every week. Tony is an inspiration. We are so proud to be part of the academy. Highly recommended!",
      active: true,
      position: "1%"
    },
    {
      author: "Veronica",
      description: "The staff are great with the children, teaching them how to focus. My grandson loves it, he wants to be like Jack (Instructor).",
      active: false,
      position: "100%"
    },
    {
      author: "Mrs P Kamali",
      description: "Our two sons have been through Evolve and our eldest has now started Karate Kids. Of all the extracurricular activities they attend, Karate has massively helped to build their self-confidence, listening, focus, and determination. These are skills which we can already see them applying in other areas of their life and its a joy to see! All the staff at the academy are so amazing at what they do, how they work with the children and instil these important values, all whilst having fun too! We can see ourselves being part of the academy for many years to come.",
      active: false,
      position: "200%"
    }
  ];
  let currentTestimonialPosition = `-${testimonials[0].position}`;
  let currentIndex = 0;
  function buttonClicked(i, index) {
    currentTestimonialPosition = `-${i}`;
    testimonials.map((u) => {
      u.active = false;
    });
    testimonials[index].active = true;
    currentIndex = index;
  }
  function moveTestimonial() {
    setTimeout(
      () => {
        currentIndex++;
        currentIndex == testimonials.length ? currentIndex = 0 : false;
        buttonClicked(testimonials[currentIndex].position, currentIndex);
        moveTestimonial();
      },
      1e4
    );
  }
  moveTestimonial();
  {
    {
      mobileWidthNum = navOpen ? 204 : 54;
      mobileWidth = mobileMode ? "w-[100vw] " : `w-[calc(100vw-${mobileWidthNum}px)]`;
    }
  }
  return `<div class="${"flex w-[calc(300vw)] min-h-[40vh] max-h-[70vh] flex-row overflow-hidden bg-white relative left-[" + escape(currentTestimonialPosition, true) + "] transition-all duration-800"}">${each(testimonials, (i, index) => {
    return `<div class="${"flex justify-center items-center relative " + escape(mobileWidth, true)}"><div class="flex justify-center items-center flex-col m-[30px]"><div class="flex text-center text-xl font-thin"><p data-svelte-h="svelte-1ocmqp2"><i class="fa fa-quote-left" aria-hidden="true"></i></p> <p class="${"mx-2 " + escape(index == 2 ? "max-[500px]:text-sm" : "", true)}">${escape(i.description)}</p> <p data-svelte-h="svelte-1y4luul"><i class="fa fa-quote-right" aria-hidden="true"></i></p></div> <p class="mt-2">${escape(i.author)}</p></div> </div>`;
  })}</div> <div class="h-[50px] bg-white w-full flex justify-center items-center" id="test-pagination">${each(testimonials, (i, index) => {
    return `<button class="p-2 "><i class="${"fa-" + escape(i.active ? "solid" : "regular", true) + " fa-circle text-sm"}"></i> </button>`;
  })} <span class="hidden w-[calc(100vw-54px)] "></span> <span class="hidden w-[calc(100vw-204px)]"></span> <span class="hidden left-[-1%]"></span> <span class="hidden left-[-100%]"></span> <span class="hidden left-[-200%]"></span></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex h-auto w-full flex-col " id="mc-bottom">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})} ${validate_component(Ninjacards, "Ninjacards").$$render($$result, {}, {}, {})} ${validate_component(Form, "Form").$$render($$result, {}, {}, {})} ${validate_component(Aboutus, "Aboutus").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
