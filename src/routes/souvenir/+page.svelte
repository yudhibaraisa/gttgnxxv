<script>
    import LatLon from 'geodesy/latlon-spherical.js';
    import { onMount } from 'svelte';
    import souvenir_data from '$lib/souvenir.json';
    import venue_1_data from '$lib/venue_1.json';

    /**
     * @type {any[]}
     */
    let souvenirs = [];

    onMount(function () {
        souvenirs = souvenir_data
            .map(function (souvenir) {
                const distance = new LatLon(souvenir.coords[0], souvenir.coords[1]).distanceTo(new LatLon(venue_1_data.coords[0], venue_1_data.coords[1]));

                return { ...souvenir, distance };
            })
            .sort(function (a, b) {
                return a.distance - b.distance;
            });
    });
</script>

<svelte:head>
    <title>Oleh-oleh - GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Pusat Oleh-oleh</h1>
        </div>
    </header>
    <div class="p-4">
        <div class="grid lg:grid-cols-2 gap-4">
            {#each souvenirs as souvenir}
                <a href="./souvenir/{souvenir.slug}">
                    <div class="h-full shadow-lg rounded-lg hover:scale-105 ease-in-out duration-300">
                        {#await import(`../../lib/images/souvenir/${souvenir.cover}.png`) then { default: src }}
                            <img class="w-full rounded-t-lg" {src} alt="Cover {souvenir.name}" />
                        {/await}
                        <div class="p-4">
                            <h2 class="font-bold">{souvenir.name}</h2>
                            <h3 class="mt-1 text-sm">
                                <i class="fi fi-rr-map-pin text-red-500"></i>
                                {souvenir.distance < 1000 ? souvenir.distance.toFixed(0) + ' m' : (souvenir.distance / 1000).toFixed(2) + ' km'} dari venue
                            </h3>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
