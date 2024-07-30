<script>
    let teamAry = [
        {
            Name: 'Master Tony Rice',
            position: 'Dojo Owner',
            img: './imgs/Tony-Rice-web.PNG'
        },
        {
            Name: 'Vicky',
            position: 'Receptionist',
            img: './imgs/IMG_0620-web.PNG' 
        },
        {
            Name: 'Sam',
            position: 'Programme Manager',
            img: './imgs/IMG_0614-web.PNG'
        },
        {
            Name: 'Rhianna',
            position: 'Senior Instructor',
            img: './imgs/IMG_0615-web.PNG'
        },
        {
            Name: 'Jack',
            position: 'Senior Instructor',
            img: './imgs/IMG_0617-web.PNG'
        },
        {
            Name: 'Mia',
            position: 'Receptionist',
            img: './imgs/IMG_0619-web.PNG'
        },
        {
            Name: 'James',
            position: 'Assistant Instructor',
            img: './imgs/IMG_0621-web.PNG'
        },
        {
            Name: 'Pypre',
            position: 'Assistant Instructor',
            img: './imgs/Pypre.JPG'
        }
    ]
</script>

<div class="flex-1 text-white font-thin">
    <div class="flex overflow-hidden relative bg-no-repeat bg-cover bg-center bg-[url('/imgs/the-team.PNG')] h-[100dvh] max-[1450px]:h-[70dvh] max-[1000px]:h-[50dvh] max-[750px]:h-[60dvh] max-[450px]:h-[50svh] transition-all duration-200">
        <img alt="the team" src="./imgs/the-team.PNG" class=" hidden">
        <div class="flex-1 p-[60px] max-[600px]:p-6 max-[600px]:pt-[50px] text-white font-thin bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] flex flex-col">
            <div class=" mb-6">
                <h1 class="text-5xl max-[1000px]:text-3xl">Meet The Team</h1>
            </div>
            

            <div class="flex flex-col h-full justify-center items-center text-center max-[760px]:w-full overflow-hidden ">
                <div class="overflow-y-auto scrollbar">
                    <p class="max-[1000px]:text-base mb-3 text-2xl">Master Tony Rice, a 5th Dan Choi Kwang Do practitioner, established Pil Sung Martial Arts in 2001, aiming to teach martial arts to people of all ages while instilling core life values. The academy, led by Master Rice and his team, focuses on shaping not just skilled martial artists but also individuals who embody these values in their daily lives, having positively impacted many students over 20 years. The academy's ethos, encapsulated by the brass plaque with the inscription "Learn the Way, Lead the Way," invites everyone to join in this journey of personal and martial growth.</p>
                    
                    
                </div>
                
            </div>

           
        </div>
    </div>
    
</div>

<div class="w-full h-auto flex justify-center flex-col text-center m-3">
    <h1 class="text-5xl max-[1000px]:text-3xl font-thin m-3 ">The Team</h1>
</div>

<div class="flex justify-center items-center h-auto w-full">
    <div class="flex flex-wrap justify-center items-center max-w-[1200px]">
        {#each teamAry as {Name , position, img} }
            <div class="min-w-[350px] max-w-[450px] flex flex-1 flex-grow h-[550px] justify-center items-center">
                <div class="w-[85%] bg-white h-[85%] flex flex-col items-center text-black font-thin">
                    <img alt="{Name}" src="{img}"  class="w-full h-[70%] object-cover">
                    <h2 class="text-2xl max-[1000px]:text-xl m-6">{Name}</h2>
                    <p>{position}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<div  class="flex justify-center items-center h-auto w-full font-thin">
    <div class="w-full h-auto flex justify-center flex-col text-center m-3  max-w-[1200px]">
        <p class="text-lg max-[1000px]:text-sm mb-8 ">
            Master Rice and all the staff of Yarm Martial Arts believe in not just creating good martial artists but good people. The core values must be present in all students and adhered to in everyday life. In teaching martial arts students for the last 20 years, Master Rice has had numerous students come to him and say that what they learned at YMA has helped them succeed and overcome obstacles that they have had to face. 
         </p>
    
         <p class="text-lg max-[1000px]:text-sm mb-8 ">When you walk into the academy there is a brass plaque that greets everyone that enters, stating :</p>
    
         <h2 class="text-2xl max-[1000px]:text-xl mb-6">“ Learn the Way, Lead the Way ”</h2>
         <p class="text-lg max-[1000px]:text-sm mb-8 tracking-wider">We hope you join us on your journey.</p>   
    </div>
</div>





<!-- <div class="flex overflow-hidden relative bg-no-repeat bg-cover bg-center bg-[url('/imgs/kickboxing.JPG')] ">

    <div class="flex-1 p-[60px] max-[600px]:p-6 max-[600px]:pt-[50px] text-white font-thin bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)]">
        
        
        <div class="flex flex-wrap justify-center items-center">
            {#each teamAry as {Name , position, img} }
                <div class="min-w-[350px] max-w-[450px] flex flex-1 flex-grow h-[550px] justify-center items-center">
                    <div class="w-[85%] bg-white h-[85%] flex flex-col items-center text-black font-thin">
                        <img alt="{Name}" src="{img}"  class="w-full h-[70%] object-cover">
                        <h2 class="text-2xl max-[1000px]:text-xl m-6">{Name}</h2>
                        <p>{position}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class=" text-center">
            <p class="text-lg max-[1000px]:text-sm mb-8 tracking-wider">
                After a lifetime in the Martial Arts, Master Tony Rice 5th Dan Choi Kwang Do, founded Pil Sung Martial Arts in 2001. The goal was to create a family orientated academy that focused on teaching martial arts skills to both young and old to promote key core life values. These values are recited as a pledge by all students at the beginning of every class. Too often, martial arts is promoted as strictly a fighting art and the deeper meanings of martial arts and being a true well rounded martial artist are lost.
            </p>
            <p class="text-lg max-[1000px]:text-sm mb-8 tracking-wider">
               Master Rice and all the staff of Yarm Martial Arts believe in not just creating good martial artists but good people. The core values must be present in all students and adhered to in everyday life. In teaching martial arts students for the last 20 years, Master Rice has had numerous students come to him and say that what they learned at YMA has helped them succeed and overcome obstacles that they have had to face. 
            </p>
    
            <p class="text-lg max-[1000px]:text-sm mb-8 tracking-wider">When you walk into the academy their is a brass plaque that greets everyone that enters, stating :</p>
    
            <h2 class="text-2xl max-[1000px]:text-xl mb-6">“ Learn the Way, Lead the Way ”</h2>
            <p class="text-lg max-[1000px]:text-sm mb-8 tracking-wider">We hope you join us on your journey.</p>   
            
        </div>
 
    </div>

    <img class="hidden" alt="yarm-mma-class" src="./imgs/kickboxing.JPG">

</div> -->



<div class="w-full flex flex-wrap bg-zinc-200 max-[700px]:flex-col-reverse">
    <div class=" justify-center flex flex-1 min-h-[50dvh] min-w-[320px] max-[694px]:h-[40dvh] flex-col font-thin overflow-hidden">
        <p class="pb-6 text-4xl text-center">The Rules We Live By</p>
        <ul class=" text-center text-2xl">
            <li>Courtesy</li>
            <li>Integrity</li>
            <li>Perseverance</li>
            <li>Self Control</li>
            <li>Indomitable Spirit</li>
        </ul>
    </div>
    <div class="flex flex-1 h-[50dvh] min-w-[320px] max-sm:h-[30dvh]">
        <img alt="" class="group-hover:scale-[1.1] scale-100 transition-all duration-200 w-full h-full object-cover filter brightness-[0.8] grayscale-[0.5] " src="imgs/rules.JPG">
    </div>
    
</div>


<style>
    .scrollbar::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
      border-radius: 10px;
    }

    /* Style for the scrollbar handle */
    .scrollbar::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 10px;
    }

    /* Style for the scrollbar handle on hover */
    .scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }

    /* Adjust the width of the scrollbar */
    .scrollbar::-webkit-scrollbar {
      height: 10px; /* Adjust the height for horizontal scrollbar */
      width: 5px
    }
</style>
