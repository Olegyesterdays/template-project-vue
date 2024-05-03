<template>
  <button class="button the-quick-move-button" @click="scrollToTopOrBottom">
    <span
        class="mdi mdi-arrow-up"
        :class="upOrDown ? 'icon__up' : ''"
    />
  </button>
</template>

<script setup>
import {ref} from 'vue';

const scrollPosition = ref('top');
const upOrDown = ref(false)
let savedScrollPosition = 0;

function scrollToTopOrBottom() {
  upOrDown.value = !upOrDown.value
  if (scrollPosition.value === 'top') {
    savedScrollPosition = window.scrollY;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    scrollPosition.value = 'bottom';
  } else {
    window.scrollTo({
      top: savedScrollPosition,
      behavior: 'smooth'
    });
    scrollPosition.value = 'top';
  }
}
</script>

<style scoped lang="scss">
.the-quick-move-button {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 44px;
  height: 44px;
  z-index: 100;
  bottom: 10px;
  right: 10px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  border: 0;
  border-radius: 12px;

  span {
    color: var(--main-color);
    font-size: 24px;
    transition: transform 0.3s;
  }

  .icon__up {
    transform: rotate(-180deg);
  }
}
</style>
