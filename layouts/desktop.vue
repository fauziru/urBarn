<template>
  <div id="Desktop">
    <Navbar />
    <div id="content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './navbar'
import Footer from './footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
