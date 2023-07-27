<script>
    import profile from "$lib/assets/headshot.png";
    import SvelteMarkdown from 'svelte-markdown';
    import about from "$lib/pages/about.md?raw";
</script>

<div>
    <img alt="headshot" src={profile} />
    <h3>about me</h3>
    <p><SvelteMarkdown source={about} isInline /></p>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 800px;
    }
    img {
        width: 400px;
        max-width: 50%;
        border-radius: 50%;
    }
    h3 {
        font-weight: 500;
    }
    p {

    }
</style>