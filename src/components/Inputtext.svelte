<script>
  export let placeholder;
  export let text;
</script>

<style>

</style>

<p class="pl-1 font-semibold">{text}</p>
<input
  class="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4
  block w-full appearance-none leading-normal shadow-sm "
  type="text"
  {placeholder} />
