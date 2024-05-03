<template>
  <div class="title">
    <input
      class="input-question"
      type="text"
      placeholder="Вопрос"
      @input="recordTitleQuestion($event.target.value, indexQuestion)"
    />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineProps } from 'vue'

const store = useStore()

defineProps({
  indexQuestion: {
    type: String
  }
})
function recordTitleQuestion(titleQuestion, indexQuestion) {
  store.commit('createVoteModule/recordTitleQuestion', { titleQuestion, indexQuestion })
}
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  .input-question {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 0;
    text-align: center;
  }

  .delete {
    margin-left: 8px;
    border: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: var(--main-color);

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
