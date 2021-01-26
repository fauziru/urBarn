<template>
  <div>
    <nuxt-content :document="doc" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    try {
      const doc = await $content(`article/${params.slug}`).fetch()
      return { doc }
    } catch (e) {
      error({
        statusCode: 404, message: 'Article not Found'
      })
    }
  }
}
</script>
