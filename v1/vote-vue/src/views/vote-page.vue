<template>
  <div class="container">
    <VoteContent />

    <div class="questions">
      <div
          class="question"
          v-for="({ question_id, titleQuestion, typeQuestion, options }, index) in questions"
          :key="index"
      >
        <OneAnswer
            v-if="typeQuestion === 'one answer'"
            :questionId="question_id"
            :titleQuestion="titleQuestion"
            :options="options"
            @update:oneAnswer="writeDownTheAnswer($event)"
        />

        <SeveralAnswers
            v-if="typeQuestion === 'several answers'"
            :questionId="question_id"
            :titleQuestion="titleQuestion"
            :options="options"
            @update:severalAnswers="writeDownTheAnswer($event)"
        />
      </div>
    </div>

    <button
        @click="sendAnswers"
        class="sendAnswers"
    >
      {{ $t("votePage.send") }}
    </button>
  </div>
</template>

<script setup>
import VoteContent from "@/components/vote-page/vote-content.vue";
import OneAnswer from "@/components/vote-page/one-answer.vue";
import SeveralAnswers from "@/components/vote-page/several-answers.vue";
import { computed, onMounted, ref, toRaw } from 'vue'
import { useStore } from "vuex";

const store = useStore();

const questions = computed(() => store.getters["voteModule/getQuestions"]);

onMounted(() => {
  store.dispatch("voteModule/gettingVote")
})

function writeDownTheAnswer({ questionId, optionId }) {
  store.commit("voteModule/writeDownAnswer", { questionId, optionId })
}

function sendAnswers() {
  console.log(store.getters["voteModule/getAnswers"])
  store.dispatch("voteModule/sendAnswers")
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;

  .questions {
    .question {
      margin-bottom: 8px;
    }
  }

  .sendAnswers {
    width: 1000px;
    padding: 12px;
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 0;
    border-radius: 12px;
    margin: 0 auto 400px;
    background: var(--neutral-color);

    &:hover {
      background: var(--accent-color);
      color: var(--main-color);
    }
  }
}

@media screen and (max-width: 1000px) {
  .container {
    .sendAnswers {
      width: 100%;
    }
  }
}
</style>
