<template>
  <div class="carousel-component">
    <carousel 
      :per-page="1" 
      :mouse-drag="false" 
      paginationActiveColor="white"
      :paginationPadding="5"  
    >
      <slide>
        <img class="image" src="../assets/img/img1.jpg">
      </slide>
      <slide>
        <img class="image" src="../assets/img/img2.jpg">
      </slide>
      <slide>
        <img class="image" src="../assets/img/img3.jpg">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: { Carousel, Slide }  
}
</script>

<style lang="scss">
.carousel-component {
  position: relative;

  .image {
    width: 360px;
    height: 200px;
  }

  .VueCarousel > .VueCarousel-pagination {
    position: absolute;
    bottom: 10px;
  }
}
</style>


