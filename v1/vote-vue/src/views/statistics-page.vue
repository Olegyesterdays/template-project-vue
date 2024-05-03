<template>
  <div class="container-statistics-page">
    <AdditionalInformation class="additional-information" />
    <StatisticsVote class="statistics-vote" />
  </div>
</template>

<script setup>
import AdditionalInformation from "@/components/statistics-page/additional-information.vue";
import StatisticsVote from "@/components/statistics-page/statistics-vote.vue";
import { onMounted } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

onMounted(() => {
  store.commit("statisticsModule/voteID", { voteID: parseInt(route.params.id) });
  store.dispatch("statisticsModule/statisticsOnVote");
  store.dispatch("statisticsModule/statisticsOnQuestions");
})
</script>

<style scoped lang="scss">
.container-statistics-page {
  margin: auto;
  width: 1000px;
  display: flex;
  flex-direction: column;

  .statistics-vote {
    margin-bottom: 400px;
  }
}

@media screen and (max-width: 1000px) {
  .container-statistics-page {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .container-statistics-page {
    .statistics-vote {
      margin-bottom: 0;
    }
  }
}
</style>
