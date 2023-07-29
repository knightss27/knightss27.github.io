<script>
    import { fade } from 'svelte/transition';

    export let data;

    let scrollY = 0;
</script>

<svelte:window bind:scrollY={scrollY} />

{#if data.pathname !== "/"}
<nav class:shadow={scrollY !== 0}>
    <!-- <a class="title" href="/">seth knights</a> -->
    <ul>
        <li class:active={data.pathname === "/about"}><a href="/about">me</a></li>
        <li class:active={data.pathname === "/projects"} class="middle"><a href="/projects">projects</a></li>
        <li class:active={data.pathname === "/cv"}><a href="/cv">cv</a></li>
    </ul>
</nav>
{/if}
{#key data.pathname}
<main
    in:fade={{ duration: 300, delay: 400 }}
    out:fade={{ duration: 300 }}
    class:pad={data.pathname !== "/"}
>
    <slot />
</main>
{/key}

<style>
    main {
        width: 800px;
        max-width: 90%;
        margin: 0 auto;
        min-height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav {
        position: sticky;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background: white;
        transition: ease box-shadow 0.25s;
    }
    nav.shadow {
        box-shadow: 0px 0px 15px #ddd;
    }
    ul {
        list-style: none;
        display: flex;
        margin: 1rem;
        padding: 0px;
    }
    li {
        width: 65px;
        text-align: center;
    }
    /* a.title {
        display: flex;
        justify-self: flex-start !important;
        width: 100px;
        margin: 1rem 1rem;
    } */
    li.active a {
        border-bottom: 1px solid black;
    }
    li.middle {
        padding: 0rem 2rem;
    }
    a {
        color: black;
        text-decoration: none;
    }

    .pad {
        margin-top: 1rem;
        margin-bottom: 5rem;
    }
</style>