<script>
  import StoreData from "./../store.js";
  import Loading from "./../components/loading.svelte";
  import { grid } from "./../grid.js";
  let loading = false;
  let pincode;
  let moreData = false;
  let data = [];
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
    StoreData.update(() => {
      return myJson;
    });
    // $StoreData[0].PostOffice.forEach(element => {
    //   data = [element.Name, element.Block, ...data];
    // });
    // return loading = false;
    // console.log(data);
    console.log($StoreData[0]);
  };
  const changeMore = (i) => {
    moreData == false ? (moreData = true) : (moreData = false);
    console.log($StoreData[0].PostOffice[i]);
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

<svelte:head>
  <link
    href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css"
    rel="stylesheet" />
</svelte:head>
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
{/if}
{#if $StoreData !== undefined}
  <div class="w-5/6 mx-auto min-h-full pt-8">
    <div class="bg-white shadow-md rounded ">
      <table class="text-left w-full border-collapse min-h-full">
        <thead>
          <tr>
            <th
              class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
              text-grey-dark border-b border-grey-light">
              City
            </th>
            <th
              class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
              text-grey-dark border-b border-grey-light">
              Detail
            </th>
          </tr>
        </thead>
        {#each $StoreData[0].PostOffice as item, i}
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">{item.Name}</td>
              <td class="py-4 px-6 border-b border-grey-light">
                <button on:click={()=>changeMore(i)}>Know More</button>
              {#if moreData == true}
                 <!-- content here -->  <a
                  href="https://www.google.com/search?q={item.Name}+in+{item.Circle}"
                  rel="nofollow"
                  target="_blank"
                  class="text-grey-lighter font-bold py-1 px-3 rounded text-xs
                  bg-blue hover:bg-blue-dark">
                  View
                </a>
              {/if}
              
              </td>
            </tr>
          </tbody>
        {/each}
      </table>
    </div>
  </div>

  <!-- <div use:grid={data} /> -->
{/if}
