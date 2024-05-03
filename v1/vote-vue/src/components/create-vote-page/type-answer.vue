<template>
  <div class="type-answer">
    <div class="one-answer">
      <label>
        <input
          class="radio-button"
          type="radio"
          value="one answer"
          v-model="oneItems"
          @change="oneAnswer"
        >
        <span class="radio-style" />
        Один ответ
      </label>
    </div>

    <div class="several-answers">
      <label>
        <input
          checked
          class="radio-button"
          type="radio"
          value="several answers"
          v-model="oneItems"
          @change="severalAnswers"
        >
        <span class="radio-style" />
        Несколько ответов
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed, defineEmits, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits()
const oneItems = ref([])

function oneAnswer() {
  emit('update:oneAnswer', 'one answer')
}

function severalAnswers() {
  emit('update:severalAnswers', 'several answers')
}
</script>

<style scoped lang="scss">
.type-answer {
  display: flex;
  flex-direction: column;
  width: 200px;

  .one-answer, .several-answers {
    margin-left: 24px;

    label {
      cursor: pointer;
      margin: 6px 0;
      display: block;

      .radio-button {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        padding-left: 24px;

        &:checked + .radio-style::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--additional-color);
        }
      }

      .radio-style {
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-left: -24px;
        border: 2px solid var(--secondary-color);
      }
    }
  }
}
</style>
