<script>
    let flTextPadding = "pl-[18px]"

    let date = new Date

</script>

<div class="flex flex-row flex-wrap py-[25px]" id="footer">
    <div id="f-left" class="flex flex-1 min-w-[320px] text-zinc-500">
        <div id="fl-info" class="flex flex-col flex-[1.2] select-text pl-[15px]">
            <p class=" text-xl font-[400] text-zinc-900">Contact Info:</p>
            <p><i class="fa-solid fa-location-dot"></i> Yarm Martial Arts</p>
            <p class="{flTextPadding}">10 West Street</p>
            <p class="{flTextPadding}">Yarm</p>
            <p class="{flTextPadding}">Stockton on Tees</p>
            <p class="{flTextPadding} pb-2">TS15 9BU</p>
            <a href="tel:01642354937" class="py-1 hover:text-zinc-950 transition-all duration-200"><i class="fa-solid fa-phone"></i> 01642 354 937</a>
            <a href="mailto:info@yarmmartialarts.co.uk" class="py-1 hover:text-zinc-950 transition-all duration-200"><i class="fa-solid fa-envelope"></i> info@yarmmartialarts.co.uk</a>
            <p class="py-4"> <i class="fa-regular fa-copyright"></i> {date.getFullYear()} Yarm Martials arts </p>
        </div>
        <div id="fl-times" class="flex flex-col flex-1 text-zinc-500 ">
            <p class=" text-xl font-[400] text-zinc-900">Opening Times:</p>
            <p>Mon - Fri: 9am - 8pm</p>
            <p>Saturday: 9am - 12pm</p>
            <p class="pb-4">Sunday: Closed</p>
            <a href="https://www.facebook.com/yarmmartialarts" target="_blank" ><i class="fa-solid fa-square-facebook fa-brands text-2xl  hover:text-zinc-950 transition-all duration-200"></i></a>
        </div>
    </div>
    <div id="f-right" class="flex flex-1 min-w-[320px]">
    
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="mapouter flex-1 w-full relative p-3">
            <div class="gmap_canvas w-full">
                <iframe class=" flex-1 w-full relative" height="250" width="600" 
                referrerpolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Yarm%20Martial%20Arts&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                <br>
                
            </div>
        </div>

    </div>

</div>