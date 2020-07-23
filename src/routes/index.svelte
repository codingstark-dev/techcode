<script context="module">
  import Home from "./../shared/home.svelte";
  export function preload({ params, query }) {
    return this.fetch("sitemap.xml");
  }
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>TechCode.in</title>
</svelte:head>

<Home />

