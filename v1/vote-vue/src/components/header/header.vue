<template>
  <div class="container-header">
    <div class="header">
      <img
          class="logo"
          :src="LOGO"
          alt="logo"
          @click="account"
      >

      <div class="buttons">
        <ButtonLocales />

        <ButtonTheme />

        <ButtonMenu v-if="isMenuButton" />
      </div>
    </div>

    <HeaderMenu
        class="menu"
        :class="isMenu ? 'menu__open' : 'menu__close'"
        v-click-outside="openingAndClosingMenu"
        @update:close="openingAndClosingMenu"
    />
  </div>
</template>

<script setup>
import LOGO from "@/assets/OCRV-Logo.svg";
import HeaderMenu from "@/components/header/header-menu.vue";
import ButtonLocales from "@/components/header/button-locales.vue";
import ButtonTheme from "@/components/header/button-theme.vue";
import ButtonMenu from "@/components/header/button-menu.vue";
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {ref, computed} from "vue";

const router = useRouter()
const store = useStore()
const isMenu = computed(() => store.getters["appModule/getIsMenu"])
const isMenuButton = ref(true)

router.beforeEach((to, from, next) => {
  isMenuButton.value = !(to.path === '/account/vote' || to.path === '/');
  next();
});

function account() {
  router.push({ path: "/account" });
}

function openingAndClosingMenu() {
  store.commit("appModule/switchIsMenu", { condition: false })
}
</script>

<style scoped lang="scss">
.container-header {
  position: fixed;
  width: 100%;
  z-index: 1000;

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    background: var(--main-color);
    border-bottom: 4px solid var(--neutral-color);

    .logo {
      height: 64px;
    }

    .buttons {
      display: flex;
    }
  }

  .menu {
    position: absolute;
    right: 0;
    height: 100vh;
    //width: 100%;
    transition: transform 0.3s;
    background: var(--main-color);

    &__open {
      transform: translateX(0%);
    }

    &__close {
      transform: translateX(100%);
    }
  }
}
</style>
