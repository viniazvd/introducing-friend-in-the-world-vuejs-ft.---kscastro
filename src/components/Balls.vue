<template>
  <div class="balls-component">
    <div 
      class="ball"
      v-for="(ball, index) in 5"
      :key="index"
    >
      <Ball />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Ball: () => import('./Ball')
  }
}
</script>

<style lang="scss" scoped>

.balls-component {
  display: flex;
}
</style>
