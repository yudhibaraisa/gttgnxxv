<!--<script>
    import lo_data from '$lib/lo.json';
</script>
-->

<svelte:head>
    <title>Stand - GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Stand</h1>
        </div>
    </header>
    <div class="p-4 flex flex-col gap-12 items-center">
        {#await import(`../../lib/images/stand.png`) then { default: src }}
            <img class="w-full rounded-lg shadow-lg mb-4" {src} alt="Stand" />
        {/await}
    </div>
</div>
