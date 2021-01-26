<template>
  <div>
    <Login />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middlware: 'guest',
  data () {
    return {
      topNav: {
        hasBack: true
      }
    }
  },
  created () {
    // this.renderTopNav(this.topNav)
  },
  methods: {
    ...mapActions([
      'renderTopNav'
    ])
  }
}
</script>
