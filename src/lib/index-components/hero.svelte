<script>
// @ts-nocheck

  import { onMount } from 'svelte'

  let deviceType

  onMount(() => {
      deviceType = getDeviceType();
  });

  function getDeviceType() {
    // @ts-ignore
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // @ts-ignore
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iPhone';
    }

    if (/android/i.test(userAgent)) {
        return 'Android';
    }

    return 'Desktop';
  }

</script>
<div class="relative w-full h-screen" id="hero">
    
    <video class="absolute inset-0 w-full h-full object-cover filter brightness-[0.6]" src="./mma3.{deviceType == 'iPhone' ? 'mp4' : 'webm'}" autoplay loop muted playsinline>
    </video>
    <div class="z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col" id="hero-text">
      <div class="flex justify-center min-w-[240px] w-[28%]" id="hero-logo">
        <img class="object-cover min-w-[100px] filter brightness-[0.9] grayscale-[0.3]" src="./YMAA_logo_new.png" alt="logo">
      </div>
      <p class="text-white sm:text-6xl font-thin mb-[10px] text-center text-4xl">Welcome to Yarm Martial Arts</p>
      <p class="text-white sm:text-3xl font-thin text-center text-xl">Opening the Doors to Your Future</p>
      <p class="text-white sm:text-xl font-thin text-center text-lg">Established Since 2001</p>
      <div class="flex w-[100px] h-[50px]" id="arrow-down"></div>
    </div>
</div>

<style>
  .youtube-video {
    object-fit: cover; /* This won't have an effect on iframes, it's here for illustrative purposes */
  }
</style>