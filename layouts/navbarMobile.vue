<template>
  <div id="topBar">
    <t-dropdown
      :classes="{}"
      :fixed-classes="fixedClass"
      class="fixed z-10 w-full bg-gray-100 shadow-md"
    >
      <div
        slot="trigger"
        slot-scope="{
          mousedownHandler,
          focusHandler,
          blurHandler,
          keydownHandler,
          isShown
        }"
        class="px-4 mx-auto"
      >
        <div class="flex justify-between h-14">
          <div class="flex items-center mr-2 -ml-2 sm:hidden space-x-3">
            <!-- back button -->
            <ButtonIcon
              v-if="topNavbar.hasBack"
              class="text-green-500 p-2"
              icon="fa-arrow-left"
              @click="hasHistory() ? $router.go(-1) : $router.push('/')"
            />
            <!-- Mobile menu button -->
            <button
              v-if="!topNavbar.hasBack"
              class="inline-flex items-center justify-center p-2 text-green-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 focus:text-white"
              aria-label="Main menu"
              aria-expanded="false"
              @mousedown="mousedownHandler"
              @blur="blurHandler"
              @keydown="keydownHandler"
            >
              <svg
                :class="{ 'hidden': isShown, 'block': !isShown}"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                :class="{ 'hidden': !isShown, 'block': isShown}"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span v-if="topNavbar.hasTitle" class="text-gray-700 text-2xl p2 align-middle text-center">
              {{ topNavbar.hasTitle }}
            </span>
          </div>
          <div v-if="!topNavbar.hasTitle" class="flex justify-between items-center flex-shrink-0 space-x-3 text-green-500">
            <Brand class="brand-mobile" />
            <form method="GET">
              <div class="relative text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-40 flex items-center pl-2">
                  <ButtonIcon type="submit" icon="fa-search" />
                </span>
                <t-input name="q" placeholder="Cari..." />
              </div>
            </form>
            <ButtonIcon icon="fa-heart fa-lg" />
            <ButtonIcon icon="fa-bell fa-lg" />
          </div>
        </div>
      </div>

      <div class="sm:hidden -translate-y-full text-gray-600">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a href="#" class="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-green-900 rounded-md focus:outline-none focus:text-white focus:bg-green-700">Users</a>
          <a href="#" class="block px-3 py-2 mt-1 text-base font-medium transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">Companies</a>
          <a href="#" class="block px-3 py-2 mt-1 text-base font-medium transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">Settings</a>
        </div>
      </div>
    </t-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      fixedClass: {
        enterActiveClass: 'transition ease-out duration-200 transform opacity-0 scale-95',
        enterToClass: 'transform opacity-100 scale-100',
        leaveClass: 'transition ease-in transform opacity-100 scale-100',
        leaveToClass: 'transform opacity-0 scale-95 duration-100'
      }
    }
  },
  computed: {
    ...mapState([
      'topNavbar'
    ])
  },
  methods: {
    hasHistory () {
      return window.history.length > 2
    }
  }
}
</script>

<style scoped>
  @media (max-width: 438px) {
    .brand-mobile {
      display: none;
    }
  }
</style>
