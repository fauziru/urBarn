<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      {{ error.message }}
    </h1>
    <h1 v-else>
      This Page is not found
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Number,
      default: 0
    }
  }
}
</script>
