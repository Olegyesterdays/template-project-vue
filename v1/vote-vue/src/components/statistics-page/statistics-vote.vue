<template>
  <div class="container">
    <VoteContent />
    <Question
      v-for="({ text, options }, index) in questions"
      :key="index"
      :question="text"
      :answers="options"
    />
  </div>
</template>

<script setup>
import VoteContent from "@/components/statistics-page/vote-content.vue"
import Question from "@/components/statistics-page/question.vue"
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter();

const questions = computed(() => store.getters["statisticsModule/getQuestions"])

onMounted(() => {
  store.dispatch("statisticsModule/statisticsOnVote")
  store.dispatch("statisticsModule/statisticsOnQuestions")
})
</script>

<style scoped lang="scss">

</style>
