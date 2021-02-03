<template>
  <div id="bottomBar">
    <div class="block bg-gray-100 border-t-2 border-gray-200 border-opacity-25 w-full text-center fixed bottom-0 h-14 shadow inset-x-0 z-10">
      <div class="flex justify-between">
        <bottombar-button
          v-for="(item, index) in bottomBar"
          :key="index"
          :link="item.link"
          :icon="item.icon"
          :text="item.text"
        />
        <NuxtLink v-if="!access_token" to="/login" class="w-full text-gray-500 justify-center inline-block text-center pt-2 pb-1">
          <i class="fas fa-sign-in-alt fa-lg inline-block mb-1" />
          <span class="block text-xs">Masuk</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Button from '../components/bottombar/Button'
export default {
  components: {
    'bottombar-button': Button
  },
  computed: {
    ...mapState('menu', [
      'bottomBar'
    ]),
    ...mapState('auth', [
      'access_token'
    ])
  }
}
</script>

<style scoped>
  .nuxt-link-exact-active {
    @apply text-green-600;
  }
  a {
    -webkit-tap-highlight-color: rgba(0, 128, 0, 0.157)!important;
  }
</style>
