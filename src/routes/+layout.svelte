<script>
import { fade } from 'svelte/transition'

export let data
</script>

{#if data.pathname !== "/"}
<nav>
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
>
    <slot />
</main>
{/key}

<style>
    main {
        max-width: 800px;
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
        padding-top: 1rem;
        padding-bottom: 2rem;
        background: white;
    }
    ul {
        list-style: none;
        display: flex;
        margin: 1rem auto;
        padding: 0px;
        
    }
    li {
        width: 65px;
        text-align: center;
    }
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
</style>