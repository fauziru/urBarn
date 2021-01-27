<template>
  <div>
    <Wrapper>
      <div class="rounded-2xl -mt-10 md:px-5">
        <!-- in Desktop -->
        <client-only v-if="!isMobile">
          <splide class="slide-desktop" :options="optionsDesktop">
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/1280x400/000/fff">
            </splide-slide>
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/1280x400/000/fff">
            </splide-slide>
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/1280x400/000/fff">
            </splide-slide>
            <template v-slot:controls>
              <div class="splide__progress">
                <div class="splide__progress__bar" />
              </div>
            </template>
          </splide>
          <Preloader slot="placeholder" />
        </client-only>

        <!-- in Mobile -->
        <client-only v-if="isMobile">
          <splide class="slide-mobile" :options="optionsMobile">
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/600x300/000/fff">
            </splide-slide>
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/600x300/000/fff">
            </splide-slide>
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/600x300/000/fff">
            </splide-slide>
            <template v-slot:controls>
              <div class="splide__progress">
                <div class="splide__progress__bar" />
              </div>
            </template>
          </splide>
          <Preloader slot="placeholder" />
        </client-only>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch () {
    await this.$store.dispatch('renderTopNav', this.topNavbar)
  },
  asyncData (context) {
    return {
      topNavbar: {
        hasBack: false
      }
    }
  },
  data () {
    return {
      optionsDesktop: {
        type: 'loop',
        isNavigation: true,
        focus: 'center',
        rewind: true,
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        arrows: 'slider',
        padding: {
          right: '7rem',
          left: '7rem'
        }
      },
      optionsMobile: {
        type: 'slide',
        rewind: true,
        arrows: false,
        pagination: true
      }
    }
  },
  computed: {
    ...mapState([
      'isMobile'
    ])
  }
}
</script>

<style scoped>
  .slide-mobile {
    padding: 0!important;
  }
  .slide-desktop {
    padding: 0!important;
  }
</style>
