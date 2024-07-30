<script>
  import Footer from "$lib/index-components/footer.svelte"
  import "../app.css"
  import Navigation from "../lib/index-components/navigation.svelte"
  import {navOpenVal, mobileModeVal, appFuncs} from '../lib/index-components/store'
  import { onMount } from 'svelte'
  import Popup from "$lib/index-components/popup.svelte"
 
    
  let app = appFuncs().getAppData()

  if(app.length < 1){
    let obj = {
      selectedNinjaCard: 'Ninja Tots'
    }

    appFuncs().setAppData(obj)

    app = appFuncs().getAppData()

    console.log(app)
  }

  
  /**
   * Indicates whether the navigation menu is open or not.
   * @type {boolean}
   */
  let navOpen

  navOpenVal.subscribe((i)=> navOpen = i)

  /**
   * Reference to the main window element that is bound to an HTML element.
   * @type {HTMLElement}
   */
  let mainWindow;

  /**
   * @type {boolean} - Check the width of the page
   */
  let mobileMode

  mobileModeVal.subscribe((i)=> mobileMode = i )
 

  /**
   * @type {number} - The width of the screen
   */
  let screenWidth

  $:{
    screenWidth < 501 ? mobileModeVal.set(true) : mobileModeVal.set(false)
  }


  /**
  * Function to handle click events on the main window.
  * This function toggles the `navOpen` state when a click event occurs on elements other than the navigation control button.
  * @function
  */
  onMount(() => {
    // @ts-ignore
    mainWindow.onclick = (e) =>{
      // @ts-ignore
      e = e.target

      /**
        * Toggle the `navOpen` state based on certain conditions.
        * @function
        */
      const statement = ()=>{
        navOpen == true ? navOpenVal.set(false) : false
      }

      // @ts-ignore
      if(e.closest('button') !== null){
        // @ts-ignore
        if(e.closest('button').getAttribute('id') !== "mctl-btn"){
          statement()
        }
      }else{
        statement()
      }
    }
  })

</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class=" flex flex-row select-none w-screen h-[100dvh] z-50" >
  <div class="flex flex-row w-screen h-[100dvh] select-none" id="content-holder">
    
    <Navigation />

    <div bind:this={mainWindow} class="z-[10] flex flex-col w-full h-auto bg-zinc-50 overflow-hidden overflow-y-auto" id="main-content">
      <div class=" z-[20] h-[50px] min-w-[calc(100%)] flex flex-col fixed transition-all duration-200 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-zinc-[rgba(0,0,0,0)]" id="mc-top">
        <div class="flex" id="mct-left">
          <div class="w-50px" id="mctl-navbar">
                <button on:click={()=> navOpenVal.set(!navOpen)} class="flex w-[50px] h-[50px] items-center justify-center transition-all duration-200 hover:ml-1 text-zinc-400 hover:text-zinc-100 relative" id="mctl-btn" data-icon-text="bars">
                  <p class=" flex px-2 text-lg ml-2 mr-4" id="mctl-btn"><i class="fa-solid fa-bars" id="mctl-btn" data-icon-text="bars"></i></p>
                </button>
          </div>
          <div class="fixed right-[0px] top-[0px]" id="mctl-login">
                
          </div>
        </div>
      </div>
      <div class="flex h-auto flex-1 flex-col " id="mc-bottom">
        
        <slot />

        <Footer />
      </div>
    </div>
    
  
  </div>
</div>
<Popup />



<style>
	::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  
</style>