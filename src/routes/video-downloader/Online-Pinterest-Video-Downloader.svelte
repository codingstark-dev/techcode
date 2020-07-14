<script>
  import Decs from "../../shared/Decs.svelte";

  import StoreData from "../../store.js";
  import Loading from "../../components/loading.svelte";
  import { onMount } from "svelte";

  const apiUrl = "krd6o6BAmZovoVhIe3RYjBh1mVos3tsxwWsTxdyIPE8a7RbwxZ";
  const urlss =
    "https://cors-anywhere.herokuapp.com/http://keepsaveit.com/api/?api_key=";
  let pinurl;
  let success = "success";
  let loading = false;

  const userAction = async () => {
    loading = true;
    StoreData.set();
    const response = await fetch(`${urlss}${apiUrl}&url=${pinurl}`, {
      method: "GET",
      // body: myBody, // string or object
      headers: {
        "Content-Type": "application/json",
      },
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
 
  h1 {
    @apply font-semibold text-xl py-4;
  }
  h2 {
    @apply font-semibold text-lg py-2;
  }
  p {
    @apply p-2;
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
<h1 class="text-center">Online Pinterest Video Downloader</h1>
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
  <div />
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
              my-2 py-2 px-4 border border-indigo-500 rounded shadow
              hover:text-white">
              Download
            </button>
          </a>

        </div>
      </div>
      <br />
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
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  We all know Pinterest is a trending social media in the
  <span
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
    font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch:
    inherit; font-size: inherit; line-height: inherit; font-family: inherit;
    vertical-align: baseline;">
    USA, Brazil, India
  </span>
  , etc.
  <br style="box-sizing: border-box;" />
  Users spend time on Pinterest surfing videos and amazing images.
</p>
<h2
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent:
  0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px;
  -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);
  text-decoration-style: initial; text-decoration-color: initial; box-sizing:
  border-box; margin: 0.83em 0px 0.5em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight:
  500; font-stretch: inherit; font-size: 1.953em; line-height: 1.35;
  font-family: Poppins, Helvetica, Arial, sans-serif; vertical-align: baseline;
  color: rgb(0, 0, 0);">
  Online Pinterest Video Downloader
</h2>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  <br style="box-sizing: border-box;" />
  Many users are wondering
  <span
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
    font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch:
    inherit; font-size: inherit; line-height: inherit; font-family: inherit;
    vertical-align: baseline;">
    &nbsp;how do I download a video from Pinterest?
  </span>
  <br style="box-sizing: border-box;" />
  If you are one of them then the answer is TECHCODE (Online Pinterest Video
  Downloader).
  <br style="box-sizing: border-box;" />
  <br style="box-sizing: border-box;" />
  You have to just simply copy and paste the link URL that you would like to
  download.
  <br style="box-sizing: border-box;" />
  So to save the Pinterest videos from the Pinterest app or website we have a
  premium tool called
  <span
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
    font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch:
    inherit; font-size: inherit; line-height: inherit; font-family: inherit;
    vertical-align: baseline;">
    Online Pinterest Video Downloader
  </span>
  which is absolutely free.
  <br style="box-sizing: border-box;" />
  In this tool, we have an option to specify the format quality of the Pinterest
  videos.
</p>
<h3
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent:
  0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px;
  -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);
  text-decoration-style: initial; text-decoration-color: initial; box-sizing:
  border-box; margin: 1em 0px 0.5em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight:
  500; font-stretch: inherit; font-size: 1.563em; line-height: 1.4; font-family:
  Poppins, Helvetica, Arial, sans-serif; vertical-align: baseline; color: rgb(0,
  0, 0);">
  How can I download Pinterest videos?
</h3>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  It is very easy to download the videos from Pinterest from this &ndash;
  <br style="box-sizing: border-box;" />
  STEP-BY-STEP GUIDE TO DOWNLOAD VIDEOS FROM&nbsp;
  <a
    data-saferedirecturl="https://www.google.com/url?q=http://PINTEREST.COM&source=gmail&ust=1594815781580000&usg=AFQjCNEPCzqfrdsThOZakdmU6R0ULlS7dg"
    href="http://pinterest.com/"
    style="color: rgb(17, 85, 204);"
    target="_blank">
    PINTEREST.COM
  </a>
  !!!
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Since there is no direct way to download videos from Pinterest directly, so
  you can find other ways to save Pinterest videos.
  <br style="box-sizing: border-box;" />
  Simply follow these steps for downloading Pinterest Videos in a few click,
</p>
<ul
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 2.14286em; border:
  0px; font-variant-numeric: inherit; font-variant-east-asian: inherit;
  font-stretch: inherit; font-size: 16px; line-height: inherit; font-family:
  Poppins, Helvetica, Arial, sans-serif; vertical-align: baseline; list-style:
  square; color: rgb(51, 51, 51);">
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    Go to Pinterest.com and select the video you like to download.
  </li>
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    Copy the URL of the video that you want to download.
  </li>
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    Open a web browser and search for Techcode
  </li>
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    Then go to Download Videos
  </li>
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    Select the Pinterest downloader
  </li>
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    Paste the URL you copied into the search field
  </li>
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    After that, press &ldquo;GET&rdquo; &ndash; and your video is ready now!
  </li>
</ul>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  You can download an unlimited number of Pinterest videos in a few seconds by
  just copy-paste your URL
  <br style="box-sizing: border-box;" />
  Check this instruction to facilitate you the process of video download from
  Pinterest.
</p>
<h3
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent:
  0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px;
  -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);
  text-decoration-style: initial; text-decoration-color: initial; box-sizing:
  border-box; margin: 1em 0px 0.5em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight:
  500; font-stretch: inherit; font-size: 1.563em; line-height: 1.4; font-family:
  Poppins, Helvetica, Arial, sans-serif; vertical-align: baseline; color: rgb(0,
  0, 0);">
  HOW TO DOWNLOAD PINTEREST VIDEOS FROM MOBILE.
</h3>
<div
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: inherit; font-family: Poppins,
  Helvetica, Arial, sans-serif; vertical-align: baseline; color: rgb(51, 51,
  51);">
  <div
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font:
    inherit; vertical-align: baseline;">
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      <span
        style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
        font-style: inherit; font-variant: inherit; font-weight: 700;
        font-stretch: inherit; font-size: inherit; line-height: inherit;
        font-family: inherit; vertical-align: baseline;">
        Step 1
      </span>
      :
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      Open your mobile browser and visit the Pinterest website or app if you
      have installed in your smartphone
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      <span
        style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
        font-style: inherit; font-variant: inherit; font-weight: 700;
        font-stretch: inherit; font-size: inherit; line-height: inherit;
        font-family: inherit; vertical-align: baseline;">
        Step 2:
      </span>
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      Open the video that you like to save in your smartphone.
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      <span
        style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
        font-style: inherit; font-variant: inherit; font-weight: 700;
        font-stretch: inherit; font-size: inherit; line-height: inherit;
        font-family: inherit; vertical-align: baseline;">
        Step 3:
      </span>
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      Then you&rsquo;ll see the 3 dots click on them and copy the link by simply
      clicking on the copy link button.
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      <span
        style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
        font-style: inherit; font-variant: inherit; font-weight: 700;
        font-stretch: inherit; font-size: inherit; line-height: inherit;
        font-family: inherit; vertical-align: baseline;">
        Step 4
      </span>
      :
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      Open the browser and search for&nbsp;
      <a
        data-saferedirecturl="https://www.google.com/url?q=http://techcode.in&source=gmail&ust=1594815781580000&usg=AFQjCNGrNBp2dsMPqmwK6gmqmesQZqlN_A"
        href="http://techcode.in/"
        style="color: rgb(17, 85, 204);"
        target="_blank">
        techcode.in
      </a>
      , after that paste the URL in the search box.
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      <span
        style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
        font-style: inherit; font-variant: inherit; font-weight: 700;
        font-stretch: inherit; font-size: inherit; line-height: inherit;
        font-family: inherit; vertical-align: baseline;">
        Step 5:
      </span>
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      After step 4 click on the Get button.
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      <span
        style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
        font-style: inherit; font-variant: inherit; font-weight: 700;
        font-stretch: inherit; font-size: inherit; line-height: inherit;
        font-family: inherit; vertical-align: baseline;">
        Step 6
      </span>
      :
    </p>
    <p
      style="box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px;
      border: 0px; font-style: inherit; font-variant: inherit; font-weight:
      inherit; font-stretch: inherit; font-size: inherit; line-height: 1.7;
      vertical-align: baseline; color: rgb(0, 0, 0);">
      Click on the Download Button
    </p>
  </div>
</div>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  In this way, you can
  <span
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
    font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch:
    inherit; font-size: inherit; line-height: inherit; font-family: inherit;
    vertical-align: baseline;">
    download the Pinterest video&nbsp;
  </span>
  on your smartphone without any downloading software.
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Now let see,
</p>
<h3
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent:
  0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px;
  -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);
  text-decoration-style: initial; text-decoration-color: initial; box-sizing:
  border-box; margin: 1em 0px 0.5em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight:
  500; font-stretch: inherit; font-size: 1.563em; line-height: 1.4; font-family:
  Poppins, Helvetica, Arial, sans-serif; vertical-align: baseline; color: rgb(0,
  0, 0);">
  HOW TO DOWNLOAD PINTEREST VIDEOS FROM DESKTOP ( MAC AND WINDOWS)
</h3>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  <span
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
    font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch:
    inherit; font-size: inherit; line-height: inherit; font-family: inherit;
    vertical-align: baseline;">
    Step 1:
  </span>
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Open your browser and visit the
  <a
    data-saferedirecturl="https://www.google.com/url?q=https://www.pinterest.com/&source=gmail&ust=1594815781580000&usg=AFQjCNEFW5kn-1VbPGHwPE7lnrq8YofXCg"
    href="https://www.pinterest.com/"
    rel="noreferrer noopener"
    style="color: rgb(221, 153, 51); box-sizing: border-box; margin: 0px;
    padding: 0px; border: 0px; font: inherit; vertical-align: baseline;
    text-decoration-line: none;"
    target="_blank">
    pinterest.com
  </a>
  website
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  <span
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
    font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch:
    inherit; font-size: inherit; line-height: inherit; font-family: inherit;
    vertical-align: baseline;">
    Step 2:
  </span>
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  In the search box, search the video that you want to download.
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  <span
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
    font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch:
    inherit; font-size: inherit; line-height: inherit; font-family: inherit;
    vertical-align: baseline;">
    Step 3:
  </span>
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Select the video that you want to save on your desktop or laptop.
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Step 4:
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  You can copy the video URL in two ways by simply copying the URL from the
  search bar of your browser and you&rsquo;ll see the send button from there
  also you can copy the URL of that Pinterest videos
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  <span
    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
    font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch:
    inherit; font-size: inherit; line-height: inherit; font-family: inherit;
    vertical-align: baseline;">
    Step 5:
  </span>
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Open the next tab and search for&nbsp;
  <a
    data-saferedirecturl="https://www.google.com/url?q=http://techcode.in&source=gmail&ust=1594815781580000&usg=AFQjCNGrNBp2dsMPqmwK6gmqmesQZqlN_A"
    href="http://techcode.in/"
    style="color: rgb(17, 85, 204);"
    target="_blank">
    techcode.in
  </a>
  , after that paste the URL in the Pinterest downloader search box
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Step6:
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Click on the Download Button
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  In this way, you can easily save the Pinterest videos in your MAC and Windows.
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Let&#39;s have some FAQ about Online Pinterest Video Downloader.
</p>
<ul
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 2.14286em; border:
  0px; font-variant-numeric: inherit; font-variant-east-asian: inherit;
  font-stretch: inherit; font-size: 16px; line-height: inherit; font-family:
  Poppins, Helvetica, Arial, sans-serif; vertical-align: baseline; list-style:
  square; color: rgb(51, 51, 51);">
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    <span
      style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
      font-style: inherit; font-variant: inherit; font-weight: 700;
      font-stretch: inherit; font-size: inherit; line-height: inherit;
      font-family: inherit; vertical-align: baseline;">
      Is techcode Pinterest Downloader safe for my device?
    </span>
  </li>
</ul>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Yes, it is, our first concern is the safety of the user.
  <br style="box-sizing: border-box;" />
  So it is completely safe for you to download the videos.
</p>
<ul
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 2.14286em; border:
  0px; font-variant-numeric: inherit; font-variant-east-asian: inherit;
  font-stretch: inherit; font-size: 16px; line-height: inherit; font-family:
  Poppins, Helvetica, Arial, sans-serif; vertical-align: baseline; list-style:
  square; color: rgb(51, 51, 51);">
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    <span
      style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
      font-style: inherit; font-variant: inherit; font-weight: 700;
      font-stretch: inherit; font-size: inherit; line-height: inherit;
      font-family: inherit; vertical-align: baseline;">
      Is techcode Video Downloader tracing a users download history?
    </span>
  </li>
</ul>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  We are not tracking any kind of users data. It is 100% safe for the user.
  Techcode does not store any history of the user.
</p>
<ul
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 2.14286em; border:
  0px; font-variant-numeric: inherit; font-variant-east-asian: inherit;
  font-stretch: inherit; font-size: 16px; line-height: inherit; font-family:
  Poppins, Helvetica, Arial, sans-serif; vertical-align: baseline; list-style:
  square; color: rgb(51, 51, 51);">
  <li
    style="margin: 0px 0px 0.5em; box-sizing: border-box; padding: 0px; border:
    0px; font: inherit; vertical-align: baseline;">
    <span
      style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;
      font-style: inherit; font-variant: inherit; font-weight: 700;
      font-stretch: inherit; font-size: inherit; line-height: inherit;
      font-family: inherit; vertical-align: baseline;">
      Where is the Pinterest video saved in our device?
    </span>
  </li>
</ul>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  These videos are saved in the default folder selected by your browser.
  <br style="box-sizing: border-box;" />
  You can easily change the location of the folder where you want to save the
  Pinterest videos.
</p>
<p
  style="font-style: normal; font-variant-ligatures: normal; font-variant-caps:
  normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align:
  start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255,
  255, 255); text-decoration-style: initial; text-decoration-color: initial;
  box-sizing: border-box; margin: 0px 0px 1.25em; padding: 0px; border: 0px;
  font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch:
  inherit; font-size: 16px; line-height: 1.7; font-family: Poppins, Helvetica,
  Arial, sans-serif; vertical-align: baseline; color: rgb(0, 0, 0);">
  Thank you.
</p>
