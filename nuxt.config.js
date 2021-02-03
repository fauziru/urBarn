export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Warung online jual beli sayuran segar | urBarn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Warung online jual beli sayuran segar, cepat dan terjangkau' }
    ],
    script: [
      {src: 'https://kit.fontawesome.com/6a8a2c0076.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'urBarn/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/splide-sea-green.min.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-splide.js', mode: 'client' },
    { src: '~/plugins/vue-tailwind.js', mode: 'client' },
    '~/plugins/local-storage',
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://go.nuxtjs.dev/toast
    '@nuxtjs/toast',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:8000',
    credentials: true
  },

  // https://github.com/nuxt-community/modules/tree/master/packages/toast
  toast: {
    position: 'top-center',
    duration: 1000,
    keepOnHover: true,
    theme: 'bubble',
    register: [ // Register custom toasts
      {
        name: 'myerror',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      },
      {
        name: 'mysuccess',
        message: 'Berhasil',
        options: {
          type: 'success'
        }
      }
    ]
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // custom progress bar

  // extend router
  router: {
    base: '/urBarn/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
