<template>
  <div class="featured-component">
    <div class="featured">
      <img class="image" :src="featured.image" :alt="featured.title">
      <div class="info">
        <h3 class="title">{{ featured.title }}</h3>
        <span class="description">{{ featured.description }}</span>
      </div>

      <Ball class="ball" />
     
      <div class="actions">
        <div class="icons">
          <v-icon name="heart" class="icon" />
          <v-icon name="share-2" class="icon" />
        </div>
        <span class="link">Link</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { 
    Ball: () => import('./Ball')
  },

  props: {
    featured: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.featured-component {
  display: flex;
  flex-direction: row nowrap;
  padding-right: 10px;

  .featured {
    .image {
      width: 360px;
      height: 160px;
    }

    .info {
      position: relative;
      display: flex;  
      flex-direction: column;
      border: 2px solid rgba(206, 196, 196, 0.741);
      
      .title {
        margin-top: 10px;
        margin-left: 15px;
        font-weight: bold;
      }

      .description {
        margin: { top: 10px; left: 15px; bottom: 20px; }
        font-size: 14px;
      }
    }

    .ball {
      position: absolute;
      right: 20px;
      bottom: 110px;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      height: 30px;
      border: 2px solid rgba(206, 196, 196, 0.741);

      .icons {
        display: flex;

        .icon {
          width: 25px;
          height: 25px;
          padding-left: 15px;
        }
      }

      .link {
        font-size: 17px;
        color: aqua;
        font-weight: bold;
        padding-right: 10px;
      }
    }
  }
}
</style>
