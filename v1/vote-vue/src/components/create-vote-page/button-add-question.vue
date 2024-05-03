<template>
  <button
    class="button add-question"
    @click="newQuestion"
  >
    Добавить вопрос
  </button>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();
function newQuestion() {
  store.commit("createVoteModule/newQuestion")
}
</script>

<style scoped lang="scss">
.button {
  margin-bottom: 8px;
  padding: 12px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 4px 6px var(--shadow-color);
  background: var(--neutral-color);

  &:hover {
    background: var(--accent-color);
    color: var(--main-color);
  }

  &:last-child {
    margin-bottom: 400px;
  }
}
</style>
