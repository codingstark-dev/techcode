<script>
  import Loading from "./../components/loading.svelte";
  let loading = false;
  let pincode;
 let jsonData = [];
  const userAction = async () => {
    loading = true;
    // StoreData.set();

    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.postalpincode.in/pincode/${pincode}`,
      {
        method: "GET",
        // body: myBody, // string or object
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).finally(() => (loading = false));
    const myJson = await response.json();
    // console.log(myJson);
    // StoreData.update(() => {
    //   return myJson;
    // });
    jsonData = myJson;
    // return loading = false;
    console.log(myJson);
  };
</script>

<style>
  .topbadge {
    padding: 20px;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
</style>

<div class="text-center topbadge">
  <h4>
    Get Pincode
    <span class="badge badge-light">New</span>
  </h4>
</div>

<div class="flex justify-center space-x-3">
  <input
    bind:value={pincode}
    type="number"
    class="bg-white focus:outline-none focus:shadow-outline border
    border-gray-300 rounded-lg py-2 px-4 block w-48 appearance-none
    leading-normal appearance-none block "
    placeholder="Enter Pin Code.." />

  {#if pincode == undefined}
    <button
      class="bg-indigo-400 hover:bg-indigo-600 focus:outline-none text-white
      font-bold py-2 px-4 rounded-full cursor-not-allowed"
      type="button"
      id="button-addon2">
      Search
    </button>
  {:else}
    <button
      class="bg-indigo-400 hover:bg-indigo-600 focus:outline-none text-white
      font-bold py-2 px-4 rounded-full "
      type="button"
      id="button-addon2"
      on:click={userAction}>
      Search
    </button>
  {/if}

</div>

{#if loading === true}
  <Loading />
{:else}
  <!-- else content here -->
{/if}

<div class="w-5/6 mx-auto">
  <div class="bg-white shadow-md rounded my-6">
    <table class="text-left w-full border-collapse">
      <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
      <thead>
        <tr>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
            text-grey-dark border-b border-grey-light">
            State
          </th>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
            text-grey-dark border-b border-grey-light">
            Branch
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">New York</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <a
              href="#"
              class="text-grey-lighter font-bold py-1 px-3 rounded text-xs
              bg-green hover:bg-green-dark">
              Edit
            </a>
            <a
              href="#"
              class="text-grey-lighter font-bold py-1 px-3 rounded text-xs
              bg-blue hover:bg-blue-dark">
              View
            </a>
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">Paris</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <a
              href="#"
              class="text-grey-lighter font-bold py-1 px-3 rounded text-xs
              bg-green hover:bg-green-dark">
              Edit
            </a>
            <a
              href="#"
              class="text-grey-lighter font-bold py-1 px-3 rounded text-xs
              bg-blue hover:bg-blue-dark">
              View
            </a>
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">London</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <a
              href="#"
              class="text-grey-lighter font-bold py-1 px-3 rounded text-xs
              bg-green hover:bg-green-dark">
              Edit
            </a>
            <a
              href="#"
              class="text-grey-lighter font-bold py-1 px-3 rounded text-xs
              bg-blue hover:bg-blue-dark">
              View
            </a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
{#each jsonData as item}
   <p>{item.Massage}</p>
{/each}