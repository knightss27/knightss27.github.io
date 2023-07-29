<script>
    import profile from "$lib/assets/headshot.webp";
    import SvelteMarkdown from 'svelte-markdown';
    import about from "$lib/pages/about.md?raw";
</script>

<div>
    <picture>
        <source media="(max-width: 799px)" srcset={profile} width={150} height={150}/>
        <source media="(min-width: 800px)" srcset={profile} width={300} height={300} />
        <img src={profile} alt="Puppy with balloons" />
      </picture>
    <h2>about me</h2>
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
        border-radius: 50%;
    }
    h2 {
        font-weight: 500;
    }
    p {

    }
</style>