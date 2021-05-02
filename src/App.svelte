<script>
  import Header from "./Header.svelte";
  import Project from "./Project.svelte";
</script>

<main>
  <h1>Hi there, I'm</h1>
  <Header />
  <p>
    Currently I'm high school junior interested in web development and computer
    graphics.
  </p>
  <p>
    Essentially, I love writing visual code. I write a lot of stuff for the web
    using Svelte or React, but have also written quite a bit in Java (both with
    Processing and for school classes), and less so in Python and Go.
  </p>
  <p>
    Outside of writing code, I play bass and lead both the Mock Trial and Speech
    & Debate teams at my school.
  </p>
  <br />
  <h1>Projects</h1>
  <Project
    images={[
      { src: "/img/fosshost/main_page.png" },
      { src: "/img/fosshost/news_page.png" },
      { src: "/img/fosshost/form_page.png" },
    ]}
    links={[
      { label: "Github", route: "https://github.com/fosshostorg/fosshost.org" },
      {
        label: "Figma",
        route:
          "https://www.figma.com/file/5hgu89uLaHeIis3SqS2MvM/Fosshost-Website-Update",
      },
      { label: "Fosshost", route: "https://fosshost.org" },
    ]}
  >
    <span slot="title">Fosshost</span>
    <span slot="description">
      As a volunteer developer for <a
        class="styled-link"
        href="https://fosshost.org"
        target="_blank">fosshost.org</a
      >, I partially designed and completely rewrote their new website. The site
      should be in production soon, but for now you can view the most up to date
      demo
      <a
        class="styled-link"
        href="https://admiring-benz-a89dec.netlify.app/"
        target="_blank">here</a
      >. Developed using Svelte and Sapper.
    </span>
  </Project>
  <Project
    images={[
      { src: "/img/aarch64/create_page.png" },
      { src: "/img/aarch64/project_page.png" },
      { src: "/img/aarch64/vm_page.png" },
    ]}
    links={[
      { label: "Github", route: "https://github.com/fosshostorg/aarch64" },
      { label: "Site", route: "https://console.aarch64.com/" },
      {
        label: "Figma",
        route: "https://www.figma.com/file/j1c6ooPk8ja8jsyqqpqJ6r/A64-Dash",
      },
    ]}
  >
    <span slot="title">AArch64 Console (Fosshost)</span>
    <span slot="description">
      Along with developing a new site, I both designed and wrote the front-end
      of Fosshost's server management dashboard. The design was based off of
      both mainting brand consistency with <a
        class="styled-link"
        href="https://aarch64.com"
        target="_blank">aarch64.com</a
      >
      (which I did not have a part in), as well as providing an interface that was
      similar enough to that of cloud providers like
      <a
        class="styled-link"
        href="https://www.digitalocean.com/"
        target="_blank">DigitalOcean</a
      > that users could easily transfer prior experience. Developed using Svelte.
    </span>
  </Project>
  <Project
    images={[
      { src: "/img/ctrace/main_page.png" },
      { src: "/img/ctrace/checked_in.png" },
      { src: "/img/ctrace/article.png" },
    ]}
    links={[{ label: "Github", route: "https://github.com/natesales/ctrace" }]}
  >
    <span slot="title">cTrace</span>
    <span slot="description">
      Both myself and my close friend (and classmate) <a
        class="styled-link"
        href="https://natesales.net"
        target="_blank">Nate Sales</a
      >
      were approached by our school's administration during the summer of 2020 to
      design and build a COVID-19 contact tracing app. Due to state and county restrictions,
      schools in Oregon were required to keep track of the locations of both faculty
      and students at school. As such, we built a web app that allowed for simple
      check-ins and check-outs of different locations on our schools's campus. Although
      recommendations were altered before our school returned to any in-person learning,
      cTrace was used by faculty and staff from November until March to track their
      locations on campus. You can read more about it
      <a
        class="styled-link"
        href="https://www.einpresswire.com/article/532863001/catlin-gabel-students-invent-app-to-track-on-campus-movement-during-covid-19"
        target="_blank">here</a
      >. Developed using React and Next.js.
    </span>
  </Project>
</main>

<style>
  main {
    width: 100%;
    max-width: 800px;
    padding: 2rem;
    margin: 0 auto;
  }

  h1 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
</style>
