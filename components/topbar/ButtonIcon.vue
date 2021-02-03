<template>
  <button
    class="p-1 focus:outline-none focus:shadow-outline"
    @click="$emit('click')"
  >
    <i class="fa " :class="icon" aria-hidden="true" />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
