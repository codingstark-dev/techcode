<script>
  import Inputtext from ".././components/Inputtext.svelte";
  export let apptype = [
    "free",
    "open source",
    "freemium",
    "ad support",
    "commercial"
  ];
  let selected = "dd";
</script>

<div class="space-y-3">
  <Inputtext
    text={'Contact Information'}
    placeholder={'[App contact information]'} />
  <Inputtext
    text={'Personally Identifiable Information'}
    placeholder={'Personally Identifiable Information you collect (comma separated)'} />
</div>
<br />
<div class="space-y-3">
  <p class="pl-1 font-semibold">App Type</p>
  <select
    class="bg-white focus:outline-none border border-gray-300 rounded-lg py-2
    px-4 block w-auto appearance-none leading-normal shadow-sm"
    value={selected}
    on:change={a => (selected = a)}>
    {#each apptype as d}
      <option value={d}>{d}</option>
    {/each}
  </select>
  <p class="pl-1 font-semibold">App Type</p>
  <select
    class="bg-white focus:outline-none border border-gray-300 rounded-lg py-2
    px-4 block w-auto appearance-none leading-normal shadow-sm"
    value={selected}
    on:change={a => (selected = a)}>
    {#each apptype as d}
      <option value={d}>{d}</option>
    {/each}
  </select>
</div>
