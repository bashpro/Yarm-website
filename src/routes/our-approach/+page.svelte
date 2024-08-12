<script>
    let array = ["Yarm Martial Arts treats every student young and old as an individual. We understand that the Martial arts is there to enhance Mind, Body & Spirit and every person's goals, and hence journey, will be different. From the ages 5 to adult our instructors take every student's specific needs into account and help them to strive for their goals.","Everyone's journey starts for different reasons whether that is to obtain fitness, confidence, discipline or to meet like minded people. Yarm Martial Arts is here in a friendly family orientated environment, to work with you all the way.","Please have a look at our classes on offer and see what maybe of interest to you or your family. We have something to suite all ages and abilities, so feel free to contact us for more information and see what we have to offer. There are complimentary taster sessions for every class.","Wishing you and yours the greatest success."]
    
</script>

<div class="flex h-auto max-[600px]:h-screen overflow-hidden relative bg-no-repeat bg-cover bg-center transition-all duration-800 scale-100 filter grayscale-[0.5] bg-[url('/imgs/junior-class.JPG')] bg-img">

    <div class="flex-1 p-[60px] max-[600px]:p-6 max-[600px]:pt-[50px] text-white font-thin bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.55)] flex flex-col">
        <h1 class=" text-5xl max-[1000px]:text-3xl mb-6">Our Approach</h1>

        <div class="flex flex-col h-full justify-end items-center text-center max-[760px]:w-full overflow-hidden text-2xl ">
            {#each array as i }
                <p class="text-lg max-[1000px]:text-sm mb-4 tracking-wider">{i}</p>
            {/each}
        </div>
        
    </div>

    <img class="hidden" alt="yarm-mma-class" src="./imgs/junior-class.JPG">

</div>

<style>
    .bg-img{
        background-image: url('/imgs/junior-class.JPG');
    }
</style>