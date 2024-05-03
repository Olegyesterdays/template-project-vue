<template>
  <button
      class="button theme"
      @click="switchingTheTheme"
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
const theme = computed(() => store.getters["userModule/getCurrentTheme"])

function switchingTheTheme() {
  store.commit("userModule/switchTheme")
}
</script>

<style scoped lang="scss">
.button {
  border: 0;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background: var(--neutral-color);

  .mdi {
    font-size: 28px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
