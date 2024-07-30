import {navOpenVal, mobileModeVal} from './index-components/store.js'


/**
 * @type {boolean}
 */
let navOpen,
    mobileMode

navOpenVal.subscribe((i)=>{navOpen = i})
mobileModeVal.subscribe((i)=>{mobileMode = i})

/**
 * Changes the URL and adds a new state to the browser's history.
 * @param {string} title - The title for the new state.
 * @param {string} [alt] - Alternative link
 */
export function changeURL(title, alt) {
    
    if(alt){
        window.open(
            `${alt}`,
            '_blank' // <- This is what makes it open in a new window.
        )
    }
    else{
        // Modify the title to create the new URL
        let newUrl = title.replaceAll(' ', '-');

        if(window.location.href.split('/')[3] !== `${newUrl}` ){   
            // Update the URL using window.location.href
            window.location.href = `${newUrl}`
        }
        else{
            navOpenVal.update(()=>{
                return false
            })
        }
    }
    
}