import { c as create_ssr_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { n as ninjaCards } from "../../../chunks/ninjainfo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 769px){.svelte-cqm7nq::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);background-color:#F5F5F5;border-radius:10px}.svelte-cqm7nq::-webkit-scrollbar-thumb{background-color:#888;border-radius:10px}.svelte-cqm7nq::-webkit-scrollbar-thumb:hover{background-color:#555}.svelte-cqm7nq::-webkit-scrollbar{height:10px}}.timetable.svelte-cqm7nq{background-color:rgba(255, 255, 255, 0.3);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:10px;padding:1rem;margin-top:1rem}",
  map: null
};
function createScheduleFromClassData(classData) {
  let schedule = [];
  let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  daysOfWeek.forEach((day) => {
    let daySchedule = { day, times: [] };
    classData.forEach((c) => {
      if (c.times[day.toLowerCase()]) {
        daySchedule.times.push({
          className: c.name,
          time: c.times[day.toLowerCase()]
        });
      }
    });
    schedule.push(daySchedule);
  });
  return schedule;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes = [
    {
      name: "",
      times: {}
      //leave empty
    },
    {
      name: "Ninja Tots",
      times: ninjaCards[0].times
    },
    {
      name: "Karate Kids",
      times: ninjaCards[1].times
    },
    {
      name: "Junior Kickboxing",
      times: ninjaCards[2].times
    },
    {
      name: "Adult Kickboxing",
      times: ninjaCards[3].times
    },
    {
      name: "Ladies Only",
      times: ninjaCards[4].times
    },
    {
      name: "Over 50's",
      times: ninjaCards[5].times
    }
  ];
  let timetable = createScheduleFromClassData(classes);
  $$result.css.add(css);
  return `<div class="w-full h-[100dvh] flex justify-center items-center flex-col bg-[url('/imgs/kickboxing.JPG')] bg-no-repeat bg-cover bg-center scale-100 filter grayscale-[0.5] opacity-100 bg-opacity-100 svelte-cqm7nq"><div class="w-full h-[100dvh] flex justify-center items-center flex-col bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.55)] svelte-cqm7nq"><div class="w-full h-[150px] flex svelte-cqm7nq" data-svelte-h="svelte-atly25"><h1 class="m-[60px] text-5xl max-[1000px]:text-3xl mb-6 font-thin text-white svelte-cqm7nq">Timetable</h1></div> <div class="flex flex-1 justify-center items-center text-white svelte-cqm7nq"><div class="flex h-[70dvh] w-[85dvw] timetable svelte-cqm7nq"> <div class="min-w-[70px] flex flex-col justify-center items-center svelte-cqm7nq">${each(classes, (i) => {
    return `<div class="text-lg flex-1 flex justify-center items-center w-full svelte-cqm7nq">${escape(i.name)} </div>`;
  })}</div>  <div class="flex flex-1 min-w-[100px] overflow-x-scroll svelte-cqm7nq">${each(timetable, (day) => {
    return `<div class="flex flex-col text-lg flex-grow min-w-[150px] mx-2 justify-center items-center w-full svelte-cqm7nq"><div class="flex flex-col text-lg flex-1 justify-center items-center w-full text-center svelte-cqm7nq">${escape(day.day)}</div> ${each(day.times, (classTime) => {
      return `<div class="flex flex-col text-lg flex-1 justify-center items-center w-full font-thin text-center svelte-cqm7nq">${Array.isArray(classTime.time) ? `${escape(classTime.time.join(" - "))}` : `${escape(classTime.time)}`} </div>`;
    })} </div>`;
  })}</div></div></div></div> </div>`;
});
export {
  Page as default
};
