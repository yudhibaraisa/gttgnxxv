<script>
    import LatLon from 'geodesy/latlon-spherical.js';
    import Swal from 'sweetalert2';
    import { onMount } from 'svelte';
    import atm_data from '$lib/atms.json';
    import venue_1_data from '$lib/venue_1.json';

    /**
     * @type {any[]}
     */
    let atms = [];
    let from_venue_1 = true;

    function nearest() {
        if (!navigator.geolocation) {
            Swal.fire('Ups', 'Perangkat Anda tidak mendukung fitur geolocation', 'error');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function (position) {
                const userCoords = [position.coords.latitude, position.coords.longitude];
                atms = atm_data
                    .map(function (atm) {
                        const distance = new LatLon(atm.coords[0], atm.coords[1]).distanceTo(new LatLon(userCoords[0], userCoords[1]));

                        return { ...atm, distance };
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
        atms = atm_data
            .map(function (atm) {
                const distance = new LatLon(atm.coords[0], atm.coords[1]).distanceTo(new LatLon(venue_1_data.coords[0], venue_1_data.coords[1]));

                return { ...atm, distance };
            })
            .sort(function (a, b) {
                return a.distance - b.distance;
            });
    });
</script>

<svelte:head>
    <title>ATM - GTTG NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Lokasi ATM</h1>
        </div>
    </header>
    <div class="p-4">
        <button class="flex flex-row gap-2 items-center w-full bg-orange-50 border border-orange-400 p-2 rounded-md text-sm mb-2" type="button" on:click={nearest}>
            <i class="fi fi-rr-location-crosshairs text-xl leading-none"></i>
            <span>Temukan ATM di sekitar saya</span>
        </button>
        <div class="bg-blue-50 border border-blue-400 p-2 rounded-md text-xs mb-4">Ketuk nama ATM untuk membuka lokasinya di peta.</div>
        <div class="grid lg:grid-cols-2 gap-4">
            {#each atms as atm}
                <a href="https://maps.google.com/?q={atm.coords[0]},{atm.coords[1]}" target="_blank">
                    <div class="shadow-lg rounded-lg hover:scale-105 ease-in-out duration-300">
                        <div class="p-4 flex flex-row items-center gap-4">
                            {#await import(`../../lib/images/atm/${atm.logo}.png`) then { default: src }}
                                <img class="w-[50px] rounded-t-lg" {src} alt="Logo {atm.name}" />
                            {/await}
                            <div class="grow">
                                <h2 class="font-bold">{atm.name}</h2>
                                <h3 class="mt-1 text-sm">
                                    <i class="fi fi-rr-map-pin text-red-500"></i>
                                    {atm.distance < 1000 ? atm.distance.toFixed(0) + ' m' : (atm.distance / 1000).toFixed(2) + ' km'} dari {from_venue_1 ? 'venue' : 'lokasi saya'}
                                </h3>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
