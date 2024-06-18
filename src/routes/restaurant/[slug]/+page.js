import {
    error
} from '@sveltejs/kit';
import restaurant_data from '$lib/restaurants.json';

/** @type {import('./$types').PageLoad} */
export function load({
    params
}) {
    const restaurant = restaurant_data.find(function(restaurant) {
        return restaurant.slug === params.slug;
    });

    if (restaurant) {
        return restaurant;
    }

    error(404, 'Restoran tidak ditemukan');
}
