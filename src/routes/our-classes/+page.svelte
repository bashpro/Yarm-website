<script>
    
	import { appFuncs } from "$lib/index-components/store"
    import {ninjaCards} from '$lib/ninjainfo.js'

    /**
     * @typedef {Object} AppData
     * @property {string} selectedNinjaCard - The selected Ninja card title.
     * @property {any} [otherProperties] - Other properties in your app object.
     */

    /**
     * @type {AppData}
     */
    let app = {
        selectedNinjaCard: '', // Initialize with an appropriate default value
    }

    /**
     * @type {Element}
     */
    let btn

    // Explicitly specify the type for getAppData() result
    const appData = appFuncs().getAppData()

    if (appData) {
        app.selectedNinjaCard = appData.selectedNinjaCard
    }
    
    let readyState = false 

     /**
     * The selected Ninja card from the app
     * @type {string}
     */
     let selectedNinjaCard = app.selectedNinjaCard;

    /**
     * The currently selected Ninja card
     * @type {string}
     */
    let currentCard = selectedNinjaCard

    /**
     * @typedef {Object} NinjaCard
     * @property {string} title - The title of the Ninja card.
     * @property {string} subTitle - The subtitle of the Ninja card.
     * @property {string} desc - The description of the Ninja card.
     * @property {boolean} active - Indicates if the card is active.
     * @property {string} src - The source URL of the Ninja card image.
     */

    /**
     * An array of Ninja card classes
     * @type {NinjaCard[]}
     */
    let classes = [
        {
            title: "Ninja Tots",
            subTitle: "The Journey Into Martial Arts Begins",
            desc: "Ninja Tots is a thrilling and engaging martial arts program designed specifically for young warriors aged 5 to 7. In this exciting journey into martial arts, children explore the art of Choi Kwang Do, where they learn fundamental techniques, discipline, and respect. Our expert instructors provide a safe and encouraging environment, fostering teamwork and confidence in each child. Ninja Tots empowers young ones to build physical strength, mental focus, and essential life skills. Join us and watch your child's confidence soar as they embark on this incredible adventure in martial arts!",
            active: false,
            src:"./imgs/ninja-tots.JPG"
        },
        {
            title: "Karate Kids",
            subTitle: "The Journey To Blackbelt",
            desc: "Our Karate Kids Programmes start from age 7 onwards and is based on the art of Choi Kwang Do. There are classes on every night of the week and Saturdays. Our students can attend any night that is convenient for them allowing for personal schedule flexibility.  The Martial Arts is a great way to teach children commitment, discipline, integrity, team work and respect. Every Blackbelt started with their first lesson and just never quit! Please come in and see us and book your free trial sessions to see what your child thinks. You could be starting them on their Journey to Blackbelt!",
            active: false,
            src:"./imgs/karate-kids.JPG"
        },
        {
            title: "Junior Kickboxing",
            subTitle: "The Journey To Blackbelt",
            desc: "Looking to develop confidence, discipline and fitness into your child or teenager ? Our kickboxing program could be what your looking for. Our Kickboxing programmes start at age 11 with Junior and Teenage classes available multiple times per week. (Timetable) All our classes are held under the instructions and supervision of Master Rice and Master Jack Wells with a compliment of high grade assistant instructors. Students are not required to spar at lower levels, so not to worry about contact or getting hurt. When sparring does occur it is under strict supervision, with proper safety gear, and then only light contact.",
            active: false,
            src:"./imgs/kickboxing.JPG"
        },
        {
            title: "Adult Kickboxing",
            subTitle: "Confidence to improve themselves mentally and physically.",
            desc: `Welcome to the world of Adult Fighter, where confidence meets strength and determination. Our Adult Fighter program is tailored for individuals seeking not just physical fitness, but also mental empowerment. Embrace the journey of self-improvement as you embark on a transformative experience, both mentally and physically. Our expert instructors guide you through a dynamic curriculum designed to enhance your martial arts skills, boost your confidence, and improve your overall well-being.`,
            active: false,
            src:"./imgs/adults.JPG"
        },
        {
            title: "Ladies Only",
            subTitle: "A perfect way to get introduced to Kickboxing",
            desc: `Welcome to a space where strength meets grace, and empowerment is the ultimate goal! Our Ladies-Only Kickboxing Class is more than just a workout – it's a journey towards self-discovery, confidence, and a healthier, stronger you. Why Choose Our Ladies-Only Class? Empowering Community: Join a supportive community of like-minded women, creating a positive and encouraging atmosphere that helps you push your limits. Confidence Boost: Kickboxing is not just about physical strength; it's about mental toughness too. Gain confidence in your abilities and discover the powerful woman within you. No Judgments, Only Cheers: Whether you're a beginner or experienced, our classes are designed for all fitness levels. There's no judgment here—only cheers for every step you take toward your goals.`,
            active: false,
            src:"./imgs/ladies-only.JPG"
        },
        {
            title: "Over 50's",
            subTitle: "Coming soon!",
            desc: "Coming soon!",
            active: false,
            src:"./imgs/over-50s.JPG"
        }
    ]


    /**
     * @typedef {Object} ScheduleItem
     * @property {string} day - The day of the week.
     * @property {string} times - The class timings.
     */

    /**
     * @typedef {Object} TimetableEntry
     * @property {string} type - The type of the timetable (e.g., 'Ninja Tots').
     * @property {ScheduleItem[]} schedule - The schedule for the type.
     */

     /**
     * Days of the week.
     * @typedef {('mon'|'tue'|'wed'|'thu'|'fri'|'sat')} Day
     */

    /**
     * Time table object for a specific type.
     * @typedef {Object} TimeTableEntry
     * @property {string} type - The type of the class.
     * @property {Array<{ day: Day, times: string }>} schedule - Array of schedule objects containing day and corresponding times.
     */

     /**
     * Capitalizes the first letter of a string.
     * @param {string} string - The input string.
     * @returns {string} The string with the first letter capitalized.
     */
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * @type {TimetableEntry[]}
     */
    let timeTable = [];

    /**
     * Creates a time table entry for a specific class type.
     *
     * @param {string} type - The type of the class.
     * @param {Object} times - Timings for each day.
     */
    function createTimeTable(type, times) {
        /**
         * Days of the week.
         * @type {Day[]}
         */
        let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

        /**
         * Time table entry for the specified class type.
         * @type {TimeTableEntry}
         */
        let obj = {
            type,
            schedule: []
        };

        for (let i = 0; i < days.length; i++) {
            
            // @ts-ignore
            if ( Array.isArray(times[days[i]]) ) {
                
                // @ts-ignore
                let [startTime, endTime] = times[days[i]];

                obj.schedule.push({
                    // @ts-ignore
                    day: capitalizeFirstLetter(days[i]), // Capitalize the first letter of the day
                    times: `${startTime} - ${endTime}`
                });
            } else {
                obj.schedule.push({
                    // @ts-ignore
                    day: capitalizeFirstLetter(days[i]), // Capitalize the first letter of the day
                    times: 'N / A'
                });
            }
        }

        timeTable.push(obj);
    }

    createTimeTable('Ninja Tots', ninjaCards[0].times)

    createTimeTable('Karate Kids', ninjaCards[1].times)

    createTimeTable('Junior Kickboxing',ninjaCards[2].times)

    createTimeTable('Adult Kickboxing',ninjaCards[3].times)

    createTimeTable('Ladies Only', ninjaCards[4].times)

    createTimeTable("Over 50's", ninjaCards[5].times)

    /**
     * The current image source for the selected Ninja card
     * @type {string}
     */
    let currentImg = ""

    /**
     * Function to change the selected Ninja card
     * @param {string} title - The title of the Ninja card to select
     */
    function changeSelected(title){
        readyState = false

        // Update the selectedNinjaCard in app
        app.selectedNinjaCard = title

        appFuncs().setAppData(app)

        // Set the active flag and currentCard
        classes.forEach(i => {
            i.active = (i.title === title)
        })

        classes = classes

        // Set the currentImg based on the active card
        const activeClass = classes.find(i => i.active)

        let str = `${activeClass?.src.split('.')[1].split('/')[2]}`

        currentImg = activeClass ? str : ''

        // Notify when ready
        setTimeout(() => {
            readyState = true
        }, 100)

    }


    /**
     * 
     * @param {number} index
     */
    function checkButtonPosition(index){
        let btnLength = classes.length
        let addLine = index < 1 || index - 1 > btnLength ? "" : "|"
        return addLine
    }

    $:if(selectedNinjaCard){
        changeSelected(selectedNinjaCard)     
    }

</script>

<div bind:this={btn} class="min-[945px]:h-[100dvh] bg-black flex bg-imgs-{currentImg} bg-no-repeat bg-cover bg-center transition-all duration-800 scale-100 filter  grayscale-[0.5] {readyState ? "opacity-100 bg-opacity-100": "opacity-0 bg-opacity-0 bg-black"}">
   <div class="bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.55)] flex h-full w-full flex-col ">
        {#each classes as {title,src,active,subTitle,desc}}
            <div class="h-full w-full flex flex-wrap {active ? "" : "hidden"}" id="title-{title.replaceAll(' ','-')}">

                <div class="the-content max-h-[80svh] transition-all duration-200 max-[600px]:m-6 max-[600px]:mt-[50px] flex-1 m-[60px] mb-[10px] min-w-[300px] font-thin text-white">
                    <div class="flex flex-col">
                        <h1 class="text-5xl max-[1000px]:text-3xl mb-6">{title}</h1>
                        <p class="text-2xl max-[1000px]:text-xl mb-3">{subTitle}</p>
                    </div>
                    
                    <div class=" overflow-auto max-h-[60svh]">
                        {#each desc.split('. ') as sentence}
                            <p class="text-lg max-[1000px]:text-sm mb-2 tracking-wider max-[600px]:mr-2">
                                {#if sentence.endsWith('.') || sentence.endsWith('!')}
                                    {sentence}
                                {:else}
                                    {sentence + '.'}
                                {/if}
                            </p>

                        {/each}
                   
                    </div>
                    
                </div>
                
                <div class=" m-[60px] max-[790px]:mt-[10px] flex-1 mt-[60px] min-w-[300px] font-thin text-white max-[600px]:m-6">
                    <p class=" text-5xl max-[1000px]:text-3xl mb-6">TimeTable</p>
                    {#each timeTable as { type, schedule }}
                        {#if title == type}
                            <div class="flex flex-col min-w-[250px] w-auto mr-1 max-w-[350px] h-[300px]">
                                {#each schedule as dayAndTime}
                                    <div class="schedule-item flex items-center flex-1">
                                        <p class="day text-xl max-[1000px]:text-lg w-[100px] bg-zinc-300 p-2 bg-opacity-60 text-zinc-900 font-normal text-center">{dayAndTime.day}</p>
                                        <p class="times text-xl max-[1000px]:text-lg bg-zinc-100 bg-opacity-10 p-2 flex-1 text-center">
                                            
                                            {dayAndTime.times}
                                            
                                        </p>
                                    </div>
                                {/each}
                            </div>
                            
                        {/if}
                    {/each}

                    {#if title == "Over 50's" }
                        <p class="text-xl">{title} to be decided soon!</p>
                    {/if}
                </div>
                
                <img alt={title} src={src} class=" hidden"/>
            </div>  
        {/each}

        <div class="justify-center flex flex-wrap">
            {#each classes as {title}, index}
                <button  on:click={()=> {changeSelected(title); btn.scrollIntoView()}} class="text-white p-3 text-lg flex flex-row justify-center items-center">
                    <p>{checkButtonPosition(index)}</p> 
                    <p class=" px-4">{title}</p>  
                </button>
                
            {/each}
        </div> 
   </div>      

   <span class="hidden bg-[url('./imgs/ninja-tots.JPG')]"></span>
   <span class="hidden bg-[url('./imgs/karate-kids.JPG')]"></span>
   <span class="hidden bg-[url('./imgs/adults.JPG')]"></span>
   <span class="hidden bg-[url('./imgs/ladies-only.JPG')]"></span>
   <span class="hidden bg-[url('./imgs/over-50s.JPG')]"></span>
   <span class="hidden opacity-100 bg-opacity-100"></span>
   <span class="hidden opacity-0 bg-opacity-0"></span>
</div>

<style>
    :global(#main-content){
        background: black;
    }

    :global(#footer){
        --tw-bg-opacity: 1;
        background-color: rgb(250 250 250 / var(--tw-bg-opacity));
    }

    .bg-imgs-ninja-tots{
        background-image: url('/imgs/ninja-tots.JPG');
    }
    .bg-imgs-karate-kids{
        background-image: url('/imgs/karate-kids.JPG');
    }
    .bg-imgs-kickboxing{
        background-image: url('/imgs/kickboxing.JPG');
    }
    .bg-imgs-adults{
        background-image: url('/imgs/adults.JPG');
    }
    .bg-imgs-ladies-only{
        background-image: url('/imgs/ladies-only.JPG');
    }
    .bg-imgs-over-50s{
        background-image: url('/imgs/over-50s.JPG');
    }

    /* custom scrollbar */
    .scrolling::-webkit-scrollbar {
    width: 20px;
    }

    .scrolling::-webkit-scrollbar-track {
    background-color: transparent;
    }

    .scrolling::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
    }

    .scrolling::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
    }
</style>