<script>
    import transport_data from '$lib/transport.json';
</script>

<svelte:head>
    <title>Transportasi - GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Transportasi</h1>
        </div>
    </header>
    <div class="p-4">
        <div class="grid lg:grid-cols-2 gap-4">
            {#each transport_data as transport}
                <div class="shadow-lg rounded-lg hover:scale-105 ease-in-out duration-300">
                    <div class="p-4 flex flex-row items-center gap-4">
                        {#await import(`../../lib/images/transport/${transport.icon}.png`) then { default: src }}
                            <img class="w-[50px] rounded-t-lg" {src} alt="Ikon {transport.name}" />
                        {/await}
                        <div class="grow">
                            <h2 class="font-bold">{transport.name}</h2>
                            <h3 class="text-sm">{transport.description}</h3>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
