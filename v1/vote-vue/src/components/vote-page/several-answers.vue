<template>
  <div class="severalAnswers">
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
        class="check-box"
        type="checkbox"
        :value="option_id"
        v-model="severalAnswers"
        @change="handleSelection()"
      >

      <span class="check-style" />
    </label>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref, toRaw} from "vue";

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

const severalAnswers = ref([]);

const handleSelection = () => {
  emit('update:severalAnswers', {
    questionId: props.questionId,
    optionId: toRaw(severalAnswers.value)
  })
}
</script>

<style scoped lang="scss">
.severalAnswers {
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

    .check-box {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);

      &:checked + .check-style::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--additional-color);
      }
    }

    .check-style {
      position: absolute;
      border-radius: 4px;
      width: 12px;
      height: 12px;
      right: 16px;
      border: 2px solid var(--secondary-color);
    }
  }
}

@media screen and (max-width: 1000px) {
  .severalAnswers {
    width: 100%;
  }
}
</style>
