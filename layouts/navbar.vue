<template>
  <div id="navbar">
    <Modal v-if="modalShow" @close="modalShow = !modalShow">
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
    <header class="fixed z-30 w-full text-gray-600 body-font shadow-md blur">
      <Wrapper>
        <div class="p-5 md:hidden flex items-center justify-between">
          <Brand />
          <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-green-500 hover:border-green-500" @click="toggle">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center" :class="open ? 'flex' : 'hidden'">
          <nav class="flex lg:w-2/5 flex-wrap flex-col md:flex-row items-center text-base md:ml-auto md:space-x-4">
            <NuxtLink to="/about" class="hover:text-gray-900">
              Tentang urBarn
            </NuxtLink>
            <a href="#" class="hover:text-gray-900">Promo</a>
            <a href="#" class="hover:text-gray-900">Mitra urBarn</a>
            <a href="#" class="hover:text-gray-900">urBarn Care</a>
          </nav>
          <Brand class="order-first lg:order-none lg:w-1/5 hidden md:flex lg:items-center lg:justify-center" />
          <div class="lg:w-2/5 inline-flex lg:justify-end md:ml-5 lg:ml-0 space-x-3">
            {{ username }}
            <mybutton color="primary" @click="modalShow = !modalShow">
              Masuk
              <i class="fas fa-sign-in-alt ml-2 group-hover:text-green-500" />
            </mybutton>
            <mybutton color="secondary">
              Daftar
              <i class="fas fa-user-plus ml-2 group-hover:text-green-500" />
            </mybutton>
          </div>
        </div>
      </Wrapper>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import mybutton from '../components/_partials/Button'

export default {
  components: {
    mybutton
  },
  data () {
    return {
      open: false,
      modalShow: false
    }
  },
  computed: {
    ...mapState('user', [
      'username'
    ])
  },
  updated () {
    console.log('update')
  },
  methods: {
    ...mapActions('user', [
      'storeLogin'
    ]),
    getLogin () {
      console.log('login')
      this.storeLogin()
    },
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style scoped>
  .blur {
    backdrop-filter: blur(10px);
  }
</style>
