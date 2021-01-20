<template>
  <div>
    <Wrapper>
      <div class="p-5">
        <div class="rounded-2xl">
          <splide :options="options">
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/1224x400/000/fff" />
            </splide-slide>
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/1224x400/000/fff" />
            </splide-slide>
            <splide-slide>
              <img class="rounded-2xl" src="https://dummyimage.com/1224x400/000/fff" />
            </splide-slide>
          </splide>
        </div>
      </div>
    </Wrapper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        type: 'loop',
        rewind: true,
        gap: '1rem',
        padding: {
          right: '7rem',
          left: '7rem'
        }
      }
    }
  }
}
</script>
