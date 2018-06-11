<template>
  <div v-if="!!category" class="category-component">
    <h3 class="title">{{ category.title }}</h3>
    <span class="description">{{ category.description }}</span>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object
    }
  }
}
</script>

<style lang="scss">

.category-component {
  display: flex;
  flex-direction: column;
  background-color: blue;
  padding-left: 15px;
  height: 100px;
  margin-bottom: 15px;

  .title {
    color: white;
    font-weight: bold;
  } 
  
  .description {
    color: white;
    font-size: 13px;
  }
}
</style>
