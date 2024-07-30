<script>
	import Aboutus from "$lib/index-components/aboutus.svelte";
	import Form from "$lib/index-components/form.svelte";
	import { text } from "@sveltejs/kit";

    let array = [
        {
            icon: 'fa-envelope',
            title: 'Email',
            text: 'info@yarmmartialarts.co.uk',
        },
        {
            icon: 'fa-phone',
            title: 'Phone',
            text: '01642 354 937'
        },
        {
            icon: 'fa-brands fa-square-facebook',
            title: 'Facebook',
            text: '@yarmmartialarts'
        }
    ]

</script>

<div class=" flex w-full flex-col">
    <div class="flex flex-col bg-zinc-100 max-[1072px]:h-auto h-auto p-[60px] max-[600px]:p-6 max-[600px]:pt-[50px] transition-all duration-200 font-thin">
        <div class="text-center flex justify-center items-center flex-col">
            <h1 class="text-5xl max-[1000px]:text-3xl mb-6">Contact Us</h1>
            <p class="text-2xl max-[1000px]:text-lg tracking-wider">Get in touch!</p>
            <p class="text-2xl max-[1000px]:text-lg mb-8 tracking-wider">We'd love to hear from you!</p>
            <img class="w-[200px] object-cover min-w-[100px] filter brightness-[0.8] grayscale-[0.3]" src="./YMAA_logo_new.png" alt="logo">
        </div>
        
        <div class="flex-1 flex flex-wrap items-center justify-center">
            {#each array as {icon, title, text} }
                <a target="_blank" href="{title == 'Email'? `mailto:${text}`: title == 'Phone' ? `tel:${text}` : `https://www.facebook.com/yarmmartialarts` }" class="min-w-[300px] flex justify-center items-center flex-col cursor-pointer flex-1 flex-grow h-[200px]">
                    <i class="fa-solid {icon} text-6xl mb-[10px] hover:text-[#b73030] text-zinc-400 duration-200 transition-all"></i>
                    <h2 class="text-xl">{text}</h2>
                </a>
            {/each}
        </div>
    </div>
    <Form />
    <Aboutus />
</div>