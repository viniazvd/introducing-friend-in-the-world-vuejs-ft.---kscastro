<template>
  <div class="highlight-component">
      <div class="highlight">
        <div class="info" :style="{ 'background-image': 'url(' + highlight.image + ')' }">
          <div class="amount">
            <span class="value">{{ highlight.amount }} desconto</span>
          </div>
          <div class="title">{{ highlight.title }}</div>
          <div class="description">{{ highlight.description }}</div>
        </div>
        
        <div class="actions">
          <v-icon name="heart" class="icon" />
          <v-icon name="share-2" class="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    highlight: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.highlight-component {
  display: flex;
  flex-direction: row nowrap;
  padding-right: 10px;

  .highlight {
    .info {
      display: flex;  
      flex-direction: column;
      width: 160px;
      height: 160px;
      border-radius: 5px;

      .amount {
        background: white;
        width: 100px;
        border-radius: 50px;
        padding-left: 10px;
        margin: { left: 15px; top: 35px; }

        .value { color: blue; }
      }

      .title {
        margin-top: 10px;
        margin-left: 15px;
        color: white;
        font-weight: bold;
      }

      .description {
        margin-top: 10px;
        margin-left: 15px;
        color: white;
        font-size: 14px;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      background-color: white;
      height: 30px;
      border: 2px solid rgba(206, 196, 196, 0.741);

      .icon {
        width: 25px;
        height: 25px;
        padding-left: 15px;
      }
    }
  }
}
</style>
