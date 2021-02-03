<template>
  <div>
    <client-only>
      <Mobile v-if="isMobile" />
      <Desktop v-if="!isMobile" />
      <Preloader slot="placeholder" />
    </client-only>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Desktop from './desktop'
import Mobile from './mobile'

export default {
  components: {
    Desktop,
    Mobile
  },
  computed: {
    ...mapState([
      'isMobile'
    ])
  },
  beforeDestroy () {
    if (typeof window === 'undefined') {
      return window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    ...mapMutations([
      'setisMobile'
    ]),
    onResize () {
      this.setisMobile(window.innerWidth < 600)
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#content {
  @apply pt-24;
  min-height: calc(100vh - 23.4rem);
}
</style>
