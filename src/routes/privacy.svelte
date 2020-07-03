<script>
  import Inputtext from ".././components/Inputtext.svelte";
  export let apptype = [
    "free",
    "open source",
    "freemium",
    "ad support",
    "commercial"
  ];
</script>

<div class="space-y-3">
  <Inputtext
    text={'Contact Information'}
    placeholder={'[App contact information]'} />
  <Inputtext
    text={'Personally Identifiable Information'}
    placeholder={'Personally Identifiable Information you collect (comma separated)'} />
</div>
<select>
  {#each apptype as d}
    <option >{d}</option>
  {/each}
</select>
