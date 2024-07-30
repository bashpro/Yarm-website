<script>
 import {navOpenVal, mobileModeVal} from './store'
 import {changeURL} from '../url'

/**
 * Indicates whether the navigation menu is open or not.
 * @type {boolean}
 */
let navOpen

/**
 * Checks the width of the page if its mobile view or not
 * @type {boolean}
 */
let mobileMode

navOpenVal.subscribe((i)=> navOpen = i)
mobileModeVal.subscribe((i)=>mobileMode = i )

/**
 * CSS classes to be applied to the navigation menu element.
 * @type {string}
 */
let navClass

/**
 * Mobile CSS classes to be applied to navigation
 * @type {string}
 */
let mobileClass

// Calculate navClass based on navOpen using a reactive statement.
$: navClass = navOpen ? "min-w-[200px]" : "min-w-[50px]";

$:{
    mobileMode && navOpen ? mobileClass = "max-[500px]:left-[0px] left-[0px] max-[500px]:w-[100vw] max-[500px]:min-w-[100vw]" : mobileClass = "max-[500px]:left-[-60px] left-[0px] max-[500px]:w-[0px] max-[500px]:min-w-[0px]"   
}

/**
 * An array containing a list of navigation menu items.
 * @type {NavMenuItem[]}
 */
 let navMenuList = [];

/**
 * A structure representing a navigation menu item.
 * @typedef {Object} NavMenuItem
 * @property {string} name - The name of the navigation item.
 * @property {string} icon - The icon to use for the navigation item.
 * @property {string} parent - The parent element of the navigation item.
 * @property {boolean} [hideText] - Should the text be hidden.
 * @property {boolean} [hover] - Show the hover text
 * @property {function} [func] - The function to execute
 */

/**
 * Creates a new navigation menu item and adds it to navMenuList.
 * @param {NavMenuItem|NavMenuItem[]} item - The navigation menu item(s) to be created.
 */
 function newNavMenu(item) {
    /**
     * Object that holds information about the navigation menu item.
     * @type {NavMenuItem}
     */
    let newItem;

    /**
     * Creates a new navigation menu item.
     * @param {NavMenuItem} newItemData - The data for the new navigation menu item.
     */
    function createItem(newItemData) {
        /**
         * The created navigation menu item.
         * @type {NavMenuItem}
         */
        newItem = {
            name: newItemData.name,
            icon: newItemData.icon,
            parent: newItemData.parent,
            hideText: false,
            hover: false,
        }

    
        newItemData.func ? (newItem.func = newItemData.func) : (newItem.func = () => false);
        


        // Check if hideText should be true based on newItemData.hideText
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



/**
 * An array representing different sections of the navigation menu.
 * @typedef {Object} NavMenuSection
 * @property {string} name - The name of the section.
 * @property {string} [classes] - Optional CSS classes to be applied to the section.
 */

/**
 * Array of NavMenuSection objects representing different sections of the navigation menu.
 * @type {NavMenuSection[]}
 */
 let navMenuSections = [
    {
        name: "n-top",
        classes: ""
    },
    {
        name: "n-middle",
        classes: "flex-1"
    },
    {
        name: "n-bottom",
        classes: ""
    }
];



newNavMenu([
    {
        name: "Home",
        icon: "fa-house",
        parent: "n-top",
        hideText: true,
        func:()=>{
            changeURL('Yarm-website')
        }
    },
    {
        name: "",
        icon: "fa-bars",
        parent: "n-top",
        hideText: true,
        func: () => {
            navOpenVal.set(false); // Set navOpen to false
        }
    },
    {
        name: "Our Approach",
        icon: "fa-user-ninja",
        parent: "n-middle",
        func:()=>{
            changeURL('our approach')
        }
    },
    {
        name: "Our Classes",
        icon: "fa-user-graduate",
        parent: "n-middle",
        func:()=>{
            changeURL('our classes')
        }
    },
    {
        name: "Meet The Team",
        icon: "fa-user-group fa-xs",
        parent: "n-middle",
        func:()=>{
            changeURL('meet the team')
        }
    },
    {
        name: "Time Table",
        icon: "fa-calendar-days",
        parent: "n-middle",
        func:()=>{
            changeURL('time table')
        }
    },
    {
        name: "Contact Us",
        icon: "fa-envelope",
        parent: "n-middle",
        func:()=>{
            changeURL('contact us')
        }
    },
    {
        name: "Facebook",
        icon: "fa-square-facebook fa-brands",
        parent: "n-bottom",
        func:()=>{
            changeURL('','https://www.facebook.com/yarmmartialarts/')
        }
    }
]);



/**
 * Checks and handles the hover state for a navigation menu item.
 * @param {NavMenuItem} menuItem - The navigation menu item to check for hover state.
 * @param {string} state - The state indicating whether to set hover to true ("t") or false (other values).
 */
 function checkMenuItemHover(menuItem, state) {
    /**
     * If the navigation menu is not open (!navOpen), set the hover state of the menuItem
     * based on the provided state parameter.
     * @param {boolean} menuItem.hover - True if the menuItem should be in a hover state, false otherwise.
     */
    if (!navOpen && menuItem.name !== "Home") {
        menuItem.hover = state === "t";
    }

    navMenuList = navMenuList
}



</script>


<div class="{navClass} z-30 w-[50px] h-full bg-zinc-900 flex flex-col overflow-hidden transition-all relative {mobileClass}" id="nav">
    {#each navMenuSections as section }
        <div class="z-30 flex { section.name == "n-top" && mobileMode ? "flex-row" : "flex-col"  } justify-center {section.classes}" id="{section.name}">
            {#each navMenuList as menuItem }
                {#if menuItem.parent === section.name}
                    <button
                        on:mouseenter={()=>{
                            checkMenuItemHover(menuItem, "t")
                        }}
                        on:mouseleave={()=>{
                            checkMenuItemHover(menuItem, "")
                        }}

                        on:click={()=> {
                            //@ts-ignore
                            menuItem.func()
                        }}
                        
                        type="button"
                        class="flex {menuItem.name == "Home" && mobileMode ? "w-full" : "w-[200px]"} h-[50px] items-center transition-all duration-200 hover:ml-1 group text-[#b73030] hover:text-zinc-200 relative {menuItem.icon == "fa-bars" ? "w-[fit-content]": ""} {menuItem.icon == "fa-bars" && !mobileMode ? "hidden" : ""}" data-icon-text={menuItem.name}>
                        <p class="flex px-2 text-lg ml-2 mr-4"><i class="fa-solid {menuItem.icon}" data-icon-text={menuItem.name}></i></p>
                        <p class="flex flex-1 items-center font-[500]">{menuItem.name}</p>
                        <p class:hidden={menuItem.hover == false} class="z-30 fixed left-[60px] px-3 py-1 rounded bg-zinc-900 transition-all duration-200 text-[#b73030] group-hover:text-zinc-200">{menuItem.name}</p>
                    </button>
                {/if}
            {/each}
        </div>
    {/each}
</div>
