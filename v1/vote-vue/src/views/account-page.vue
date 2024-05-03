<template>
  <div class="container">
    <OpportunitiesToCreateAVote />
    <VoteList />
  </div>
</template>

<script setup>
import OpportunitiesToCreateAVote from "@/components/account-page/opportunities-to-create-a-vote.vue";
import VoteList from "@/components/account-page/vote-list.vue";
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
