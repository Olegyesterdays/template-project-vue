<template>
  <div class="container">
    <div class="header">
      <div class="header-content">
        <img src="./assets/OCRV-Logo.svg" alt="">\

        <ButtonMenu @click="testMenu"/>
      </div>

      <div
          class="header-menu"
          :class="test ? 'header-menu__open' : 'header-menu__close'"
      >
        <button class="header-menu-button">
          Что-то пошло не так111111111111111111111111111111
        </button>
        <button class="header-menu-button">
          Что-то пошло не так
        </button>
        <button class="header-menu-button">
          Что-то пошло не так
        </button>
        <button class="header-menu-button">
          Что-то пошло не так
        </button>
        <button class="header-menu-button">
          Что-то пошло не так
        </button>
      </div>
    </div>

    <TableGrid  class="content"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LOGO from "@/assets/OCRV-Logo.svg";
import ButtonMenu from "@/components/test-menu.vue";
import TableGrid from "@/components/table-grid.vue";

const test = ref(false)

function testMenu() {
  test.value =!test.value

  console.log(test.value)
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 1000;
    color: #fff;

    &-content {
      border-bottom: 4px solid red;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;

      img {
        height: 64px;
      }
    }

    &-menu {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: #fff;
      border-bottom: 4px solid red;
      border-left: 4px solid red;
      position: absolute;
      right: 0;
      transition: transform 0.3s;

      &__open {
        transform: translateX(100%);
      }

      &__close {
        transform: translateX(0%);
      }
    }
  }

  .content {
    margin-top: 96px;
    width: 1000px;
  }
}

@media screen and (max-width: 1000px) {
  .container {
    .content {
      width: 100%;
    }
  }
}

@media screen and (max-width: 400px) {
  .container {
    .header {
      &-menu {
        width: 100%;
      }
    }
    .content {
      width: 100%;
    }
  }
}
</style>
