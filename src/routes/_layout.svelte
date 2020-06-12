<script>
  import Footer from "./../components/footer.svelte";
  import Header from "./../components/header.svelte";
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Nav from "../components/Nav.svelte";

  // export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    /* background-color: white; */
    padding: 1em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>


<!-- <Nav {segment}/> -->

<Header />
<div class="bg-indigo-500 w-auto h-64 rounded-b-md">

  <main class="pt-3">
    <slot />
  </main>
</div>

<div class="h-64" />
<div class="h-20" />
<Footer />
