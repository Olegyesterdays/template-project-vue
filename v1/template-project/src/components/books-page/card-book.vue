<template>
  <button class="book-card" >
    <span class="mdi mdi-book-open-page-variant-outline" />
    <span class="book-details">
      <span class="title">{{ title }}</span>
      <span class="author">Автор: {{ author }}</span>
      <!-- Дополнительные данные книги можно добавить здесь -->
    </span>
  </button>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  title: {
    type: String,
    default: "title"
  },

  author: {
    type: String,
    default: "author"
  },
})
</script>

<style>
.book-card {
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: var(--main-color);
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 6px;

  .mdi {
    font-size: 64px;
    color: var(--text-color);
  }

  .book-details {
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 32px;
      color: var(--text-color);
    }

    .author {
      color: var(--text-color);
    }
  }
}
</style>
