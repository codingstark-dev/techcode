<script>
  import Appstor from "./Appstor.svelte";

  import Playstore from "./Playstore.svelte";
</script>

<footer>
  <div class="border-separate border-b-2 border-gray-400 pt-3" />
  <div class="w-auto h-56 bg-indigo-500 ">
    <div class="flex-grow mx-20" >
    <a class="focus:outline-none flex-1 py-3 p-8 ">
      <h1
        class="font-black text-white text-base md:text-xl uppercase
        hover:text-indigo-300 transition-color duration-150 text-center">
        Techcode
        <span class="text-gray-400">.iN</span>
      </h1>
    </a></div>

    <!-- <div class="border-separate border-b-2 border-gray-400 " /> -->
    <div
      class="flex bg-indigo-400 w-auto h-10 justify-center py-1 space-x-1
      md:space-x-5 ">
      <div
        class="bg-gray-400 w-auto h-8 opacity-75 rounded-md py-1 px-2
        font-semibold p-4 transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:shadow-lg  text-sm">
        Privacy Policy
      </div>
      <div
        class="bg-gray-400 w-auto h-8 opacity-75 rounded-md py-1 px-2
        font-semibold p-4 transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:shadow-lg text-sm">
        Disclamer
      </div>
      <div
        class="bg-gray-400 w-auto h-8 opacity-75 rounded-md py-1 px-2
        font-semibold p-4 transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:shadow-lg text-sm">
        Contact Us
      </div>
      <div
        class="bg-gray-400 w-auto h-8 opacity-75 rounded-md py-1 px-2
        font-semibold p-4 transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:shadow-lg text-sm">
        About Us
      </div>
    </div>
    <h3 class="pt-2 font-bold text-indigo-400 text-xl text-center">
      App Coming Soon..
    </h3>
    <div class=" flex justify-center py-3 space-x-3 ">

      <!-- <div class="border-separate border-b-2 border-gray-400 pt-3" /> -->

      <Playstore />
      <Appstor />
    </div>

  </div>
  <div
    class="focus:outline-none flex-1 py-3 p-8 font-bold text-white bg-indigo-400
    h-20 w-auto py-3 text-base text-center">
    Copyright © 2018-2020 by
    <span
      class="font-black text-white md:text-xl uppercase hover:text-indigo-300
      transition-color duration-150 text-center">
      Techcode
      <span class="text-gray-400">.iN</span>
    </span>
    All Rights Reserved.
  </div>
</footer>
