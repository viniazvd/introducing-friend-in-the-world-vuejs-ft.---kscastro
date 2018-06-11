<template>
  <div class="navbar-component">
    <v-icon name="menu" class="icon" />
    <span v-once>LOGOTIPO</span>
    <v-icon name="search" class="icon" />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar-component {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

.icon {
  width: 35px;
  height: 35px;
}

</style>
