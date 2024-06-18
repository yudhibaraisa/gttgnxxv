<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    //import './splash.css';

    onMount(function () {
        //setTimeout(function () {
            goto('/home');
        //}, 7000);
    });
</script>

<svelte:head>
    <title>Aplikasi Gelar Teknologi Tepat Guna Nusantara Provinsi NTB Tahun 2024</title>
</svelte:head>

<div id="splash"></div>
