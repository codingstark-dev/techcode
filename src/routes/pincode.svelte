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
  h1 {
    @apply font-semibold text-xl py-4;
  }
  h2 {
    @apply font-semibold text-lg py-2;
  }
  p {
    @apply p-2;
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
  <title>Pincode Finder Tool Easiest Way To Find Pincode</title>
  <!-- <meta http-equiv="Cache-control" content="public" /> -->
  <link rel="canonical" href="https://techcode.in/pincode" />
  <meta
    name="keywords"
    content="Pincode Finder Tool, Pincode Finder India,Pincode Finder In India," />

  <meta
    name="description"
    content="Do You Need A Pincode Finder? Warning: You're Losing Money by Not
    Using Pincode Finder. Easiest Way Find Pincode." />
</svelte:head>
<div class="text-center pt-6 font-semibold text-lg">
  <h4>Search By PinCode</h4>
</div>
<!-- <div class="p-4">
  Get Pincode details of all regions of india. Find here the Post office
  location, full address and its pincode. A Postal Index Number or PIN or
  Pincode or Zipcode is the post office numbering or post code system used by
  India Post, the Indian postal administration. The PinCode is 6 digits long.
  This PinCode system for identifying postal region by using unique code called,
  PinCode
</div> -->
<br />
<div class="flex justify-center space-x-3 pb-5">
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
  {#if $StoreData[0].Status !== 'Error'}
    <!-- content here -->

    {#each $StoreData[0].PostOffice as item, i}
      <!-- content here -->
      <div class="p-8">
        <h1 class="font-semibold">
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
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">PinCode</td>
                <td class="py-4 px-6 border-b border-grey-light">
                  <a
                    href="https://www.google.com/search?q={item.Pincode}+in+wikipedia"
                    rel="nofollow"
                    target="_blank"
                    class="font-medium text-indigo-500 hover:text-indigo-400">
                    {item.Pincode}
                  </a>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">Town/Taluk</td>
                <td class="py-4 px-6 border-b border-grey-light">
                  <a
                    href="https://www.google.com/search?q={item.Block}+in+maharashtra"
                    rel="nofollow"
                    target="_blank"
                    class="font-medium text-indigo-500 hover:text-indigo-400">
                    {item.Block}
                  </a>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">District</td>
                <td class="py-4 px-6 border-b border-grey-light">
                  <a
                    href="https://www.google.com/search?q={item.District}+district"
                    rel="nofollow"
                    target="_blank"
                    class="font-medium text-indigo-500 hover:text-indigo-400">
                    {item.District}
                  </a>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">State</td>
                <td class="py-4 px-6 border-b border-grey-light">
                  {item.State}
                </td>
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
  {:else}
    <h3 class="font-semibold text-lg p-10">
      Sorry We Cannot Find This "{pincode}" Pincode! OR Else You Entered Wrong
      PinCode
    </h3>
  {/if}
{/if}

<br />
<hr class="py-3" />
<h1>Pincode Finder Tool Easiest Way To Find Pincode</h1>
<h2>Have you ever stuck in Finding your Pincode?&nbsp;</h2>
<p>
  Many a time you want Pincode for many reasons like for banking, Parcel
  delivery, receiving the courier from another place, etc. then why wait for use
  now our
  <strong>Pincode finder</strong>
  .
</p>
<p>
  On the web, there are tons of website but because of an unfriendly interface,
  common people are not able to find it.
</p>
<p>So here is the solution for you! Before diving in, let's see</p>
<h2>What is Pincode and what use of Pincode finder?</h2>
<p>PIN code stands for Postal Index Number in India.</p>
<p>
  In India, this code is used for post office numbering. It is a six digits long
  number.
</p>
<p>
  This system was introduced in the year 15 August 1972 by Shriram Bhikaji
  Velankar, an additional secretary in the Union Ministry of Communications.
  Because of Shriram Bhikaji Velankar, the delivery service or postal service in
  India gets stabbed over confusion incorrect addresses.
</p>
<p>PIN code is of six-digit,</p>
<ul class="list-disc px-10">
  <li>The first digit indicates the Zone of India</li>
  <li>The second's digit indicates the Sub-Zone of India.</li>
  <li>
    The third will combine the first two indicates the sorting district within
    that zone.
  </li>
</ul>
<p>
  And the remaining final three digits are assigned to individual post offices
  within the sorting district In India.
</p>
<p>
  The fourth digit represents the route of the post office is located in the
  sorting districts. The core area of the sorting district office is 0.
</p>
<p>
  The remaining two digits are used to represent the delivery office within the
  sorting district starting from 01 which would be the General Post Office (GPO)
  or head office (HO). The numbering of the delivery office is done
  chronologically with higher numbers assigned to newer delivery offices. If the
  volume of mail handled at a delivery office is too large, a new delivery
  office is created and the next available PIN is assigned. Thus, two delivery
  offices situated next to each other will only have the first four digits in
  common.
</p>
<p>
  In India there are 9 Postal Zones, in this 8 are regional zones and one is the
  functional zone( this zone is for the Indian Army).
</p>
<p>
  The first digit of Pincode indicates the zone and is allocated over the 9
  zones as follows:
</p>
<p>1st digit of PIN Zone</p>
<p>
  1 - Delhi, Haryana, Punjab, Himachal Pradesh, Jammu, and Kashmir, Chandigarh
</p>
<p>2 - Uttar Pradesh, Uttarakhand</p>
<p>3 - Rajasthan, Gujarat, Daman and Diu, Dadra and Nagar Haveli</p>
<p>4 - Maharashtra, Goa, Madhya Pradesh, Chhattisgarh</p>
<p>5 - Telangana, Andhra Pradesh, Karnataka</p>
<p>6 - Tamil Nadu, Kerala, Puducherry, Lakshadweep</p>
<p>
  7 - West Bengal, Odisha, Arunachal Pradesh, Nagaland, Manipur, Mizoram,
  Tripura, Meghalaya, Andaman, and Nicobar Islands, Assam, Sikkim
</p>
<p>9 - Bihar, Jharkhand</p>
<p>
  <a href="https://en.wikipedia.org/wiki/Army_Postal_Service_(India)">
    Army Post Office
  </a>
  (APO),
  <a href="https://en.wikipedia.org/wiki/Field_post_office">
    Field Post Office (FPO)
  </a>

</p>
<p>
  Now the Third Digit of the Pincode which is combined with the first two digits
  represents the geographical region (except in the case of the functional zone
  for the Army).
  <br />
  This is called a Sorting District that is headquartered at the main post
  office of the largest city in the region and is known as the sorting office.
  <br />
  As we know how big India is!
  <br />
  India has 29 states. The states are further subdivided into districts and
  smaller administrative divisions.
  <br />
  So the State may have one or more sorting districts depending on the volume of
  mail handled in that post.
</p>
<p>PIN prefix ISO 3166-2: IN Region</p>
<p>
  11 DL Delhi
  <br />
  12&ndash;13 HR Haryana
  <br />
  14&ndash;15 PB Punjab
  <br />
  16 CH Chandigarh
  <br />
  17 HP Himachal Pradesh
  <br />
  18&ndash;19 JK Jammu and Kashmir
  <br />
  20&ndash;28 UP, UT Uttar Pradesh, Uttarakhand
  <br />
  30&ndash;34 RJ Rajasthan
  <br />
  396210 DD Daman and Diu
  <br />
  396 DN Dadra and Nagar Haveli
  <br />
  36&ndash;39 GJ Gujarat
  <br />
  403 GA Goa
  <br />
  40&ndash;44 MH Maharashtra
  <br />
  45&ndash;48 MP Madhya Pradesh
  <br />
  49 CT Chhattisgarh
  <br />
  50 TG Telangana
  <br />
  51&ndash;53 AP Andhra Pradesh
  <br />
  56&ndash;59 KA Karnataka
  <br />
  605 PY Puducherry
  <br />
  60&ndash;66 TN Tamil Nadu
  <br />
  682 LD Lakshadweep
  <br />
  67&ndash;69 KL Kerala
  <br />
  737 SK Sikkim
  <br />
  744 AN Andaman and the Nicobar Islands
  <br />
  70&ndash;74 WB West Bengal
  <br />
  75&ndash;77 OR Odisha
  <br />
  78 AS Assam
  <br />
  790&ndash;792 AR Arunachal Pradesh
  <br />
  793&ndash;794 ML Meghalaya
  <br />
  795 MN Manipur
  <br />
  796 MZ Mizoram
  <br />
  797&ndash;798 NL Nagaland
  <br />
  799 TR Tripura
  <br />
  80&ndash;85 BR, JH Bihar, Jharkhand
  <br />
  90&ndash;99 APS Army Postal Service
</p>
<p>
  <br />
  Each PIN CODE is mapped to exactly one delivery post office which receives all
  the mail/delivery to be delivered to one or lower offices within its
  jurisdiction, all of which share the same code. The delivery office can either
  be a General Post Office (GPO), ahead office (HO), or a sub-office (SO) which
  are usually located in urban areas. The post from the delivery office is
  sorted and routed to other delivery offices for a different PIN or to one of
  the relevant sub-offices or branch offices for the same PIN. Branch offices
  (BOs) are located in rural areas and have limited postal services in India.
</p>
<p>There are about 1,62,000 Postal code, the post office in India.</p>
