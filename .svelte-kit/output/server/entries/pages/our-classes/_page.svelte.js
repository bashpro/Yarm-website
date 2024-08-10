import { c as create_ssr_component, e as escape, a as add_attribute, b as each } from "../../../chunks/ssr.js";
import { a as appFuncs } from "../../../chunks/store.js";
import { n as ninjaCards } from "../../../chunks/ninjainfo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main-content{background:black}#footer{--tw-bg-opacity:1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.bg-imgs-ninja-tots.svelte-owpevq{background-image:url('/imgs/ninja-tots.JPG')}.bg-imgs-karate-kids.svelte-owpevq{background-image:url('/imgs/karate-kids.JPG')}.bg-imgs-kickboxing.svelte-owpevq{background-image:url('/imgs/kickboxing.JPG')}.bg-imgs-adults.svelte-owpevq{background-image:url('/imgs/adults.JPG')}.bg-imgs-ladies-only.svelte-owpevq{background-image:url('/imgs/ladies-only.JPG')}.bg-imgs-over-50s.svelte-owpevq{background-image:url('/imgs/over-50s.JPG')}.scrolling.svelte-owpevq::-webkit-scrollbar{width:20px}.scrolling.svelte-owpevq::-webkit-scrollbar-track{background-color:transparent}.scrolling.svelte-owpevq::-webkit-scrollbar-thumb{background-color:#d6dee1;border-radius:20px;border:6px solid transparent;background-clip:content-box}.scrolling.svelte-owpevq::-webkit-scrollbar-thumb:hover{background-color:#a8bbbf}",
  map: null
};
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let app = {
    selectedNinjaCard: ""
    // Initialize with an appropriate default value
  };
  let btn;
  const appData = appFuncs().getAppData();
  if (appData) {
    app.selectedNinjaCard = appData.selectedNinjaCard;
  }
  let readyState = false;
  let selectedNinjaCard = app.selectedNinjaCard;
  let classes = [
    {
      title: "Ninja Tots",
      subTitle: "The Journey Into Martial Arts Begins",
      desc: "Ninja Tots is a thrilling and engaging martial arts program designed specifically for young warriors aged 5 to 7. In this exciting journey into martial arts, children explore the art of Choi Kwang Do, where they learn fundamental techniques, discipline, and respect. Our expert instructors provide a safe and encouraging environment, fostering teamwork and confidence in each child. Ninja Tots empowers young ones to build physical strength, mental focus, and essential life skills. Join us and watch your child's confidence soar as they embark on this incredible adventure in martial arts!",
      active: false,
      src: "./imgs/ninja-tots.JPG"
    },
    {
      title: "Karate Kids",
      subTitle: "The Journey To Blackbelt",
      desc: "Our Karate Kids Programmes start from age 7 onwards and is based on the art of Choi Kwang Do. There are classes on every night of the week and Saturdays. Our students can attend any night that is convenient for them allowing for personal schedule flexibility.  The Martial Arts is a great way to teach children commitment, discipline, integrity, team work and respect. Every Blackbelt started with their first lesson and just never quit! Please come in and see us and book your free trial sessions to see what your child thinks. You could be starting them on their Journey to Blackbelt!",
      active: false,
      src: "./imgs/karate-kids.JPG"
    },
    {
      title: "Junior Kickboxing",
      subTitle: "The Journey To Blackbelt",
      desc: "Looking to develop confidence, discipline and fitness into your child or teenager ? Our kickboxing program could be what your looking for. Our Kickboxing programmes start at age 11 with Junior and Teenage classes available multiple times per week. (Timetable) All our classes are held under the instructions and supervision of Master Rice and Master Jack Wells with a compliment of high grade assistant instructors. Students are not required to spar at lower levels, so not to worry about contact or getting hurt. When sparring does occur it is under strict supervision, with proper safety gear, and then only light contact.",
      active: false,
      src: "./imgs/kickboxing.JPG"
    },
    {
      title: "Adult Kickboxing",
      subTitle: "Confidence to improve themselves mentally and physically.",
      desc: `Welcome to the world of Adult Fighter, where confidence meets strength and determination. Our Adult Fighter program is tailored for individuals seeking not just physical fitness, but also mental empowerment. Embrace the journey of self-improvement as you embark on a transformative experience, both mentally and physically. Our expert instructors guide you through a dynamic curriculum designed to enhance your martial arts skills, boost your confidence, and improve your overall well-being.`,
      active: false,
      src: "./imgs/adults.JPG"
    },
    {
      title: "Ladies Only",
      subTitle: "A perfect way to get introduced to Kickboxing",
      desc: `Welcome to a space where strength meets grace, and empowerment is the ultimate goal! Our Ladies-Only Kickboxing Class is more than just a workout – it's a journey towards self-discovery, confidence, and a healthier, stronger you. Why Choose Our Ladies-Only Class? Empowering Community: Join a supportive community of like-minded women, creating a positive and encouraging atmosphere that helps you push your limits. Confidence Boost: Kickboxing is not just about physical strength; it's about mental toughness too. Gain confidence in your abilities and discover the powerful woman within you. No Judgments, Only Cheers: Whether you're a beginner or experienced, our classes are designed for all fitness levels. There's no judgment here—only cheers for every step you take toward your goals.`,
      active: false,
      src: "./imgs/ladies-only.JPG"
    },
    {
      title: "Over 50's",
      subTitle: "Coming soon!",
      desc: "Coming soon!",
      active: false,
      src: "./imgs/over-50s.JPG"
    }
  ];
  let timeTable = [];
  function createTimeTable(type, times) {
    let days = ["mon", "tue", "wed", "thu", "fri", "sat"];
    let obj = { type, schedule: [] };
    for (let i = 0; i < days.length; i++) {
      if (Array.isArray(times[days[i]])) {
        let [startTime, endTime] = times[days[i]];
        obj.schedule.push({
          // @ts-ignore
          day: capitalizeFirstLetter(days[i]),
          // Capitalize the first letter of the day
          times: `${startTime} - ${endTime}`
        });
      } else {
        obj.schedule.push({
          // @ts-ignore
          day: capitalizeFirstLetter(days[i]),
          // Capitalize the first letter of the day
          times: "N / A"
        });
      }
    }
    timeTable.push(obj);
  }
  createTimeTable("Ninja Tots", ninjaCards[0].times);
  createTimeTable("Karate Kids", ninjaCards[1].times);
  createTimeTable("Junior Kickboxing", ninjaCards[2].times);
  createTimeTable("Adult Kickboxing", ninjaCards[3].times);
  createTimeTable("Ladies Only", ninjaCards[4].times);
  createTimeTable("Over 50's", ninjaCards[5].times);
  let currentImg = "";
  function changeSelected(title) {
    readyState = false;
    app.selectedNinjaCard = title;
    appFuncs().setAppData(app);
    classes.forEach((i) => {
      i.active = i.title === title;
    });
    classes = classes;
    const activeClass = classes.find((i) => i.active);
    let str = `${activeClass?.src.split(".")[1].split("/")[2]}`;
    currentImg = activeClass ? str : "";
    setTimeout(
      () => {
        readyState = true;
      },
      100
    );
  }
  function checkButtonPosition(index) {
    let btnLength = classes.length;
    let addLine = index < 1 || index - 1 > btnLength ? "" : "|";
    return addLine;
  }
  $$result.css.add(css);
  {
    if (selectedNinjaCard) {
      changeSelected(selectedNinjaCard);
    }
  }
  return `<div class="${"min-[945px]:h-[100dvh] bg-black flex bg-imgs-" + escape(currentImg, true) + " bg-no-repeat bg-cover bg-center transition-all duration-800 scale-100 filter grayscale-[0.5] " + escape(
    readyState ? "opacity-100 bg-opacity-100" : "opacity-0 bg-opacity-0 bg-black",
    true
  ) + " svelte-owpevq"}"${add_attribute("this", btn, 0)}><div class="bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.55)] flex h-full w-full flex-col ">${each(classes, ({ title, src, active, subTitle, desc }) => {
    return `<div class="${"h-full w-full flex flex-wrap " + escape(active ? "" : "hidden", true)}" id="${"title-" + escape(title.replaceAll(" ", "-"), true)}"><div class="the-content max-h-[80svh] transition-all duration-200 max-[600px]:m-6 max-[600px]:mt-[50px] flex-1 m-[60px] mb-[10px] min-w-[300px] font-thin text-white"><div class="flex flex-col"><h1 class="text-5xl max-[1000px]:text-3xl mb-6">${escape(title)}</h1> <p class="text-2xl max-[1000px]:text-xl mb-3">${escape(subTitle)}</p></div> <div class="overflow-auto max-h-[60svh]">${each(desc.split(". "), (sentence) => {
      return `<p class="text-lg max-[1000px]:text-sm mb-2 tracking-wider">${sentence.endsWith(".") || sentence.endsWith("!") ? `${escape(sentence)}` : `${escape(sentence + ".")}`} </p>`;
    })} </div></div> <div class="m-[60px] max-[790px]:mt-[10px] flex-1 mt-[60px] min-w-[300px] font-thin text-white max-[600px]:m-6"><p class="text-5xl max-[1000px]:text-3xl mb-6" data-svelte-h="svelte-616f8u">TimeTable</p> ${each(timeTable, ({ type, schedule }) => {
      return `${title == type ? `<div class="flex flex-col min-w-[250px] w-auto mr-1 max-w-[400px] h-[300px]">${each(schedule, (dayAndTime) => {
        return `<div class="schedule-item flex items-center flex-1"><p class="day text-xl max-[1000px]:text-lg w-[100px] bg-zinc-300 p-2 bg-opacity-60 text-zinc-900 font-normal text-center">${escape(dayAndTime.day)}</p> <p class="times text-xl max-[1000px]:text-lg bg-zinc-100 bg-opacity-10 p-2 flex-1 text-center">${escape(dayAndTime.times)}</p> </div>`;
      })} </div>` : ``}`;
    })} ${title == "Over 50's" ? `<p class="text-xl">${escape(title)} to be decided soon!</p>` : ``}</div> <img${add_attribute("alt", title, 0)}${add_attribute("src", src, 0)} class="hidden"> </div>`;
  })} <div class="justify-center flex flex-wrap">${each(classes, ({ title }, index) => {
    return `<button class="text-white p-3 text-lg flex flex-row justify-center items-center"><p>${escape(checkButtonPosition(index))}</p> <p class="px-4">${escape(title)}</p> </button>`;
  })}</div></div> <span class="hidden bg-[url('./imgs/ninja-tots.JPG')]"></span> <span class="hidden bg-[url('./imgs/karate-kids.JPG')]"></span> <span class="hidden bg-[url('./imgs/adults.JPG')]"></span> <span class="hidden bg-[url('./imgs/ladies-only.JPG')]"></span> <span class="hidden bg-[url('./imgs/over-50s.JPG')]"></span> <span class="hidden opacity-100 bg-opacity-100"></span> <span class="hidden opacity-0 bg-opacity-0"></span> </div>`;
});
export {
  Page as default
};
