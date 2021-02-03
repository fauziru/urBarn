<template>
  <div id="Mobile">
    <Navbar />
    <div id="content">
      <Nuxt />
    </div>
    <Footer />
    <BottomBar />
  </div>
</template>

<script>
import Footer from './footer'
import Navbar from './navbarMobile'
import BottomBar from './navbarBottomMobile'

export default {
  components: {
    Footer,
    Navbar,
    BottomBar
  }
}
</script>
