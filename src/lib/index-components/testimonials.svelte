<script>
	import { mobileModeVal, navOpenVal } from "./store"

   /**
     * Checks if the page is in mobile mode.
     * @type {boolean}
     */
    let mobileMode

    /**
     * Checks if the navigation is open.
     * @type {boolean}
     */
    let navOpen

    /**
     * Represents the CSS width property based on mobileMode.
     * @type {string}
     */
    let mobileWidth

    /**
     * Represents the numeric value for mobileWidth calculation.
     * @type {number}
     */
    let mobileWidthNum

    $:{ 
        mobileWidthNum = navOpen ? 204 : 54

        mobileWidth = mobileMode ? "w-[100vw] " : `w-[calc(100vw-${mobileWidthNum}px)]`
    }

    /**
     * Observes changes in the mobileMode value.
     * @function
     * @param {boolean} i - The new value of mobileMode.
     */
    mobileModeVal.subscribe((i) => (mobileMode = i))

    /**
     * Observes changes in the navOpen value.
     * @function
     * @param {boolean} i - The new value of navOpen.
     */
    navOpenVal.subscribe((i) => (navOpen = i))

    /**
     * @typedef {Object} Testimonial
     * @property {string} author - The author of the testimonial.
     * @property {string} description - The description or content of the testimonial.
     * @property {boolean} active - Indicates whether the testimonial is currently active or not.
     * @property {string} position - The position or percentage location of the testimonial in the carousel.
     */

    /**
     * Array containing testimonial data.
     * @type {Testimonial[]}
     */
    let testimonials = [
        {
            author: "Sue Kelly, Mother of Joe and Ben",
            description:
                "This is our 11th year at the academy which speaks for itself. Both my sons are Blackbelts and still love to train and coach every week. Tony is an inspiration. We are so proud to be part of the academy. Highly recommended!",
            active: true,
            position: "1%",
        },
        {
            author: "Veronica",
            description:
                "The staff are great with the children, teaching them how to focus. My grandson loves it, he wants to be like Jack (Instructor).",
            active: false,
            position: "100%",
        },
        {
            author: "Mrs P Kamali",
            description:
                "Our two sons have been through Evolve and our eldest has now started Karate Kids. Of all the extracurricular activities they attend, Karate has massively helped to build their self-confidence, listening, focus, and determination. These are skills which we can already see them applying in other areas of their life and its a joy to see! All the staff at the academy are so amazing at what they do, how they work with the children and instil these important values, all whilst having fun too! We can see ourselves being part of the academy for many years to come.",
            active: false,
            position: "200%",
        },
    ]

    /**
     * Represents the current position of the testimonial.
     * @type {string}
     */
    let currentTestimonialPosition = `-${testimonials[0].position}`

    /**
     * Represents the current index of the active testimonial.
     * @type {number}
     */
    let currentIndex = 0

    /**
     * Handles the button click event for changing testimonials.
     * @function
     * @param {string} i - The position of the selected testimonial.
     * @param {number} index - The index of the selected testimonial.
     */
    function buttonClicked(i, index) {
        currentTestimonialPosition = `-${i}`

        testimonials.map((u) => {
            u.active = false
        })

        testimonials[index].active = true

        currentIndex = index
    }

    /**
     * Moves to the next testimonial at regular intervals.
     * @function
     */
    function moveTestimonial() {
        setTimeout(() => {
            currentIndex++
            currentIndex == testimonials.length ? (currentIndex = 0) : false

            buttonClicked(testimonials[currentIndex].position, currentIndex)
            moveTestimonial()
        }, 10000)
    }

    // Initial call to start moving testimonials
    moveTestimonial()
    

</script>


<div class="flex w-[calc(300vw)] min-h-[40vh] max-h-[70vh] flex-row overflow-hidden bg-white relative left-[{currentTestimonialPosition}] transition-all duration-800">
    {#each testimonials as i, index }
        <div class="flex justify-center items-center relative {mobileWidth} ">
            <div class="flex justify-center items-center flex-col m-[30px]">

                <div class="flex text-center text-xl font-thin">
                    <p><i class="fa fa-quote-left" aria-hidden="true"></i></p>
                    <p class="mx-2 {index == 2 ? "max-[500px]:text-sm" : ""}">{i.description}</p>
                    <p><i class="fa fa-quote-right" aria-hidden="true"></i></p>
                </div>
                
                <p class="mt-2">{i.author}</p>

            </div>
            
        </div>
    {/each}
    
</div>

<div class="h-[50px] bg-white w-full flex justify-center items-center" id="test-pagination">
    {#each testimonials as i, index }
        <button on:click={()=>{ buttonClicked(i.position, index)}} class="p-2 ">
            <i class="fa-{i.active ? "solid": "regular"} fa-circle text-sm"></i>
        </button>
    {/each}
    
    <span class="hidden w-[calc(100vw-54px)] "></span>
    <span class="hidden w-[calc(100vw-204px)]"></span>
    <span class="hidden left-[-1%]"></span>
    <span class="hidden left-[-100%]"></span>
    <span class="hidden left-[-200%]"></span>
    
</div>