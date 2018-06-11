<template>
  <slide class="slide-component">  
    <img class="image" :src="image">
  </slide>
</template>

<script>
import { Slide } from 'vue-carousel'

export default {
  components: { Slide },

  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.slide-component {
  position: relative;

  .image {
    width: 360px;
    height: 200px;
  }
}
</style>


