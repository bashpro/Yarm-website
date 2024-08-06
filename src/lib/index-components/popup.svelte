<script>
// @ts-nocheck

	import FormTemplate from "./FormTemplate.svelte";
    import {onMount} from "svelte"

    let popupActive = false,
    dontShowAgainButton = false,
    dontShowAgain = false;

    onMount(() => {
        localStorage.getItem('popup') == null ? setupPopup('t') : setupPopup('f');
    });

    // @ts-ignore
    function setLocal(obj) {
        localStorage.setItem('popup', JSON.stringify(obj));
    }

    // @ts-ignore
    function setupPopup(type) {
        let date = new Date();

        if (type == "t") {
            let obj = {
                // @ts-ignore
                timestamp: date.getTime(),
                hasChecked: false
            };

            setLocal(obj);
        } else if (type == "f") {
            // @ts-ignore
            let checked = JSON.parse(localStorage.getItem('popup'));

            if (checked.hasChecked) {
                let currentTime = date.getTime();
                let timeDiff = currentTime - checked.timestamp;

                if (timeDiff >= secToMil(900)) { // 900 seconds = 15 minutes
                    dontShowAgain = false;
                    checked.hasChecked = false;
                    setLocal(checked);
                } else {
                    dontShowAgain = true;
                }
            } else {
                dontShowAgain = false;
            }
        }
    }

    // @ts-ignore
    function secToMil(time) {
        return time * 1000;
    }

    function popupBtn() {
        popupActive = false;
    }

    function closePopup() {
        popupActive = false;
        if (dontShowAgainButton) {
            // @ts-ignore
            let checked = JSON.parse(localStorage.getItem('popup'));
            checked.hasChecked = true;
            checked.timestamp = new Date().getTime();
            setLocal(checked);
        }
    }

    setTimeout(() => {
        if (!dontShowAgain) {
            popupActive = true;
        }
    }, secToMil(30));

</script>

{#if popupActive}
    <div id="popup" class=" top-0 left-0 w-full h-[100svh] fixed z-50 bg-opacity-40 bg-zinc-900 flex flex-col justify-center items-center opacity-0 {popupActive ? "transition-all duration-200 opacity-100": ""} ">
        <div class=" w-[80vw] h-auto bg-zinc-200 ">
            <div class="flex h-[50px] items-center justify-end">
                <button on:click={()=>{ closePopup() }} class="w-[50px] flex justify-center items-center">
                    <p class=" text-2xl">x</p>
                </button>
            </div>
            <FormTemplate 
                title="Ready to book your first session on us?" 
                titleTextStyle="sm:text-[2.5rem] text-2xl"
                subTitle="Just click this button below" 
                subtitleTextStyle="sm:text-3xl text-lg"
            />
            <div class="flex justify-center items-center">
                <input class="mr-4" bind:checked={dontShowAgainButton} type="checkbox">
                <p>Don't show popup again</p>
            </div>
        </div>
    </div>
{/if}
<style>
    
</style>
