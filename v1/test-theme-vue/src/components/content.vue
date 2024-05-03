<template>
  <div class="content">
    <div class="item" v-for="(title, index) in items" :key="index">
        <span class="text">
          {{ title }}
        </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  'item 1',
  'item 2',
  'item 3',
]);
</script>

<style scoped>
.content {
  margin: 100px auto;
  width: 1000px;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  background: var(--my-dop-background-color-light-theme);
  box-shadow: 0 4px 6px var(--shadow-color);

  .item {
    margin-top: 12px;
    height: 100px;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    background: var(--my-main-background-color-light-theme);
    box-shadow: 0 4px 6px var(--shadow-color);

    .text {
      margin: auto;
    }

    &:first-child {
      margin: 0;
    }
  }
}
</style>
