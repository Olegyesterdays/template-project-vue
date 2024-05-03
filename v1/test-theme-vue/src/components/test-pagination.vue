<template>
  <button @click="clickGetVotes">
    Получить голосования
  </button>

  <button @click="clickGetNewVotes">
    Ещё голосования
  </button>

  <button @click="myVotes">
    Мои голосования
  </button>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

function clickGetVotes() {
  store.dispatch("theVotesICreated")
}

function clickGetNewVotes() {
  store.dispatch("addTheVotesICreated")
}

function myVotes() {
  store.dispatch("myVotes")
}
</script>

<style scoped>

</style>
