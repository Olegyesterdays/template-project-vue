<template>
  <button class="button">
    {{ name }}
  </button>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  name: {
    type: String,
    default: "Иванов Иван Иваныч"
  }
})
</script>

<style scoped lang="scss">
.button {
  padding: 12px;
  margin-top: 12px;
  border: 0;
  border-radius: 12px;
  background: var(--main-color);
  box-shadow: 0 4px 6px var(--shadow-color);
  text-align: left;

  &:first-child {
    margin: 0;
  }
}
</style>
