import {
    error
} from '@sveltejs/kit';
import hotel_data from '$lib/hotels.json';

/** @type {import('./$types').PageLoad} */
export function load({
    params
}) {
    const hotel = hotel_data.find(function(hotel) {
        return hotel.slug === params.slug;
    });

    if (hotel) {
        return hotel;
    }

    error(404, 'Hotel tidak ditemukan');
}
