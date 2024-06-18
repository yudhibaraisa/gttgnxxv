<!--<script>
    import lo_data from '$lib/lo.json';
</script>
-->
<svelte:head>
    <title>Agenda - GTTGN NTB 2024</title>
</svelte:head>

<div class="min-h-[100vh] lg:w-1/2 lg:border-x mx-auto bg-white">
    <header class="p-4">
        <div class="flex flex-row gap-4 items-center">
            <a href="./home">
                <i class="fi fi-rr-arrow-left"></i>
            </a>
            <h1 class="font-bold grow">Agenda</h1>
        </div>
    </header>
    <div class="p-4 flex flex-col gap-2">
        {#await import(`../../lib/images/agenda.png`) then { default: src }}
            <img class="w-full rounded-lg shadow-lg mb-4" {src} alt="Agenda" />
        {/await}
        <!--<div class="p-2 border border-blue-400 rounded-md">
            <div class="font-bold"><i>Welcome Dinner</i></div>
            <div class="text-xs text-blue-800">Selasa, 5 Maret 2024, pukul 19.00-21.30 WITA</div>
            <div class="text-xs text-blue-800">Beeginning Resto (Kolam Renang Arema)</div>
            <p class="text-xs mt-2 text-justify">Dihadiri oleh Pj. Gubernur NTB, perwakilan dari Pemprov NTB, Pj. Wali Kota Bima, dan 4 (empat) orang perwakilan dari masing-masing kabupaten/kota.</p>
        </div>
        <div class="p-2 border border-blue-400 rounded-md">
            <div class="font-bold"><i>Opening Ceremony</i></div>
            <div class="text-xs text-blue-800">Rabu, 6 Maret 2024, pukul 08.00-10.50 WITA</div>
            <div class="text-xs text-blue-800">Gedung Seni Budaya Kota Bima</div>
            <p class="text-xs mt-2 text-justify">Dihadiri oleh Pj. Gubernur NTB, perwakilan dari Pemprov NTB, Pj. Wali Kota Bima, dan seluruh perwakilan dari masing-masing kabupaten/kota.</p>
        </div>
        <div class="p-2 border border-blue-400 rounded-md">
            <div class="font-bold">Pelaksanaan Gelar TTG Provinsi NTB Tahun 2024 (Hari ke-1)</div>
            <div class="text-xs text-blue-800">Rabu, 6 Maret 2024, 11.00-17.00 WITA</div>
            <div class="text-xs text-blue-800">Gedung Seni Budaya BRIDA Kota Bima</div>
            <p class="text-xs mt-2 text-justify">Dihadiri oleh Pj. Gubernur NTB, perwakilan dari Pemprov NTB, Pj. Wali Kota Bima, seluruh perwakilan dari masing-masing kabupaten/kota, dan pengunjung acara. Dimeriahkan dengan bazar UMKM dan sembako murah.</p>
        </div>
        <div class="p-2 border border-blue-400 rounded-md">
            <div class="font-bold">Pelaksanaan Gelar TTG Provinsi NTB Tahun 2024 (Hari ke-2)</div>
            <div class="text-xs text-blue-800">Kamis, 7 Maret 2024, 09.00-14.00 WITA</div>
            <div class="text-xs text-blue-800">Gedung Seni Budaya BRIDA Kota Bima</div>
            <p class="text-xs mt-2 text-justify">Dihadiri oleh seluruh perwakilan dari masing-masing kabupaten/kota dan pengunjung acara. Dimeriahkan dengan bazar UMKM, sembako murah, dan lomba karaoke.</p>
        </div>
        <div class="p-2 border border-blue-400 rounded-md">
            <div class="font-bold">Lomba Karaoke</div>
            <div class="text-xs text-blue-800">Kamis, 7 Maret 2024, 09.00 WITA-selesai</div>
            <div class="text-xs text-blue-800">Gedung Seni Budaya BRIDA Kota Bima</div>
            <p class="text-xs mt-2 text-justify">Diikuti oleh 1 (satu) orang perwakilan dari Pemprov NTB dan dari masing-masing kabupaten/kota.</p>
        </div>
        <div class="p-2 border border-blue-400 rounded-md">
            <div class="font-bold">Rapat Koordinasi Teknis (Rakornis)</div>
            <div class="text-xs text-blue-800">Kamis, 7 Maret 2024, 09.30-10.00 WITA</div>
            <div class="text-xs text-blue-800">Ruang rapat BRIDA Kota Bima</div>
            <p class="text-xs mt-2 text-justify">Dihadiri oleh 3 (tiga) orang perwakilan Pemprov NTB dan 1 (satu) orang perwakilan dari masing-masing kabupaten/kota.</p>
        </div>
        <div class="p-2 border border-blue-400 rounded-md">
            <div class="font-bold"><i>Closing Ceremony</i></div>
            <div class="text-xs text-blue-800">Kamis, 7 Maret 2024, 14.00-15.00 WITA</div>
            <div class="text-xs text-blue-800">Gedung Seni Budaya BRIDA Kota Bima</div>
            <p class="text-xs mt-2 text-justify">Dihadiri oleh perwakilan dari Pemprov NTB, Pj. Wali Kota Bima, dan seluruh perwakilan dari masing-masing kabupaten/kota.</p>
        </div>
        <div class="p-2 border border-blue-400 rounded-md">
            <div class="font-bold">Kunjungan Lapangan</div>
            <div class="text-xs text-blue-800">Jumat, 8 Maret 2024, 09.00-12.00 WITA</div>
            <div class="text-xs text-blue-800">Pantai Lawata, Museum Asi Mbojo, Toko Oleh-oleh Mutmainah, dan Sentra Tenun Ikat Ntobo</div>
            <p class="text-xs mt-2 text-justify">Diikuti oleh 4 (empat) orang perwakilan dari Pemprov NTB, 4 (empat) orang perwakilan dari masing-masing kabupaten/kota, dan didampingi oleh LO.</p>
        </div>
        <a href="./documents/SUSUNAN ACARA GTTG NTB 2024 (rev 1).pdf" target="_blank">
            <div class="bg-orange-50 border border-orange-400 p-2 rounded-md text-center text-sm">Unduh Agenda Kegiatan Lengkap (PDF)</div>
        </a>-->
    </div>
</div>
