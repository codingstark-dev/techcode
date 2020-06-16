<script>
  import StoreData from "./../store.js";
  import Loading from "./../components/loading.svelte";
  import Select from "svelte-select";
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
  const changeMore = i => {
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

<div class="text-center topbadge">
  <h4>
    Get Pincode
    <span class="badge badge-light">New</span>
  </h4>
</div>
<div class="flex justify-center space-x-3">
  <input
    bind:value={pincode}
    autocomplete="on"
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
  {#each $StoreData[0].PostOffice as item, i}
    <!-- content here -->
    <div class="p-4">
      <h1>
        PinCode: {item.Pincode}, {item.Name} Post Office, {item.Block}, {item.District},
        {item.State}
      </h1>
    </div>
    <div class="w-11/12 mx-auto min-h-full ">
      <div class="bg-white shadow-md rounded ">
        <table class="text-left w-full border-collapse min-h-full">
          <thead>
            <tr>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
                text-grey-dark border-b border-grey-light">
                Post Office
              </th>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
                text-grey-dark border-b border-grey-light">
                {item.Name}
              </th>
            </tr>
          </thead>
          <!-- {#each $StoreData[0].PostOffice as item, i}
        <Select bind:value={item.Name} ></Select> -->
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">
                Post Office Status
              </td>
              <td class="py-4 px-6 border-b border-grey-light">
                {item.BranchType} ({item.DeliveryStatus})
                <!-- content here -->
                <!-- <a
                  href="https://www.google.com/search?q=+in+"
                  rel="nofollow"
                  target="_blank"
                  class="text-grey-lighter font-bold py-1 px-3 rounded text-xs
                  bg-blue hover:bg-blue-dark">
                  View
                </a> -->

              </td>
            </tr>
          </tbody>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">PinCode</td>
              <td class="py-4 px-6 border-b border-grey-light">
                {item.Pincode}
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">Town/Taluk</td>
              <td class="py-4 px-6 border-b border-grey-light">{item.Block}</td>
            </tr>
          </tbody>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">District</td>
              <td class="py-4 px-6 border-b border-grey-light">
                {item.District}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">State</td>
              <td class="py-4 px-6 border-b border-grey-light">{item.State}</td>
            </tr>
          </tbody>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">
                Postal Division
              </td>
              <td class="py-4 px-6 border-b border-grey-light">
                {item.Division}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">
                Postal Region
              </td>
              <td class="py-4 px-6 border-b border-grey-light">
                {item.Region}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">
                Postal Circle
              </td>
              <td class="py-4 px-6 border-b border-grey-light">
                {item.Circle}
              </td>
            </tr>
          </tbody>
          <!-- {/each} -->
        </table>
      </div>
    </div>
  {/each}
{/if}
