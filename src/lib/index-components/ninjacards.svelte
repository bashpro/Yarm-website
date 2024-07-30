<script>
	import { changeURL } from '$lib/url';
  import { mobileModeVal, appFuncs } from './store'
  import { ninjaCards } from '$lib/ninjainfo';
  
  /**
   * @typedef {Object} AppData
   * @property {string} selectedNinjaCard - the title
  */

  /**
   * @type {AppData} - the current selected class to display
  */
  let app = appFuncs().getAppData()

  /**
   * @type {boolean} - Check the width of the page
   */
  let mobileMode

  mobileModeVal.subscribe((i)=> mobileMode = i )

  /**
   * Handle the click event when a ninja card is clicked.
   *
   * @param {string} title - The title of the ninja card that was clicked.
   * @returns {void}
   */
  function cardClicked(title) {
    let data = app;

    data.selectedNinjaCard = title;

    appFuncs().setAppData(data);
    changeURL('our classes');
  }

  let span = ["min-w-[320px]", "min-w-[500px]"]
</script>

<div class="section h-auto" id="ninja-age-cards">
    <div class="flex flex-wrap max-w-[100%] {span[0]} justify-center w-full ml-auto mr-auto" id="ages-cards">
      
      {#each ninjaCards as {ages, title, subTitle, imgSrc}}
        <button on:click={()=>{ cardClicked(title) }} class="card cursor-pointer group overflow-hidden {!mobileMode ? span[1]: span[0]} sm:h-[320px] h-[280px] flex grow flex-col flex-1 justify-end relative ">
          <img alt="" class="group-hover:scale-[1.1] scale-100 transition-all duration-200 w-full h-full object-cover filter brightness-[0.8] grayscale-[0.5] " src="{imgSrc}">
          <div class="card-text text-left hover:text-white text-zinc-300 font-thin px-[15px] pb-[15px] flex justify-end flex-col absolute h-full w-full transition-all duration-200 hover:from-[rgba(0,0,0,0.1)] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-zinc-[rgba(0,0,0,0)]">
            <p class=" sm:text-3xl text-2xl">{title}</p>
            <p class=" sm:text-2xl text-lg">{ages}</p>
            <p class=" sm:text-lg  text-[15px] ">{subTitle}</p>
            <p class=" sm:text-lg  text-[15px] ">Click to find out more</p>
          </div>
        </button>
      {/each}
      
    </div>

    {#each span as classes }
      <span class="hidden {classes}"></span>
    {/each}
</div>