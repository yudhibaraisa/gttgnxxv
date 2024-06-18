<script>
    import LatLon from 'geodesy/latlon-spherical.js';
    import { onMount } from 'svelte';
    import equipment_data from '$lib/equipment.json';
    import venue_1_data from '$lib/venue_1.json';

    /**
     * @type {any[]}
     */
    let stores = [];
    let from_venue_1 = true;

    onMount(function () {
        stores = equipment_data
            .map(function (store) {
                const distance = new LatLon(store.coords[0], store.coords[1]).distanceTo(new LatLon(venue_1_data.coords[0], venue_1_data.coords[1]));

                return { ...store, distance };
            })
            .sort(function (a, b) {
                return a.distance - b.distance;
            });
    });
</script>

<svelte:head>
    <title>Toko Perlengkapan - GTTG NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Toko Perlengkapan</h1>
        </div>
    </header>
    <div class="p-4">
        <div class="bg-blue-50 border border-blue-400 p-2 rounded-md text-xs mb-4">Ketuk nama toko untuk membuka lokasinya di peta.</div>
        <div class="grid lg:grid-cols-2 gap-4">
            {#each stores as store}
                <a href="https://maps.google.com/?q={store.coords[0]},{store.coords[1]}" target="_blank">
                    <div class="shadow-lg rounded-lg hover:scale-105 ease-in-out duration-300">
                        <div class="p-4">
                            <div class="grow">
                                <h2 class="font-bold">{store.name}</h2>
                                <h3 class="mt-1 text-xs">{store.description}</h3>
                                <h3 class="mt-1 text-sm">
                                    <i class="fi fi-rr-map-pin text-red-500"></i>
                                    {store.distance < 1000 ? store.distance.toFixed(0) + ' m' : (store.distance / 1000).toFixed(2) + ' km'} dari venue
                                </h3>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
