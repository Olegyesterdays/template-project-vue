<template>
  <div class="menu-settings">
    <TypeAnswer
      @update:oneAnswer="typeQuestion('one answer', indexQuestion)"
      @update:severalAnswers="typeQuestion('several answers', indexQuestion)"
    />

    <button class="button add-answer" @click="newAnswer(indexQuestion)">
      Добавить ответ
    </button>

    <button
      v-if="questionsLength > 1"
      class="button delete-answer"
      @click="deleteQuestion(indexQuestion)"
    >
      Удалить вопрос
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'

import TypeAnswer from '@/components/create-vote-page/type-answer.vue'

const store = useStore()

defineProps({
  indexQuestion: {
    type: String
  },

  questionsLength: {
    type: Number
  }
})
function typeQuestion(type, indexQuestion) {
  store.commit('createVoteModule/typeQuestion', { type, indexQuestion })
}

function newAnswer(indexQuestion) {
  store.commit('createVoteModule/newAnswer', { indexQuestion })
}

function deleteQuestion(indexQuestion) {
  store.commit('createVoteModule/deleteQuestion', { indexQuestion })
}
</script>

<style scoped lang="scss">
.menu-settings {
  position: absolute;
  top: 0;
  left: 101%;
  background: var(--main-color);
  border-radius: 12px;
  padding: 12px;
  border: 4px solid var(--neutral-color);
  display: flex;
  flex-direction: column;

  .button {
    margin-top: 8px;
    padding: 8px;
    border: 0;
    border-radius: 8px;
    background: var(--neutral-color);
  }
}
</style>
