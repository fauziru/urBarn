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
      </div>
    </Wrapper>
    <!-- in Mobile -->
    <div v-if="isMobile">
      <section id="promoCarousel">
        <splide class="slide-mobile" :options="optionsMobile">
          <splide-slide>
            <img class="rounded-xl" src="https://dummyimage.com/500x300/000/fff">
          </splide-slide>
          <splide-slide>
            <img class="rounded-xl" src="https://dummyimage.com/500x300/000/fff">
          </splide-slide>
          <splide-slide>
            <img class="rounded-xl" src="https://dummyimage.com/500x300/000/fff">
          </splide-slide>
          <template v-slot:controls>
            <div class="splide__progress">
              <div class="splide__progress__bar" />
            </div>
          </template>
        </splide>
      </section>
      <!-- kategori -->
      <Kategori id="kategori" :data="kategori" />
      <!-- diskon -->
      <section id="diskonProduct">
        <div>
          <Wrapper>
            <div class="text-xl pb-2 text-gray-800 items-center flex justify-between">
              <div class="font-medium tracking-wide">
                Diskon nih
              </div>
              <div>
                <a href="#">
                  <span class="text-xs text-green-500 font-medium">Lihat Semua</span>
                </a>
              </div>
            </div>
          </Wrapper>
          <Wrapper class="overflow-x-scroll flex space-x-2 pb-2">
            <div v-for="(item, index) in kategori" :key="index" class="flex-shrink-0 w-36 border-gray-100 border-solid border-2">
              <a class="block relative h-28 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
              </a>
              <div class="mt-2 p-1">
                <div class="text-yellow-500 text-xs mb-1 max-w-min bg-yellow-100 p-1 rounded-r-full pr-2">
                  Kategori
                </div>
                <h2 class="text-gray-900 text-sm truncate mb-2">The Catalyzer</h2>
                <div class="flex space-x-1">
                  <div class="text-red-500 text-xs max-w-min bg-red-100 p-1 rounded-lg">
                    50%
                  </div>
                  <p class="mt-1 text-gray-500 text-xs line-through">Rp. 32.000</p>
                </div>
                <p class="font-medium text-green-900">Rp. 16.000</p>
                <div class="flex items-center space-x-1 pt-1 mt-2">
                  <!-- <div class="star-ratings-sprite">
                    <span style="width: 50%" class="star-ratings-sprite-rating" />
                  </div> -->
                  <i class="fa fa-star text-yellow-300" aria-hidden="true" />
                  <span class="text-xs text-gray-400">
                    2.5
                  </span>
                  <span class="text-xs text-gray-400 overflow-hidden truncate">
                    | Terjual 1
                  </span>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Kategori from '../components/section/Kategori'

export default {
  components: {
    Kategori
  },
  async fetch () {
    await this.$store.dispatch('renderLayout', this.layout)
  },
  asyncData (context) {
    return {
      layout: {
        topNavbar: {
          hasBack: false
        }
      }
    }
  },
  scrollToTop: true,
  transition: {
    name: 'fade'
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
      },
      isShown: true
    }
  },
  computed: {
    ...mapState([
      'isMobile'
    ]),
    ...mapState('menu', [
      'kategori'
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
  .star-ratings-sprite-rating {
    background: url('~assets/star-rating.png') repeat-x;
    background-position: 0 100%;
    float: left;
    height: 14px;
    display: block;
  }
  .star-ratings-sprite{
    background: url('~assets/star-rating.png') repeat-x;
    font-size: 0;
    height: 12px;
    line-height: 0;
    overflow: hidden;
    text-indent: -999em;
    width: 70px;
    clear: both;
  }
</style>
