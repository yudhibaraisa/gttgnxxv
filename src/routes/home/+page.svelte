<script>
    import venue_1_data from '$lib/venue_1.json';
    import venue_2_data from '$lib/venue_2.json';
    import venue_3_data from '$lib/venue_3.json';
    import venue_4_data from '$lib/venue_4.json';
</script>

<svelte:head>
    <title>Gelar Teknologi Tepat Guna Nusantara Provinsi NTB Tahun 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-2 items-center">
            <h1 class="font-bold grow">SELAMAT DATANG</h1>
        </div>
    </header>
    <div class="p-4">
        {#await import(`../../lib/images/hero.png`) then { default: src }}
            <img class="w-full rounded-lg shadow-lg mb-4" {src} alt="Hero" />
        {/await}
        <div class="min-h-[5vh] flex flex-row gap-2 items-center">
            <h1 class="font-bold grow">LOKASI - LOKASI KEGIATAN</h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <a href={venue_1_data.google_maps} target="_blank">
                <div class="flex flex-row items-center bg-green-100 border border-green-300 rounded-lg shadow-sm">
                    {#await import(`../../lib/images/ic.png`) then { default: src }}
                        <img class="w-full rounded-lg" {src} alt="Islamic Center" />
                    {/await}
                </div>
            </a>
            <a href={venue_3_data.google_maps} target="_blank">
                <div class="flex flex-row items-center bg-green-100 border border-green-300 rounded-lg shadow-sm">
                    {#await import(`../../lib/images/dapoer_sasak.png`) then { default: src }}
                        <img class="w-full rounded-lg" {src} alt="Dapoer Sasak" />
                    {/await}
                </div>
            </a>
            <a href={venue_2_data.google_maps} target="_blank">
                <div class="flex flex-row items-center bg-green-100 border border-green-300 rounded-lg shadow-sm">
                    {#await import(`../../lib/images/bank_ntb.png`) then { default: src }}
                        <img class="w-full rounded-lg" {src} alt="Bank NTB" />
                    {/await}
                </div>
            </a>
            <a href={venue_4_data.google_maps} target="_blank">
                <div class="flex flex-row items-center bg-green-100 border border-green-300 rounded-lg shadow-sm">
                    {#await import(`../../lib/images/teras_udayana.png`) then { default: src }}
                        <img class="w-full rounded-lg" {src} alt="Teras Udayana" />
                    {/await}
                </div>
            </a>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="p-2">
                <a href="./agenda">
                    <div class="text-center">
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-ss-calendar text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">AGENDA</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./lo">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-blue-200 blur z-0"></span>
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-300 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-sr-users text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">LO</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./stand">
                    <div class="text-center">
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-ss-apps-add text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">STAND</span>
                        </div>
                    </div>
                </a>
                <!--<a href="./documents/DENAH STAND.pdf">
                    <div class="text-center">
                        <span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-blue-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-blue-300 blur z-10"></span>
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-sr-rectangles-mixed text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-teal-500 text-white px-1">
                            <span class="text-xs">Stand</span>
                        </div>
                    </div>
                </a>-->
            </div>
            <div class="p-2">
                <a href="./video">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-red-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-red-300 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-ss-clapperboard-play text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">VIDEO</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./hotel">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-purple-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-blue-200 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-ss-building text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">HOTEL</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./restaurant">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-green-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-blue-200 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-sr-hamburger-soda text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">RESTORAN</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./destination">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-blue-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-blue-200 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-sr-umbrella-beach text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">WISATA</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./transport">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-blue-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-green-200 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-bs-car text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">TRANSPORT</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./souvenir">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-green-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-blue-200 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-sr-shopping-cart text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">OLEH - OLEH</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./atm">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-blue-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-red-200 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-sr-wallet text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">ATM</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./gas">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-red-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-blue-200 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-ss-gas-pump-alt text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">SPBU</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="p-2">
                <a href="./equipment">
                    <div class="text-center">
                        <!--<span class="absolute w-[40px] h-[40px] -ml-4 mt-2 rounded-full bg-orange-200 blur z-0"></span>
                        <span class="absolute w-[30px] h-[30px] -ml-6 rounded-full bg-blue-200 blur z-10"></span>-->
                        <span class="absolute w-[50px] h-[50px] -ml-6 rounded-full bg-green-200 blur z-10"></span>
                        <div class="p-2">
                            <i class="relative fi fi-br-tools text-3xl z-20"></i>
                        </div>
                        <div class="mt-4 rounded-full bg-green-700 text-white px-1">
                            <span class="text-xs">PERLENGKAPAN</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="mt-4">
            {#await import(`../../lib/images/sponsors.png`) then { default: src }}
                <img class="w-full" {src} alt="Badges" />
            {/await}
        </div>
    </div>
</div>
