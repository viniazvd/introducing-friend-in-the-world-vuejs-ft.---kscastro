<template>
  <div class="tabber-component">
    <span 
      class="tab" 
      :class="{ '-active': tabSelected }"
      @click="$emit('change-tab', !tabSelected)"
    >
      Destaques
    </span>
    
    <span 
      class="tab" 
      :class="{ '-active': !tabSelected }"
      @click="$emit('change-tab', !tabSelected)"
    >
      Categorias
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tabSelected: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.tabber-component {
  display: flex;
  flex: 100%;
  border-top: 1px solid rgba(206, 196, 196, 0.741);
}

.tab {
  display: flex;
  flex: 50%;
  align-items: center;
  height: 50px;
  padding-left: 50px; 
  padding-right: 50px; 
}

.-active { border-bottom: 3px solid blue; }
</style>
