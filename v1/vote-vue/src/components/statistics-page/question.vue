<template>
  <div class="container">
    <h3 class="question">
      {{ question }}
    </h3>

    <div class="answers">
      <div
          class="answer"
          v-for="({ text, countOfVotes }, index) in answers"
          :key="index"
      >
        <div class="answer-title">
          <span class="answer-title-text">{{ text }}</span>
          <span class="answer-title-percent">
<!--            {{ countOfVotes }}-->
<!--            / -->
            {{ calculatePercentage(countOfVotes, answers.length) }} %
          </span>
        </div>
        <progress class="progress" max="100" :value="calculatePercentage(countOfVotes, answers.length)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  question: {
    type: String,
    default: "Text"
  },

  answers: {
    type: Array,
    default: []
  }
})

function calculatePercentage(votesForItem, totalVotes) {
  if (totalVotes <= 0) return 0; // Возвращаем 0, если нет голосов}

  return (votesForItem / totalVotes) * 100;
}
</script>

<style scoped lang="scss">
.container {
  border-radius: 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  width: auto;
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 4px solid var(--neutral-color);
  background: var(--main-color);

  .question {
    margin: 12px auto 6px;
  }

  .answers {
    width: 100%;
    margin-bottom: 12px;

    .answer {
      padding: 4px 12px;

      &-title {
        display: flex;
        justify-content: space-between;
      }

      .progress {
        margin-top: 8px;
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        border: none;
        border-radius: 10px;
        height: 10px;

        &::-webkit-progress-bar {
          background: var(--neutral-color);
        }

        &::-webkit-progress-value {
          background-color: var(--accent-color);
        }

        &::-webkit-progress-bar,
        &::-webkit-progress-value, {
          border-radius: 10px;
        }

        &::-moz-progress-bar {
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
