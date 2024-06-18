<script>
    import LatLon from 'geodesy/latlon-spherical.js';
    import { onMount } from 'svelte';
    import hotel_data from '$lib/hotels.json';
    import venue_1_data from '$lib/venue_1.json';

    /**
     * @type {any[]}
     */
    let hotels = [];

    /**
     * @param {{}} booking
     */
    function get_travel_sites(booking) {
        if (!booking) return [];

        return Object.keys(booking);
    }

    onMount(function () {
        hotels = hotel_data
            .map(function (hotel) {
                const distance = new LatLon(hotel.coords[0], hotel.coords[1]).distanceTo(new LatLon(venue_1_data.coords[0], venue_1_data.coords[1]));

                return { ...hotel, distance };
            })
            .sort(function (a, b) {
                return a.distance - b.distance;
            });
    });
</script>

<svelte:head>
    <title>Hotel dan Penginapan - Gelar TTG NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Hotel dan Penginapan</h1>
        </div>
    </header>
    <div class="p-4">
        <div class="grid lg:grid-cols-2 gap-4">
            {#each hotels as hotel}
                <a href="./hotel/{hotel.slug}">
                    <div class="h-full shadow-lg rounded-lg hover:scale-105 ease-in-out duration-300">
                        {#await import(`../../lib/images/hotel/${hotel.cover}.jpg`) then { default: src }}
                            <img class="w-full rounded-t-lg" {src} alt="Cover {hotel.name}" />
                        {/await}
                        <div class="p-4 flex flex-row gap-4">
                            {#if hotel.type === 'hotel'}
                                <i class="fi fi-rr-hotel text-2xl text-red-500"></i>
                            {/if}
                            {#if hotel.type === 'guest_house'}
                                <i class="fi fi-rr-house-user text-2xl text-red-500"></i>
                            {/if}
                            {#if hotel.type === 'homestay'}
                                <i class="fi fi-rr-home text-2xl text-red-500"></i>
                            {/if}
                            <div>
                                <h2 class="font-bold">{hotel.name}</h2>
                                <h3 class="mt-1 text-sm">
                                    <i class="fi fi-rr-map-pin text-red-500"></i>
                                    {hotel.distance < 1000 ? hotel.distance.toFixed(0) + ' m' : (hotel.distance / 1000).toFixed(2) + ' km'} dari venue
                                </h3>
                                {#if hotel.icons && hotel.icons.length > 0}
                                    <div class="mt-2 flex flex-row flex-wrap gap-2">
                                        {#each hotel.icons as icon}
                                            <i class="fi fi-rr-{icon} text-xs text-gray-500"></i>
                                        {/each}
                                    </div>
                                {/if}
                                {#if hotel.booking}
                                    <div class="mt-1 pt-2 border-t flex flex-row flex-wrap gap-2">
                                        {#each get_travel_sites(hotel.booking) as site}
                                            {#await import(`../../lib/images/travel_sites/${site}.png`) then { default: src }}
                                                <img class="h-[15px]" {src} alt={site} />
                                            {/await}
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
