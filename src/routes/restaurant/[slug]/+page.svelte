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
</script>

<svelte:head>
    <title>{data.name} - Restoran GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Restoran</h1>
        </div>
    </header>
    <div class="p-4">
        <div class="mb-4">
            {#await import(`../../../lib/images/restaurant/${data.cover}.jpg`) then { default: src }}
                <img class="w-full rounded-md shadow-md" {src} alt="Cover {data.name}" />
            {/await}
        </div>
        <div>
            <div>
                <h1 class="font-bold text-xl">{data.name}</h1>
                <h3 class="text-sm">
                    <i class="fi fi-rr-map-pin text-red-500"></i>
                    {distance < 1000 ? distance.toFixed(0) + ' m' : (distance / 1000).toFixed(2) + ' km'} dari venue
                </h3>
            </div>
            <p class="mt-3 text-xs text-justify text-gray-700">{data.description}</p>
            <div class="grid grid-cols-2 gap-2 mt-3">
                <a href="https://maps.google.com/?q={data.coords[0]},{data.coords[1]}" target="_blank">
                    <div class="w-full text-sm p-2 border border-orange-400 bg-orange-50 rounded-md text-center">
                        <i class="fi fi-rr-location-arrow mr-1"></i> Lihat di Peta
                    </div>
                </a>
                {#if data.delivery && data.delivery.grab_food}
                    <a href={data.delivery.grab_food} target="_blank">
                        <div class="w-full text-sm p-2 border border-green-600 bg-red-200 text-white rounded-md text-center">
                            {#await import('../../../lib/images/food_delivery/grabfood.svg') then { default: src }}
                                <img class="inline h-7 my-[-8px]" {src} alt="GrabFood" />
                            {/await}
                        </div>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>
