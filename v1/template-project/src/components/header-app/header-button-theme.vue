<template>
  <button
      class="button theme"
      @click.stop="switchingTheTheme"
  >
    <span
        class="brightness mdi"
        :class="theme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
    />
  </button>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()
const theme = computed(() => store.getters["userModule/getTheme"])

function switchingTheTheme() {
  store.dispatch("userModule/switchTheme")
  store.dispatch("userModule/installingTheTheme")
}
</script>

<style scoped lang="scss">
.button {
  border: 0;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background: var(--accent-color);

  .mdi {
    font-size: 24px;
    color: var(--button-text-color);
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
