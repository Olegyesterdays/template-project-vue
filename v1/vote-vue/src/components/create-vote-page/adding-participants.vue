<template>
  <button
    class="button creatingOrParticipants"
    @click="switchCreatingOrParticipants"
  >
    Участники голосования
  </button>

<!--  <VotingParticipants v-if="creatingOrParticipants === 'participants'" />-->
</template>

<script setup>
import { useStore } from 'vuex'
import VotingParticipants from '@/components/create-vote-page/voting-participants.vue'

const store = useStore();

function switchCreatingOrParticipants() {
  store.commit("createVoteModule/creatingOrParticipants")
}
</script>

<style scoped lang="scss">
.button {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 0;
  background: var(--neutral-color);
  box-shadow: 0 4px 6px var(--shadow-color);
  margin-bottom: 8px;

  &:hover {
    background: var(--accent-color);
    color: var(--main-color);
  }
}
</style>
