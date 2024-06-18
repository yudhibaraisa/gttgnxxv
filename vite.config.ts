import {sveltekit} from '@sveltejs/kit/vite';
import {SvelteKitPWA} from '@vite-pwa/sveltekit';
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [sveltekit(), SvelteKitPWA(), ViteImageOptimizer()]
});
