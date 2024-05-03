<template>
  <button
      class="button-menu"
      :class="isMenu ? 'button-menu__open' : ''"
      @click.stop="openingAndClosingMenu"
  >
    <span />
  </button>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from 'vuex';

const store = useStore()
const isMenu = computed(() => store.getters["appModule/getIsMenu"])

function openingAndClosingMenu() {
  store.commit("appModule/switchIsMenu", { condition: !isMenu.value })
  console.log("OK")
}
</script>

<style lang="scss" scoped>
.button-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--neutral-color);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  margin-right: 12px;
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
      background-color: var(--black-color);
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
