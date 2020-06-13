<script>
  export let links = "";
  let domain = "https://techcode.in/";
</script>

<a href={domain+links}>
  <div
    class=" w-40 h-40 select-none cursor-pointer bg-gray-200 rounded-md
    items-center justify-center p-4 transition duration-500 ease-in-out
    transform hover:-translate-y-1 hover:shadow-lg justify-center text-center ">
    <slot />
  </div>
</a>

<!-- <div class="container flex mx-auto w-full items-center">

  <ul class="flex flex-col bg-white p-4">
    <li class="border-gray-400 flex flex-row mb-2 w-40 h-40">
      <div
        class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1
        items-center p-4 transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:shadow-lg ">
        <div
          class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center
          items-center mr-4">
          💧
        </div>
        <div class="flex-1 pl-1 mr-16">
          <div class="font-medium">Cup of water</div>
          <div class="text-gray-600 text-sm">200ml</div>
        </div>
        <div class="text-gray-600 text-xs">6:00 AM</div>
      </div>
    </li>

  </ul>

</div> -->
<!-- <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">⚽️</div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Training</div>
              <div class="text-gray-600 text-sm">1h</div>
            </div>
            <div class="text-gray-600 text-xs">10:00 AM</div>
          </div>
        </li>
             <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">📖</div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Study</div>
              <div class="text-gray-600 text-sm">4h</div>
            </div>
            <div class="text-gray-600 text-xs">1:00 PM</div>
          </div>
        </li> -->
