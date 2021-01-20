<template>
  <div tabindex="0" class="z-40 overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50 bg-black">
    <div class="relative mx-auto z-50 max-w-lg px-3 py-12 ">
      <div class="overflow-visible relative rounded bg-white shadow">
        <button type="button" class="flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 bg-gray-100 text-gray-600 hover:bg-gray-200" @click="$emit('close')">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
          </svg>
        </button>
        <!-- konten modal -->
        <slot />
      </div>
    </div>
  </div>
</template>
