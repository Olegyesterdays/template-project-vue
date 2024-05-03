<template>
  <div class="oneAnswers">
    <h3 class="title">
      {{ titleQuestion }}
    </h3>

    <label
      class="answer"
      v-for="({ option_id, text }, index) in options"
      :key="index"
    >
      {{ text }}
      <input
        class="radio-button"
        type="radio"
        :value="option_id"
        v-model="oneAnswer"
        @change="handleSelection()"
      >

      <span class="radio-style" />
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  questionId: {
    type: Number
  },

  titleQuestion: {
    type: String
  },

  options: {
    type: Array
  }
})

const emit = defineEmits();

const oneAnswer = ref([]);

const handleSelection = () => {
  emit('update:oneAnswer', {
    questionId: props.questionId,
    optionId: [oneAnswer.value]
  })
}
</script>

<style scoped lang="scss">
.oneAnswers {
  box-sizing: border-box;
  border-radius: 12px;
  padding: 8px;
  margin: auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  border: 4px solid var(--neutral-color);
  box-shadow: 0 4px 6px var(--shadow-color);

  .title {
    margin: 0 auto;
  }

  .answer {
    margin-top: 8px;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    position: relative;
    background: var(--neutral-color);

    .radio-button {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);

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
      right: 16px;
      border: 2px solid var(--secondary-color);
    }
  }
}

@media screen and (max-width: 1000px) {
  .oneAnswers {
    width: 100%;
  }
}
</style>
