<template>
  <div class="container">
    <div
      class="question"
      v-for="(question, indexQuestion) in questions"
      :key="indexQuestion"
      @click.stop="clickOnTheQuestionCard"
      v-click-outside="clickNotOnTheQuestionCard"
    >
      <InputTitleQuestion
        :value="question.titleQuestion"
        :indexQuestion="indexQuestion"
      />


      <div class="answers">
        <InputAnswerQuestion
          v-for="(option, indexAnswer) in question.options" :key="indexAnswer"
          :value="option.text"
          :typeQuestion="question.typeQuestion"
          :indexQuestion="indexQuestion"
          :indexAnswer="indexAnswer"
          :questionOptionsLength="question.options.length"
        />
      </div>

      <MenuSettings
        v-if="editingAQuestion"
        :questionsLength="questions.length"
        :indexQuestion="indexQuestion"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import InputTitleQuestion from '@/components/create-vote-page/input-title-question.vue'
import InputAnswerQuestion from '@/components/create-vote-page/input-answer-question.vue'
import MenuSettings from '@/components/create-vote-page/menu-settings.vue'

const store = useStore()

const editingAQuestion = computed(() => store.getters['createVoteModule/getEditingAQuestion'])
const questions = computed(() => store.getters['createVoteModule/getQuestions'])

function clickOnTheQuestionCard() {
  store.commit('createVoteModule/clickOnTheQuestionCard')
}
function clickNotOnTheQuestionCard() {
  store.commit('createVoteModule/clickNotOnTheQuestionCard')
}
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;

  .question {
    padding: 12px;
    border-radius: 20px;
    margin: 8px 0;
    box-shadow: 0 4px 6px var(--shadow-color);
    border: 4px solid var(--neutral-color);
    background: var(--main-color);
    position: relative;

    .answers {
      display: flex;
      flex-direction: column;

      .button {
        margin-top: 8px;
        padding: 12px;
        border-radius: 12px;
        border: 0;
        background: var(--neutral-color);

        &:hover {
          background: var(--accent-color);
          color: var(--main-color);
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
