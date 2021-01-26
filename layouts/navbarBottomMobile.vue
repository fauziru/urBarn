<template>
  <div id="botomBar">
    <div class="block bg-gray-100 border-t-2 border-gray-200 border-opacity-25 w-full text-center fixed bottom-0 h-14 shadow inset-x-0 z-10">
      <div class="flex justify-between">
        <NuxtLink to="/" class="w-full focus:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <i class="fas fa-home fa-lg inline-block mb-1" />
          <span class="block text-xs">Home</span>
        </NuxtLink>
        <NuxtLink to="/article" class="w-full focus:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <i class="fa fa-file-text fa-lg inline-block mb-1" />
          <span class="block text-xs">Article</span>
        </NuxtLink>
        <NuxtLink to="/about" class="w-full focus:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <i class="fas fa-shopping-cart fa-lg inline-block mb-1" />
          <span class="block text-xs">Cart</span>
        </NuxtLink>
        <NuxtLink to="/login" class="w-full focus:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <i class="fas fa-sign-in-alt fa-lg inline-block mb-1" />
          <span class="block text-xs">Masuk</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .nuxt-link-exact-active {
    @apply text-green-600
  }
</style>
