<template>
  <div>
    <Login />
  </div>
</template>

<script>
export default {
  middlware: 'guest',
  async fetch () {
    await this.$store.dispatch('renderTopNav', this.topNavbar)
  },
  asyncData (context) {
    return {
      topNavbar: {
        hasBack: true,
        hasTitle: 'Masuk'
      }
    }
  },
  transitions: 'fade'
}
</script>
