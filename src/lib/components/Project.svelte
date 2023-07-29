<script lang="ts">
    import Images from "$lib/components/Images/Images.svelte";
  
    export let images: { src: string }[] = [];
    export let links: { label: string; route: string }[] = [];
    export let title: string;
  </script>
  
  <div>
    <h2 id={title}>
      {title}
  
      <p class="links">
        {#each links as link}
          <a class="title-link" target="_blank" href={link.route}>{link.label}</a
          >
        {/each}
      </p>
    </h2>
    <p>
      <slot name="description" />
    </p>
    <span>
      <Images numCols {images} gutter={2} />
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
      margin-bottom: 1rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #ccc;
    }
    span {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      padding-top: 1rem;
    }
    div :global(.svelte-images-gallery img) {
      transition: ease all 0.3s !important;
      max-width: 255px !important;
    }
    div :global(img):hover {
      filter: grayscale(0.5);
      opacity: 0.5;
    }
    p.links {
      font-size: 15px;
      display: flex;
      justify-content: flex-end;
      margin: 0;
    }
    a {
        /* text-align: ; */
      padding: 0.75rem 1rem 0.2rem;
      /* color: #779b15; */
      text-decoration: none !important;
    }
    a.title-link {
      color: #555;
      border-radius: 0.5rem;
      margin: auto 0.25rem;
      padding: 0.25rem 1rem;
      /* border: 1px solid #ccc; */
      box-shadow: 0px 0px 2px #ccc;
      transition: ease box-shadow 0.15s, ease color 0.1s;
    }

    a.title-link:hover {
      color: black;
      box-shadow: 2px 2px 10px #ccc;
    }
  </style>
  