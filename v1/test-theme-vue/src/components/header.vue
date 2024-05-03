<template>
  <div class="background">
    <button @click="clickButton">Сменить тему</button>
  </div>
</template>

<script setup>
import {ref, onBeforeMount, computed} from "vue";
import { useStore } from "vuex";

const store = useStore();

const theme = ref("light-theme")
function clickButton() {
  theme.value = localStorage.getItem("theme") === "light-theme" ? "dark-theme" : "light-theme"
  localStorage.setItem("theme", theme.value);
}

onBeforeMount(() => {
  // Получение значения переменной theme из локального хранилища
  localStorage.setItem("theme", "light-theme")
  const storedTheme = localStorage.getItem('theme');
  console.log(storedTheme)
});

</script>

<style scoped>
.background {
  position: fixed;
  top: 12px;
  right: 12px;

  button {
    padding: 12px;
    border-radius: 12px;
    cursor: pointer;
    border: 0;
    background: var(--my-dop-background-color-light-theme);
    color: var(--my-dop-background-color-dark-theme);
    box-shadow: 0 4px 6px var(--shadow-color);

    &:hover {
      background: var(--red);
      color: var(--my-main-background-color-light-theme);
    }

    &:active {
      transform: scale(0.90);
    }
  }
}
</style>
