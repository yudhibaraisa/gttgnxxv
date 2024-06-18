<script>
    import LatLon from 'geodesy/latlon-spherical.js';
    import Swal from 'sweetalert2';
    import { onMount } from 'svelte';
    import restaurant_data from '$lib/restaurants.json';
    import venue_1_data from '$lib/venue_1.json';

    /**
     * @type {any[]}
     */
    let restaurants = [];
    let from_venue_1 = true;

    function nearest() {
        if (!navigator.geolocation) {
            Swal.fire('Ups', 'Perangkat Anda tidak mendukung fitur geolocation', 'error');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function (position) {
                const userCoords = [position.coords.latitude, position.coords.longitude];
                restaurants = restaurant_data
                    .map(function (restaurant) {
                        const distance = new LatLon(restaurant.coords[0], restaurant.coords[1]).distanceTo(new LatLon(userCoords[0], userCoords[1]));

                        return { ...restaurant, distance };
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
        restaurants = restaurant_data
            .map(function (restaurant) {
                const distance = new LatLon(restaurant.coords[0], restaurant.coords[1]).distanceTo(new LatLon(venue_1_data.coords[0], venue_1_data.coords[1]));

                return { ...restaurant, distance };
            })
            .sort(function (a, b) {
                return a.distance - b.distance;
            });
    });
</script>

<svelte:head>
    <title>Restoran - GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Restoran</h1>
        </div>
    </header>
    <div class="p-4">
        <button class="flex flex-row gap-2 items-center w-full bg-orange-50 border border-orange-400 p-2 rounded-md text-sm mb-2" type="button" on:click={nearest}>
            <i class="fi fi-rr-location-crosshairs text-xl leading-none"></i>
            <span>Temukan restoran di sekitar saya</span>
        </button>
        <div class="grid lg:grid-cols-2 gap-4">
            {#each restaurants as restaurant}
                <a href="./restaurant/{restaurant.slug}">
                    <div class="shadow-lg rounded-lg hover:scale-105 ease-in-out duration-300">
                        {#await import(`../../lib/images/restaurant/${restaurant.cover}.jpg`) then { default: src }}
                            <img class="w-full rounded-t-lg" {src} alt="Ikon {restaurant.name}" />
                        {/await}
                        <div class="p-4">
                            <h2 class="font-bold">{restaurant.name}</h2>
                            <h3 class="mt-2 text-xs">{restaurant.description}</h3>
                            <h3 class="mt-2 text-sm">
                                <i class="fi fi-rr-map-pin text-red-500"></i>
                                {restaurant.distance < 1000 ? restaurant.distance.toFixed(0) + ' m' : (restaurant.distance / 1000).toFixed(2) + ' km'} dari {from_venue_1 ? 'venue' : 'lokasi saya'}
                            </h3>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
