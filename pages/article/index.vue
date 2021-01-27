<template>
  <div id="article">
    <h2>ini halaman article</h2>
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('renderTopNav', this.topNavbar)
  },
  asyncData (context) {
    return {
      topNavbar: {
        hasBack: true,
        hasTitle: 'Artikel'
      }
    }
  },
  head () {
    return {
      title: 'Artikel - urBarn'
    }
  }
}
</script>
