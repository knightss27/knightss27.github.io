<script>
    import Project from "$lib/components/Project.svelte";
</script>

<div>
<Project
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
<span slot="title">Grafana Network Weathermap</span>
<span slot="description">
  Developed the only modern network weathermap plugin for Grafana, an
  open-source monitoring platform. Approved and published as a community
  plugin with over 3000 installations. Built entirely with SVG
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
<span slot="title">CAPR</span>
<span slot="description">
  Worked as a research assistant to Professor Nathan Hill at Trinity College
  Dublin on computer assisted proto-language reconstruction (CAPR). Re-wrote,
  revised, and edited existing code for the reconstruction of Proto-Burmese,
  using Python, Flask, and React. 
</span>
</Project>
<Project
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
  { label: "Site", route: "https://www.uzbek-dictionary.org/" },
]}
>
<span slot="title">uzbek-dictionary.org</span>
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
images={[
  { src: "/img/fosshost/main_page.png" },
  { src: "/img/fosshost/news_page.png" },
  { src: "/img/fosshost/form_page.png" },
]}
links={[
  { label: "Github", route: "https://github.com/fosshostorg/fosshost.org" },
  { label: "Site", route: "https://fosshost.org" },
]}
>
<span slot="title">Fosshost</span>
<span slot="description">
  As a volunteer developer for <a
    class="styled-link"
    href="https://fosshost.org"
    target="_blank">fosshost.org</a
  >, I partially designed and completely rewrote their new website, the one
  you see when you click that link! I wrote all of the code for the the
  site, including a system that allows new applications to recieve
  confirmation emails and have their projects automatically added to
  Fosshost's project management system. Developed using Svelte and Sapper.
  If you happen to have an open source project in need of some hosting, feel
  free to apply!
</span>
</Project>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
</style>