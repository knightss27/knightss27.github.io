<script lang="ts">
  import { Images } from "svelte-images";

  export let images: { src: string }[] = [];
  export let links: { label: string; route: string }[] = [];
</script>

<div>
  <h2>
    <slot name="title" />

    <p class="links">
      {#each links as link}
        <a class="styled-link" target="_blank" href={link.route}>{link.label}</a
        >
      {/each}
    </p>
  </h2>
  <p>
    <slot name="description" />
  </p>
  <span>
    <Images {images} gutter={2} />
  </span>
</div>

<style>
  h2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-weight: 400;
    margin-bottom: 0.25rem;
  }
  div {
    padding-bottom: 3rem;
  }
  span {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-top: 1rem;
  }
  div :global(.svelte-images-gallery img) {
    transition: ease all 0.3s !important;
    max-width: 237px !important;
  }
  div :global(img):hover {
    filter: grayscale(0.5);
    opacity: 0.5;
  }
  p.links {
    font-size: 15px;
    display: flex;
    justify-content: flex-end;
  }
  a {
    padding: 0.75rem 1rem 0.2rem;
    color: #779b15;
    text-decoration: none !important;
  }
  a::after {
    background-color: #779b15 !important;
  }
</style>
