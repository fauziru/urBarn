<template>
  <section class="mt-7">
    <div class="text-xl text-gray-800">
      {{ title }}
    </div>
    <Wrapper class="overflow-x-scroll flex space-x-3 pb-2">
      <kategori-button
        v-for="(item, index) in data"
        :key="index"
        :text="item.text"
        :icon="item.icon"
        :link="item.link"
      />
    </Wrapper>
  </section>
</template>

<script>
import KategoriButton from '../_partials/KategoriButton'

export default {
  components: {
    'kategori-button': KategoriButton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default () {
        return {}
      }
    }
  }
}
</script>
