<script>
  import Project from "$lib/components/Project.svelte";
</script>

<div>
  <Project
    title="Grafana Network Weathermap"
    images={[
      { src: "/img/nw/example_01.png" },
      { src: "/img/nw/example_02.png" },
      { src: "/img/nw/store_page.png" },
    ]}
    links={[
      {
        label: "Github",
        route: "https://github.com/knightss27/grafana-network-weathermap",
      },
      {
        label: "Grafana",
        route:
          "https://grafana.com/grafana/plugins/knightss27-weathermap-panel/",
      },
    ]}
  >
    <span slot="description">
      Developed the only modern network weathermap plugin for Grafana, an
      open-source monitoring and observability platform. Approved and published 
      as a community plugin with over 90k downloads. Built entirely with SVG
      transformations in React, inspired by the well known, original
      <a
        class="styled-link"
        href="https://network-weathermap.com/"
        target="_blank"
        >PHP Network Weathermap.
      </a>
    </span>
  </Project>
  <Project
    title="CAPR"
    images={[
      { src: "/img/capr/capr_0.png" },
      { src: "/img/capr/capr_1.png" },
      { src: "/img/capr/capr_2.png" },
    ]}
    links={[
      {
        label: "Github",
        route: "https://github.com/knightss27/capr",
      },
    ]}
  >
    <span slot="description">
      Worked as a research assistant to Professor Nathan Hill at Trinity College
      Dublin on computer assisted proto-language reconstruction (CAPR).
      Re-wrote, revised, and edited existing code for the reconstruction of
      Proto-Burmese, using Python, Flask, and React. A paper on this work will
      hopefully soon be published in the journal Diachronica.
    </span>
  </Project>
  <Project
    title="uzbek-dictionary.org"
    images={[
      { src: "/img/uzbek-dictionary/fuzzy_search.png" },
      { src: "/img/uzbek-dictionary/example_response.png" },
      { src: "/img/uzbek-dictionary/cyr_fuzzy_search.png" },
    ]}
    links={[
      {
        label: "Github",
        route: "https://github.com/knightss27/uzbek-english-dictionary",
      },
      { label: "Site", route: "https://uzbek-dictionary.vercel.app/" },
    ]}
  >
    <span slot="description">
      Developed an online resource to help Uzbek language learners (and Uzbek
      English learners). One of few (if not the only) existing online Uzbek
      dictionary to allow Cyrillic searching and general fuzzy searching
      abilities. Translations are taken from the parsed PDFs of <a
        class="styled-link"
        href="https://github.com/Herve-Guerin/uzbek-glossary"
        target="_blank">Herve Guerin's Uzbek Glossary</a
      >, as well as results from
      <a
        class="styled-link"
        href="https://ctild.indiana.edu/Main/Uzbek-EnglishDictionary"
        target="_blank">CTILD's Uzbek-English Dictionary</a
      >. Built with Svelte / Sapper and MongoDB.
    </span>
  </Project>
  <Project
    title="Fosshost.org"
    images={[
      { src: "/img/fosshost/main_page.png" },
      { src: "/img/fosshost/news_page.png" },
      { src: "/img/fosshost/form_page.png" },
    ]}
    links={[
      { label: "Github", route: "https://github.com/fosshostorg/fosshost.org" },
    ]}
  >
    <span slot="description">
      As a volunteer developer for fosshost.org (unfortunately now defunct), I partially designed and completely rewrote their original website.
      I wrote all of the code for the the
      site, including a system that allowed new applications to recieve
      confirmation emails and have their projects automatically added to
      Fosshost's project management system. Developed using Svelte and Sapper.
    </span>
  </Project>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
  ul {
    align-self: baseline;
    margin: 1rem;
  }
</style>
