<script lang="ts">
  export let images: {src: string}[] = [];
  import { Images } from "svelte-images";
</script>

<div>
  <h2>
    <slot name="title"></slot>
  </h2>
  <p>
    <slot name="description"></slot>
  </p>
  <span>
    <Images {images} gutter={2} />
  </span>
</div>

<style>
  h2 {
    font-weight: 400;
    margin-bottom: .25rem;
    text-decoration: underline;
  }
  div {
    padding-bottom: 2rem;
  }
  span {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-top: 1rem;
  }
  div :global(img) {
    transition: ease all 0.3s !important;
  }
  div :global(img):hover {
    filter: grayscale(0.5);
    opacity: 0.5;
  }
</style>

