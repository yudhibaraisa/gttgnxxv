<script>
    import LatLon from 'geodesy/latlon-spherical.js';
    import { onMount } from 'svelte';
    import venue_1_data from '$lib/venue_1.json';

    /** @type {import('./$types').PageData} */
    export let data;
    let distance = 0;

    onMount(function () {
        distance = new LatLon(data.coords[0], data.coords[1]).distanceTo(new LatLon(venue_1_data.coords[0], venue_1_data.coords[1]));
    });

    function openGMaps() {
        window.open(data.google_maps, '_blank');
    }
</script>

<svelte:head>
    <title>{data.name} - Oleh-oleh GTTG NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Oleh-oleh</h1>
        </div>
    </header>
    <div class="p-4">
        <div class="mb-4">
            {#await import(`../../../lib/images/souvenir/${data.cover}.png`) then { default: src }}
                <img class="w-full rounded-md shadow-md" {src} alt="Cover {data.name}" />
            {/await}
        </div>
        <div>
            <div class="grow">
                <h1 class="font-bold text-xl">{data.name}</h1>
                <h3 class="text-sm">
                    <i class="fi fi-rr-map-pin text-red-500"></i>
                    {distance < 1000 ? distance.toFixed(0) + ' m' : (distance / 1000).toFixed(2) + ' km'} dari venue
                </h3>
            </div>
            <div class="mt-3">
                <button class="w-full text-sm p-2 border border-orange-400 bg-orange-50 rounded-md" on:click={openGMaps}>
                    <i class="fi fi-rr-location-arrow mr-1"></i> Lihat di Peta
                </button>
            </div>
        </div>
    </div>
</div>
