<template>
  <div id="navbar">
    <Modal v-show="modalLogin" @close="modalLogin = !modalLogin">
      <div class="border-b p-3 rounded-t border-gray-100">
        Masuk
      </div>
      <div class="p-3">
        <Login />
      </div>
      <div class="p-3 rounded-b bg-gray-100">
        This it content inside the <strong>footer</strong> slot
      </div>
    </Modal>
    <header class="fixed z-30 w-full text-gray-600 body-font shadow-md bg-gray-100">
      <Wrapper>
        <div class="py-3 px-2 md:hidden flex items-center justify-between">
          <Brand />
          <!-- Tombol menu burger -->
          <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-green-500 hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-opacity-50" @click="toggle">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="mx-auto md:flex flex-wrap px-5 py-3 flex-col md:flex-row items-center" :class="openMenu ? 'flex' : 'hidden'">
          <nav class="flex lg:w-2/5 flex-wrap flex-col md:flex-row items-center text-base md:ml-auto md:space-x-4">
            <NuxtLink to="/about" class="hover:text-gray-900">
              Tentang urBarn
            </NuxtLink>
            <a href="#" class="hover:text-gray-900">Promo</a>
            <a href="#" class="hover:text-gray-900">Mitra urBarn</a>
            <a href="#" class="hover:text-gray-900">urBarn Care</a>
            <client-only>
              <t-dropdown text="Menu" variant="bottom" toggle-on-hover>
                <div class="py-1 rounded-md shadow-xs">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                  >
                    <t-dropdown class="w-full" text="Menu" variant="right" toggle-on-hover>
                      <div class="py-1 rounded-md shadow-xs">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    </t-dropdown>
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              </t-dropdown>
            </client-only>
          </nav>
          <Brand class="order-first lg:order-none lg:w-1/5 hidden md:flex lg:items-center lg:justify-center" />
          <div v-if="!access_token" class="lg:w-2/5 inline-flex lg:justify-end md:ml-5 lg:ml-0 space-x-3">
            <navbar-button color="primary" @click="modalLogin = !modalLogin">
              Masuk
              <i class="fas fa-sign-in-alt ml-2 group-hover:text-green-500" />
            </navbar-button>
            <navbar-button color="secondary">
              Daftar
              <i class="fas fa-user-plus ml-2 group-hover:text-green-500" />
            </navbar-button>
          </div>
          <div v-if="access_token" class="lg:w-2/5 inline-flex lg:justify-end md:ml-5 lg:ml-0 space-x-3">
            <button-icon icon="fa-shopping-cart fa-lg" />
            <button-icon icon="fa-heart fa-lg" />
            <button-icon icon="fa-bell fa-lg" />
          </div>
        </div>
      </Wrapper>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Button from '../components/_partials/Button'
import ButtonIcon from '../components/topbar/ButtonIcon'

export default {
  components: {
    'navbar-button': Button,
    'button-icon': ButtonIcon
  },
  data () {
    return {
      openMenu: false,
      modalLogin: false
    }
  },
  computed: {
    ...mapState('auth', [
      'access_token',
      'email_adress'
    ])
  },
  watch: {
    $route (to, from) {
      this.modalLogin = false
      this.openMenu = false
    }
  },
  updated () {
  },
  methods: {
    toggle () {
      this.openMenu = !this.openMenu
    }
  }
}
</script>
