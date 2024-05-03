<template>
  <input
    class="input"
    type="text"
    :placeholder="$t('accountPage.nameVote')"
    v-model="searchText"
  />
</template>

<script setup>
import { computed, ref } from 'vue'

const searchText = ref('')

const filteredVoting = computed(() => {
  const search = searchText.value.toLowerCase()
  return voting.value.filter(vote => vote.title.toLowerCase().includes(search))
})
</script>

<style scoped lang="scss">
.input {
  width: 1000px;
  margin: 0 auto 12px;
  border-radius: 40px;
  padding: 16px;
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 4px solid var(--additional-color__30);
  box-sizing: border-box;
}
</style>
