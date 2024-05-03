<template>
  <div class="parent-component">
    <button @click="toggleAnimation">Нажми меня</button>
    <div class="animated-container" ref="animatedContainer">
      <!-- Внутреннее содержимое компонента -->
      <h1>qwerty</h1>
      <h1>qwerty</h1>
      <h1>qwerty</h1>
      <h1>qwerty</h1>
      <h1>qwerty</h1>
      <h1>qwerty</h1>
    </div>
  </div>
</template>

<script setup>
import {ref, nextTick} from 'vue';

const maxHeight = ref("250px");
const isOpen = ref(false);
const animatedContainer = ref(null);

function toggleAnimation() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(() => {
      maxHeight.value = `${animatedContainer.value.scrollHeight}px`;
    });
  } else {
    maxHeight.value = "250px";
  }
}
</script>

<style scoped lang="scss">
.parent-component {
  /* Стили для родительского компонента */
  border: 2px solid red;
}

.animated-container {
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: v-bind(maxHeight);
}
</style>
