<script>
    import video_1_data from '$lib/videos_1.json';
    import video_2_data from '$lib/videos_2.json';
    import video_3_data from '$lib/videos_3.json';
</script>

<svelte:head>
    <title>Video - GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Video</h1>
        </div>
    </header>
    <div class="p-4 flex flex-col gap-4">
        <!--<div>
            <h2 class="font-bold">Kota Bima: Selayang Pandang</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {#each video_1_data as video}
                    <a href={video.url} target="_blank">
                        <div class="grid grid-cols-5 gap-2">
                            {#await import(`../../lib/images/video/${video.thumbnail}.webp`) then { default: src }}
                                <img class="col-span-2 w-full rounded-lg" {src} alt={video.title} />
                            {/await}
                            <div class="col-span-3">
                                <h3 class="text-sm">
                                    {video.title}
                                </h3>
                                <div class="text-xs text-gray-600 mt-1">
                                    <i class="fi fi-brands-youtube text-red-500"></i> Tonton di YouTube
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>-->
        <div>
            <h2 class="font-bold">Dinas PMPD Dukcapil NTB</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {#each video_2_data as video}
                    <a href={video.url} target="_blank">
                        <div class="grid grid-cols-5 gap-2">
                            {#await import(`../../lib/images/video/${video.thumbnail}.webp`) then { default: src }}
                                <img class="col-span-2 w-full rounded-lg" {src} alt={video.title} />
                            {/await}
                            <div class="col-span-3">
                                <h3 class="text-sm">
                                    {video.title}
                                </h3>
                                <div class="text-xs text-gray-600 mt-1">
                                    <i class="fi fi-brands-youtube text-red-500"></i> Tonton di YouTube
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        <!--<div>
            <h2 class="font-bold">BRIDA Kota Bima</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {#each video_3_data as video}
                    <a href={video.url} target="_blank">
                        <div class="grid grid-cols-5 gap-2">
                            {#await import(`../../lib/images/video/${video.thumbnail}.webp`) then { default: src }}
                                <img class="col-span-2 w-full rounded-lg" {src} alt={video.title} />
                            {/await}
                            <div class="col-span-3">
                                <h3 class="text-sm">
                                    {video.title}
                                </h3>
                                <div class="text-xs text-gray-600 mt-1">
                                    <i class="fi fi-brands-youtube text-red-500"></i> Tonton di YouTube
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>-->
    </div>
</div>
