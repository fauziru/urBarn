<template>
  <div>
    <button
      class="group inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 border-0"
      :class="colorScheme()"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  methods: {
    colorScheme () {
      let color = this.color
      switch (color) {
        case 'primary':
          color = 'bg-gray-100 hover:bg-gray-200'
          break
        case 'secondary':
          color = 'bg-green-100 hover:bg-green-200'
          break
        default:
          color = 'bg-green-500 hover:bg-green-300'
          break
      }
      return color
    }
  }
}
</script>
