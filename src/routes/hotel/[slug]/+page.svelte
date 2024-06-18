<script>
    import LatLon from 'geodesy/latlon-spherical.js';
    import { onMount } from 'svelte';
    import venue_1_data from '$lib/venue_1.json';
    import destination_data from '$lib/destinations.json';

    /** @type {import('./$types').PageData} */
    export let data;
    let distance = 0;
    /**
     * @type {any[]}
     */
    let destinations = [];

    function openGMaps() {
        window.open(data.google_maps, '_blank');
    }

    /**
     * @param {string} url
     */
    function openUrl(url) {
        window.open(url, '_blank');
        return null;
    }

    onMount(function () {
        distance = new LatLon(data.coords[0], data.coords[1]).distanceTo(new LatLon(venue_1_data.coords[0], venue_1_data.coords[1]));

        destinations = destination_data
            .map(function (destination) {
                const distance = new LatLon(destination.coords[0], destination.coords[1]).distanceTo(new LatLon(data.coords[0], data.coords[1]));

                return { ...destination, distance };
            })
            .sort(function (a, b) {
                return a.distance - b.distance;
            });
    });
</script>

<svelte:head>
    <title>{data.name} - Penginapan GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Hotel</h1>
        </div>
    </header>
    <div class="p-4">
        <div class="mb-4">
            {#await import(`../../../lib/images/hotel/${data.cover}.jpg`) then { default: src }}
                <img class="w-full rounded-md shadow-md" {src} alt="Cover {data.name}" />
            {/await}
        </div>
        <div>
            <div class="grow">
                <h1 class="font-bold text-xl mb-2">{data.name}</h1>
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
            <div class="mt-4">
                <div>
                    <span class="text-sm">Fasilitas</span>
                </div>
                <div class="mt-2">
                    {#if data.icons && data.icons.length > 0}
                        <div class="flex flex-row flex-wrap gap-4">
                            {#each data.icons as icon}
                                <div class="flex flex-row gap-2 text-xs text-gray-500">
                                    <span>
                                        <i class="fi fi-rr-{icon}"></i>
                                    </span>
                                    <span class="text-gray-500 text-xs">
                                        {#if icon === 'wifi'}
                                            <span>WiFi</span>
                                        {/if}
                                        {#if icon === 'air-conditioner'}
                                            <span>AC</span>
                                        {/if}
                                        {#if icon === 'parking'}
                                            <span>Parkir</span>
                                        {/if}
                                        {#if icon === 'time-twenty-four'}
                                            <span>24 Jam</span>
                                        {/if}
                                        {#if icon === 'utensils'}
                                            <span>Makan</span>
                                        {/if}
                                    </span>
                                </div>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
            <div class="mt-4">
                <div>
                    <span class="text-sm">Pemesanan</span>
                </div>
                {#if data.booking}
                    <div class="grid grid-cols-2 gap-2 mt-2">
                        {#if data.booking.traveloka}
                            <button class="border border-blue-400 bg-blue-50 p-2 rounded-md text-center" on:click={openUrl(data.booking.traveloka)}>
                                {#await import(`../../../lib/images/travel_sites/traveloka.png`) then { default: src }}
                                    <img class="h-[20px] inline-block" {src} alt="Traveloka" />
                                {/await}
                            </button>
                        {/if}
                        {#if data.booking.tiket}
                            <button class="border border-blue-600 bg-blue-50 p-2 rounded-md text-center" on:click={openUrl(data.booking.tiket)}>
                                {#await import(`../../../lib/images/travel_sites/tiket.png`) then { default: src }}
                                    <img class="h-[20px] inline-block" {src} alt="Tiket" />
                                {/await}
                            </button>
                        {/if}
                        {#if data.booking.agoda}
                            <button class="border border-yellow-500 bg-yellow-50 p-2 rounded-md text-center" on:click={openUrl(data.booking.agoda)}>
                                {#await import(`../../../lib/images/travel_sites/agoda.png`) then { default: src }}
                                    <img class="h-[20px] inline-block" {src} alt="Agoda" />
                                {/await}
                            </button>
                        {/if}
                        {#if data.booking.reddoorz}
                            <button class="border border-red-600 bg-red-50 p-2 rounded-md text-center" on:click={openUrl(data.booking.reddoorz)}>
                                {#await import(`../../../lib/images/travel_sites/reddoorz.png`) then { default: src }}
                                    <img class="h-[20px] inline-block" {src} alt="RedDoorz" />
                                {/await}
                            </button>
                        {/if}
                    </div>
                {/if}
                {#if !data.booking}
                    <div class="mt-2 text-justify">
                        <span class="text-xs text-gray-500">Hotel/penginapan ini tidak tersedia untuk dipesan secara online.</span>
                    </div>
                {/if}
            </div>
            <div class="mt-4">
                <div>
                    <span class="text-sm">Destinasi Terdekat</span>
                </div>
                <div class="flex flex-col gap-4 mt-2">
                    {#each destinations as destination}
                        <div class="grid grid-cols-6 gap-2">
                            {#await import(`../../../lib/images/destination/${destination.cover}.png`) then { default: src }}
                                <img class="col-span-2 w-full rounded-sm" {src} alt="Cover {destination.name}" />
                            {/await}
                            <div class="col-span-4">
                                <div class="text-sm">
                                    <span>{destination.name}</span>
                                </div>
                                <div class="text-xs">
                                    <i class="fi fi-rr-map-pin text-red-500"></i>
                                    <span class="text-gray-500">{destination.distance < 1000 ? destination.distance.toFixed(0) + ' m' : (destination.distance / 1000).toFixed(2) + ' km'} dari hotel</span>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
