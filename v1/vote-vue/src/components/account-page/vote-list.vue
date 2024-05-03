<template>
  <div class="container">
    <Tabs :theNumberOfNotPassedVotes="votingNotPassed.length" />

    <SearchVote />

    <div class="vote-list">
      <MyVoteItem
          v-for="({
              quiz_id,
              title,
              description,
              img,
              published_on,
              closed_on
          }, index) in voteType === 'NotPassed' ? votingNotPassed : votingPassed"
          :key="index"
          :title="title"
          :voteID="quiz_id"
          :voteType="voteType === 'NotPassed'"
      />

      <div v-intersection="uploadMoreVotes" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import {useStore} from "vuex"
import {useRouter} from "vue-router"

import Tabs from "@/components/account-page/tabs.vue"
import SearchVote from '@/components/account-page/search-vote.vue'
import MyVoteItem from "@/components/account-page/my-vote-item.vue"

const store = useStore();
const router = useRouter();
const voteType = computed(() => store.getters["accountModule/getVoteType"])
const votingNotPassed = computed(() => store.getters["accountModule/getNotPassed"])
const votingPassed = computed(() => store.getters["accountModule/getPassed"])

onMounted(() => {
  store.dispatch("accountModule/onlyNotCompleted")
  store.dispatch("accountModule/onlyCompleted")
})

function uploadMoreVotes() {
  store.dispatch(`accountModule/${
    voteType.value === "NotPassed" ? "addOnlyNotCompleted" : "addOnlyCompleted"
  }`)
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .vote-list {
    width: 1000px;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 25px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
}

@media screen and (max-width: 1012px) {
  .container {
    margin: 0 12px;

    .tabs, .vote-list, .input {
      width: 100%;
    }

    .vote-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    .vote-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    .vote-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 400px) {
  .container {
    .vote-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
