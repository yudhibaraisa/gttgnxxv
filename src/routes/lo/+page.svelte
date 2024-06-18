<script>
    import lo_data from '$lib/lo.json';
</script>

<svelte:head>
    <title>Liaison Officer (LO) - GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Liaison Officer (LO)</h1>
        </div>
    </header>
    <div class="p-4">
        <div class="bg-blue-50 border border-blue-400 p-2 rounded-md text-xs mb-4">Ketuk foto LO untuk membuka chat WhatsApp.</div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {#each lo_data as lo}
                <a href={lo.whatsapp} target="_blank">
                    <div class="h-full shadow-lg rounded-lg hover:scale-105 ease-in-out duration-300">
                        {#await import(`../../lib/images/lo/${lo.cover}.png`) then { default: src }}
                            <img class="w-full rounded-t-lg" {src} alt={lo.name} />
                        {/await}
                        <div class="p-4">
                            <div class="grow">
                                <h2 class="font-bold">{lo.group}</h2>
                                <h3 class="text-sm">{lo.name}</h3>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
