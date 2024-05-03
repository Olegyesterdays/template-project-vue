<template>
  <div class="sorting-panel">
    <v-btn
        @click="sortByRatingAsc"
        icon="mdi-sort-reverse-variant"
    />

    <v-btn
        @click="sortByRatingDesc"
        icon="mdi-sort-variant"
    />

    <v-btn
        @click="cancelSorting"
        icon="mdi-sort-variant-remove"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

const emit = defineEmits()

defineProps({
  color: {
    type: String,
  }
});

function sortByRatingAsc() {
  emit('update:sortByRatingAsc', 'sortByRatingAsc')
}

function sortByRatingDesc() {
  emit('update:sortByRatingDesc', 'sortByRatingDesc')
}

function cancelSorting() {
  emit('update:cancelSorting', 'cancelSorting')
}
</script>

<style scoped lang="scss">
.sorting-panel {
  width: 100%;
  height: 64px;
  background: v-bind(color);
  margin-bottom: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-around;
}
</style>
