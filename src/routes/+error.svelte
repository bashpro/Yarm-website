<script>
// @ts-nocheck

    import { page } from '$app/stores';
</script>

<div class="flex w-full h-screen justify-center items-center flex-col">  
    <h1 class="text-4xl pb-2">{$page.status}: Page {$page.error.message}</h1>
    <span><a href="/" class="text-zinc-600"> click here </a> to redirect</span>
    
</div>