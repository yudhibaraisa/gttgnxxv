import {
    error
} from '@sveltejs/kit';
import souvenir_data from '$lib/souvenir.json';

/** @type {import('./$types').PageLoad} */
export function load({
    params
}) {
    const souvenir = souvenir_data.find(function(souvenir) {
        return souvenir.slug === params.slug;
    });

    if (souvenir) {
        return souvenir;
    }

    error(404, 'Pusat oleh-oleh tidak ditemukan');
}
