<script>
    import { fly } from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing';
    import '../app.css';

    export let data;
</script>

{#key data.pathname}
    <div in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }} out:fly={{ easing: cubicIn, y: -10, duration: 300 }}>
        <slot />
    </div>
{/key}
