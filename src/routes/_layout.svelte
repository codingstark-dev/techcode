<script>
  import Footer from "./../components/footer.svelte";
  import Header from "./../components/header.svelte";
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Nav from "../components/Nav.svelte";
  import { stores } from '@sapper/app';
  const { page } = stores();
  $: {
    if (typeof gtag !== "undefined"){
      gtag("config", "UA-130921177-1", {
        page_path: $page.path
      });
    }
  }
  // export let segment;
</script>

<style>
  /* main {
    max-width: 56em;
    /* background-color: white; */
    /* padding: 1em;
    margin: 0 auto;
    box-sizing: border-box; */
   
  /* }  */
</style>

<!-- <Nav {segment}/> -->

<Header />
<!-- <div class="bg-indigo-500 w-auto rounded-b-md"> -->
  <main class="pt-3 p-4 max-h-full min-h-screen">

    <slot />
  </main>
<!-- </div> -->

<!-- <div class="h-64" /> -->
<!-- <div class="max-h-full" /> -->
<Footer />
