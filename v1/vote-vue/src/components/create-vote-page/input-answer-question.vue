<template>
  <div class="answer">
    <div class="input">
      <input
        type="text"
        placeholder="Ответ"
        @input="recordTheAnswer($event.target.value, indexQuestion, indexAnswer)"
      />


      <span
        :class="typeQuestion === 'one answer' ? 'radio-style' : 'check-style'"
      />
    </div>

    <button
      v-if="(questionOptionsLength > 1) && editingAQuestion"
      class="delete"
      @click="deleteAnswer(indexQuestion, indexAnswer)"
    >
      <span class="mdi mdi-delete" />
    </button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, defineProps } from 'vue'

const store = useStore()

const props = defineProps({
  typeQuestion: {
    type: String
  },

  indexQuestion: {
    type: String
  },

  indexAnswer: {
    type: String
  },

  questionOptionsLength: {
    type: Number
  }
})
const typeAnswers = computed(() => store.getters['createVoteModule/getTypeAnswers'](props.indexQuestion))
// const typeAnswers = store.getters['createVoteModule/getTypeAnswers', { indexQuestion: props.indexQuestion }]
const editingAQuestion = computed(() => store.getters['createVoteModule/getEditingAQuestion'])
function recordTheAnswer(answer, indexQuestion, indexAnswer) {
  store.commit('createVoteModule/recordTheAnswer', { answer, indexQuestion, indexAnswer })
}

function deleteAnswer(indexQuestion, indexAnswer) {
  store.commit('createVoteModule/deleteAnswer', { indexQuestion, indexAnswer })
}
</script>

<style scoped lang="scss">
.answer {
  display: flex;
  align-items: center;
  margin-top: 6px;

  .input {
    background: var(--neutral-color);
    padding: 12px;
    border-radius: 12px;
    border: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 100%;
      border: 0;
      background: var(--neutral-color);
    }

    .radio-style {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      right: 16px;
      border: 2px solid var(--secondary-color);
    }

    .check-style {
      border-radius: 4px;
      width: 12px;
      height: 12px;
      right: 16px;
      border: 2px solid var(--secondary-color);
    }
  }


  .delete {
    margin-left: 8px;
    border: 0;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: var(--neutral-color);

    .mdi-delete {
      font-size: 24px;
    }

    &:hover {
      background: var(--accent-color);

      .mdi-delete {
        color: var(--main-color);
      }
    }

    .mdi {
      padding: 8px;
    }
  }
}
</style>
