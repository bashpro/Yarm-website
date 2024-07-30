<script>
    export let 
        title = '',
        subTitle = '',
        titleTextStyle = '',
        subtitleTextStyle = ''


</script>
<p class="{titleTextStyle} font-thin mt-[40px] mb-[30px] text-center  w-full">{title}</p>
<p class="{subtitleTextStyle} font-thin text-center mb-[20px]"> {@html subTitle}</p>
<!-- <p class="sm:text-3xl font-thin text-center text-lg mb-[20px]"> Simply Call us or Book Your No Obligation Session And Get To Know Us</p> -->
<div class="flex flex-wrap min-w-[300px] max-w-[740px] justify-center w-full ml-auto mr-auto mb-[30px]" id="agreementForm">

    <!-- <p class="mb-[30px] bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded transition-all duration-200">Book Now</p> -->
    <a id="formBtn" href="https://app.acuityscheduling.com/schedule.php?owner=29629232" target="_blank" class=" text-lg acuity-embed-button  bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded transition-all duration-200">
        Schedule Appointment
    </a>
    <link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/29629232.css" id="acuity-button-styles" />
    <script src="https://embed.acuityscheduling.com/embed/button/29629232.js" async></script>
</div>
<style>
    .acuity-embed-button {
      margin-bottom: 30px; /* equivalent to mb-[30px] */
      background-color: #9a1d29; /* equivalent to bg-zinc-700 */
      color: white; /* equivalent to text-white */
      font-weight: 100; /* equivalent to font-bold */
      padding-top: 0.5rem; /* equivalent to py-2 */
      padding-bottom: 0.5rem; /* equivalent to py-2 */
      padding-left: 1rem; /* equivalent to px-4 */
      padding-right: 1rem; /* equivalent to px-4 */
      border-radius: 0.25rem; /* equivalent to rounded */
      transition: all 0.2s; /* equivalent to transition-all duration-200 */
    }
    
    .acuity-embed-button:hover {
      background-color: #b73030; /* equivalent to hover:bg-zinc-900 */
    }
</style>