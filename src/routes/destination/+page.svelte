<script>
    import LatLon from 'geodesy/latlon-spherical.js';
    import Swal from 'sweetalert2';
    import { onMount } from 'svelte';
    import destination_data from '$lib/destinations.json';
    import venue_1_data from '$lib/venue_1.json';

    /**
     * @type {any[]}
     */
    let destinations = [];
    let from_venue_1 = true;

    function nearest() {
        if (!navigator.geolocation) {
            Swal.fire('Ups', 'Perangkat Anda tidak mendukung fitur geolocation', 'error');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function (position) {
                const userCoords = [position.coords.latitude, position.coords.longitude];
                destinations = destination_data
                    .map(function (destination) {
                        const distance = new LatLon(destination.coords[0], destination.coords[1]).distanceTo(new LatLon(userCoords[0], userCoords[1]));

                        return { ...destination, distance };
                    })
                    .sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                from_venue_1 = false;
            },
            function (error) {
                Swal.fire('Ups', 'Gagal mendapatkan lokasi Anda', error.code === error.PERMISSION_DENIED ? 'error' : 'warning');
            }
        );
    }

    onMount(function () {
        destinations = destination_data
            .map(function (destination) {
                const distance = new LatLon(destination.coords[0], destination.coords[1]).distanceTo(new LatLon(venue_1_data.coords[0], venue_1_data.coords[1]));

                return { ...destination, distance };
            })
            .sort(function (a, b) {
                return a.distance - b.distance;
            });
    });
</script>

<svelte:head>
    <title>Wisata - GTTG NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Destinasi Wisata</h1>
        </div>
    </header>
    <div class="p-4">
        <button class="flex flex-row gap-2 items-center w-full bg-orange-50 border border-orange-400 p-2 rounded-md text-sm mb-2" type="button" on:click={nearest}>
            <i class="fi fi-rr-location-crosshairs text-xl leading-none"></i>
            <span>Temukan destinasi wisata terdekat</span>
        </button>
        <div class="grid lg:grid-cols-2 gap-4">
            {#each destinations as destination}
                <a href="./destination/{destination.slug}">
                    <div class="h-full shadow-lg rounded-lg hover:scale-105 ease-in-out duration-300">
                        {#await import(`../../lib/images/destination/${destination.cover}.png`) then { default: src }}
                            <img class="w-full rounded-t-lg" {src} alt="Cover {destination.name}" />
                        {/await}
                        <div class="p-4">
                            <h2 class="font-bold">{destination.name}</h2>
                            <h3 class="mt-1 text-sm">
                                <i class="fi fi-rr-map-pin text-red-500"></i>
                                {destination.distance < 1000 ? destination.distance.toFixed(0) + ' m' : (destination.distance / 1000).toFixed(2) + ' km'} dari {from_venue_1 ? 'venue' : 'lokasi saya'}
                            </h3>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
