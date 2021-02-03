<template>
  <NuxtLink :to="link" class="">
    <div class="flex items-center justify-center w-12 h-12 rounded-md bg-green-200 text-white">
      <i class="fa " :class="icon" aria-hidden="true" />
    </div>
    <div class="text-xs text-center text-gray-500 w-12 h-8 whitespace-normal overflow-ellipsis overflow-hidden">
      {{ text }}
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  a {
    -webkit-tap-highlight-color: rgba(0, 128, 0, 0.157)!important;
  }
</style>
