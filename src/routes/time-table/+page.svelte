<script>
// @ts-nocheck
  import {ninjaCards} from '$lib/ninjainfo.js'

  let classes = [
    {
      name: '',
      times: {
        //leave empty
      }
    },
		{
      name: 'Ninja Tots',
      times: ninjaCards[0].times
    },
    {
      name: 'Karate Kids',
      times: ninjaCards[1].times
    },
    {
      name: 'Junior Kickboxing',
      times: ninjaCards[2].times
    },
    {
      name: 'Adult Kickboxing',
      times: ninjaCards[3].times
    },
    {
      name: 'Ladies Only',
      times: ninjaCards[4].times
    },
    {
      name: "Over 50's",
      times: ninjaCards[5].times
    }
	]

	function createScheduleFromClassData(classData) {
    let schedule = [];
    let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    daysOfWeek.forEach(day => {
      let daySchedule = { day: day, times: [] };
      classData.forEach(c => {
        if (c.times[day.toLowerCase()]) {
          daySchedule.times.push({ className: c.name, time: c.times[day.toLowerCase()] });
        }
      });
      schedule.push(daySchedule);
    });

    return schedule;
  }

  let timetable = createScheduleFromClassData(classes);

  </script>
  
  <div class="w-full h-[100dvh] flex justify-center items-center flex-col bg-[url('/imgs/kickboxing.JPG')] bg-no-repeat bg-cover bg-center scale-100 filter grayscale-[0.5] opacity-100 bg-opacity-100">
    <div class="w-full h-[100dvh] flex justify-center items-center flex-col bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.55)]">
      <div class="w-full h-[150px] flex">
        <h1 class="m-[60px] text-5xl max-[1000px]:text-3xl mb-6 font-thin text-white">Timetable</h1>
      </div>
      
  
      <div class="flex flex-1 justify-center items-center text-white">
        <div class="flex h-[70dvh] w-[85dvw] timetable">
          
          <!-- Fixed column for class names -->
          <div class="min-w-[100px] flex flex-col justify-center items-center">
            {#each classes as i}
              <div class="text-lg flex-1 flex justify-center items-center w-full">
                {i.name}
              </div>
            {/each}          
          </div>
          
          <!-- Scrollable section for days and times -->
          <div class="flex flex-1 min-w-[100px] overflow-x-auto">
            {#each timetable as day}
              <div class="flex flex-col text-lg flex-grow min-w-[150px] mx-2 justify-center items-center w-full">
                <div class="flex flex-col text-lg flex-1 justify-center items-center w-full text-center">
                  {day.day}
                </div>
                {#each day.times as classTime}
                  <div class="flex flex-col text-lg flex-1 justify-center items-center w-full font-thin text-center">
                    {#if Array.isArray(classTime.time)}
                      {classTime.time.join(' - ')}
                    {:else}
                      {classTime.time}
                    {/if}
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
    
  </div>

<style>
  
  .overflow-x-auto {
    overflow-x: auto;
  }

  @media (min-width: 769px) { /* Targets screens larger than mobile devices */
    /* Style for the scrollbar track (background) */
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
      border-radius: 10px;
    }

    /* Style for the scrollbar handle */
    ::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 10px;
    }

    /* Style for the scrollbar handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }

    /* Adjust the width of the scrollbar */
    ::-webkit-scrollbar {
      height: 10px; /* Adjust the height for horizontal scrollbar */
    }

  }
    
  .timetable {
    /* Use your primary color here with some transparency */
    background-color: rgba(255, 255, 255, 0.3); /* Adjust the color and transparency as needed */
    /* Apply the blur effect */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* For Safari */
    border-radius: 10px; /* Optional: if you want rounded corners */
    padding: 1rem; /* Optional: for some spacing */
    margin-top: 1rem; /* Optional: to ensure it doesn't stick to elements above */
  }
    
  
</style>
  