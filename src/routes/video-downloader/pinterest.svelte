<script>
  import Decs from "../../shared/Decs.svelte";

  import StoreData from "../../store.js";
  import Loading from "../../components/loading.svelte";
  import { onMount } from "svelte";

  const apiUrl = "krd6o6BAmZovoVhIe3RYjBh1mVos3tsxwWsTxdyIPE8a7RbwxZ";
  const urlss =
    "https://cors-anywhere.herokuapp.com/http://keepsaveit.com/api/?api_key=";
  let pinurl = `https://pin.it/1y4y6ET`;
  let success = "success";
  let loading = false;

  const userAction = async () => {
    loading = true;
    StoreData.set();
    const response = await fetch(`${urlss}${apiUrl}&url=${pinurl}`, {
      method: "GET",
      // body: myBody, // string or object
      headers: {
        "Content-Type": "application/json"
      }
    }).finally(() => (loading = false));
    const myJson = await response.json();
    console.log(myJson);
    StoreData.update(() => {
      return myJson;
    });

    // return loading = false;
    // console.log($StoreData);
  };

  // onMount(userAction);
</script>

<style>
  .error {
    text-align: center;
    font-size: 15px;
    color: red;
  }
  .lol {
    padding-bottom: 10px;
  }
</style>

<!-- <div class="link pt-3 ">
  <div class="input-group mb-3 w-auto px-md-5 ">
    <input type="text" class="form-control" aria-describedby="button-addon2" />
    <div class="input-group-append">
      <button
        class="btn btn-outline-danger"
        type="button"
        id="button-addon2"
        on:click={userAction}>
        Get
      </button>
    </div>
  </div>
</div> -->
<div class="flex pt-3">
  <input
    class="bg-white focus:outline-none focus:shadow-outline border
    border-gray-300 rounded-md py-2 px-4 block w-full appearance-none
    leading-normal"
    type="text"
    placeholder="Paster Your Link"
    aria-label="Paster Your Link"
    bind:value={pinurl} />
  <button
    class="bg-white hover:bg-indigo-500 text-gray-800 font-semibold py-2 px-4
    border border-indigo-500 rounded shadow hover:text-white"
    on:click={userAction}>
    Get
  </button>
</div>
<br />
<!-- <div class="text-center">
  <h1>wait</h1>
</div> -->

{#if loading === true}
  <Loading />
{:else if $StoreData === undefined}
  <Decs />
{:else if $StoreData.status === false || $StoreData.code == 112 || $StoreData.code == 405 || $StoreData.code == 404 || $StoreData.code == 113 || $StoreData.code == 212}
  <h1 class="error">{$StoreData.msg}</h1>
{:else}
  {#each $StoreData['response']['links'] as item}
    {#if item.ext == 'mp3' || (item.ext == 'mp4' && item.size != '0 bytes')}
      <div class="w-11/12 mx-auto min-h-full">
        <div
          class="bg-white shadow-md rounded text-center "
          style="width: 100%;">
          <div class="text-center">
            <video width="350" height="300" controls>
              <source src={item['url']} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h5 class=" text-center font-semibold pt-3 text-lg">
            {$StoreData['response']['title']}
          </h5>

          <table class="text-left w-full border-collapse min-h-full">
            <thead>
              <tr>
                <th
                  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
                  text-grey-dark border-b border-grey-light">
                  Format
                </th>
                <th
                  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
                  text-grey-dark border-b border-grey-light">
                  Resolution
                </th>
                <th
                  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
                  text-grey-dark border-b border-grey-light">
                  Size
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
                  text-grey-dark border-b border-grey-light">
                  {item.ext}
                </td>
                <td
                  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
                  text-grey-dark border-b border-grey-light">
                  {item.resolution}
                </td>
                <td
                  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm
                  text-grey-dark border-b border-grey-light">
                  {item.size}
                </td>
              </tr>
            </tbody>
          </table>
          <a href={item['url']} target="_blank">
            <button
              type="button"
              class="bg-white hover:bg-indigo-500 text-gray-800 font-semibold
              my-2 py-2 px-4 border border-indigo-500 rounded shadow hover:text-white">
              Download
            </button>
          </a>

        </div>
      </div>
    {/if}

    <!-- <div class=" embed-responsive-4by3 shadow-sm">
        <video width="350" height="300" controls>
          <source src={item['url']} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <a href={item['url']} download>
        <button type="button" class="btn btn-success">Download</button>
      </a> -->
  {/each}
{/if}
