import {
    error
} from '@sveltejs/kit';
import destination_data from '$lib/destinations.json';

/** @type {import('./$types').PageLoad} */
export function load({
    params
}) {
    const destination = destination_data.find(function(destination) {
        return destination.slug === params.slug;
    });

    if (destination) {
        return destination;
    }

    error(404, 'Destinasi wisata tidak ditemukan');
}
