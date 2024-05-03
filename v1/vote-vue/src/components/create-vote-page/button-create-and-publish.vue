<template>
  <button
    class="button create-and-publish"
    @click="createAndPublish"
  >
    Создать и опубликовать
  </button>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

function createAndPublish() {
  store.dispatch("createVoteModule/createAndPublishVote");
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
