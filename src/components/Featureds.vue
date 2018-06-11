<template>
  <div class="featureds-component">
    <h2 class="title">Destaques do mes</h2>

    <div v-if="!!featureds.length" class="featureds">
      <carousel 
        :per-page="1" 
        :mouse-drag="false" 
        paginationActiveColor="black"
        :paginationPadding="5"  
      >
        <slide
          v-for="featured in featureds"
          :key="featured.id"
        >
          <Featured :featured="featured" />
        </slide>
      </carousel>
    </div>

    <div v-else class="empty-state">
      <h3>Sem destaques configurados</h3>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: { 
    Carousel,
    Slide,
    Featured: () => import('./Featured'),
  },

  props: {
    featureds: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
.featureds-component {
  .featureds {
    display: flex;
    flex-wrap: nowrap;

    .VueCarousel { 
      width: 360px;
       
      .VueCarousel-pagination {
        display: none;
      }   
    }
  }
}
</style>
