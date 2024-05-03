<template>
  <button
      class="menu"
      :class="isMenu ? 'menu__open' : ''"
      @click="openingAndClosingMenu"
  >
    <span/>
  </button>
</template>

<script setup>
import { ref } from "vue"

const isMenu = ref(false)

function openingAndClosingMenu() {
  isMenu.value = !isMenu.value
}
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--neutral-color);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  margin: 25px;
  border: 0;

  span {
    transition-duration: 0s;
    transition-delay: 0.2s;

    &:before, &:after {
      transition-property: margin, transform;
      transition-duration: 0.2s;
      transition-delay: 0.2s, 0s;
      position: absolute;
      content: '';
    }

    &, &:before, &:after {
      width: 20px;
      height: 4px;
      background-color: #000;
      display: block;
    }

    &:before {
      margin-top: -8px;
    }

    &:after {
      margin-top: 8px;
    }
  }

  &__open span {
    background-color: rgba(0, 0, 0, 0.0);

    &:before {
      margin-top: 0;
      transform: rotate(45deg);
      transition-delay: 0s, 0.2s;
    }

    &:after {
      margin-top: 0;
      transform: rotate(-45deg);
      transition-delay: 0s, 0.2s;
    }
  }
}
</style>
