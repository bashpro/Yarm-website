import { localStorageStore } from "@skeletonlabs/skeleton";
import { writable } from 'svelte/store';


export const appStore = localStorageStore('app', [])

/**
 * @type {never[]}
 */
let appStoreLocal

appStore.subscribe((i)=>{ appStoreLocal = i})

export const navOpenVal = writable(false) 

export const mobileModeVal = writable(false)

/**
 * Functions for managing the application data.
 * @returns {{ setAppData: (data: any) => void, getAppData: () => any }}
 */
export function appFuncs() {
    let _ = {
        /**
         * Sets the application data in the local storage.
         * @param {any} data - The data to set.
         */
        setAppData: (data) => {
            appStore.set(data);
        },
        /**
         * Retrieves the application data from the local storage.
         * @returns {any} The application data.
         */
        getAppData: () => {
            return appStoreLocal;
        }
    };
    return _;
}
