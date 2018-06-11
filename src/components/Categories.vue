<template>
  <div class="categories-component">
    <h2>Categorias populares</h2>

    <Category 
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
    <Category />
  </div>
</template>

<script>
export default {
  components: {
    Category: () => import('./Category')
  },

  props: {
    categories: {
      type: Array
    }
  }
}
</script>
