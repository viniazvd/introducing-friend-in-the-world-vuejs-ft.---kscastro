<template>
  <div class="highlights-component">
    <h2 class="title">Mais vistos</h2>

    <div v-if="!!highlights.length" class="highlights">
      <carousel 
        :per-page="2" 
        :mouse-drag="false" 
        paginationActiveColor="black"
        :paginationPadding="5"  
      >
        <slide
          v-for="highlight in highlights"
          :key="highlight.id"
        >
          <Highlight :highlight="highlight" />
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
    Highlight: () => import('./Highlight'),
  },

  props: {
    highlights: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
.highlights-component {
  .highlights {
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
