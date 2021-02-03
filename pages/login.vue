<template>
  <div>
    <Login />
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  async fetch () {
    await this.$store.dispatch('renderLayout', this.layout)
  },
  asyncData (context) {
    return {
      layout: {
        topNavbar: {
          hasBack: true,
          hasTitle: 'Masuk'
        },
        footer: false
      }
    }
  },
  transition: {
    name: 'slideBottom'
  },
  head () {
    return {
      title: 'Masuk - urBarn'
    }
  }
}
</script>
