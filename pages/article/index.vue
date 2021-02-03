<template>
  <div id="article">
    <h2>ini halaman article</h2>
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('renderLayout', this.layout)
  },
  asyncData (context) {
    return {
      layout: {
        topNavbar: {
          hasBack: true,
          hasTitle: 'Artikel'
        },
        footer: true
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
