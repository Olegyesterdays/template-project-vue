<template>
  <div class="container">
    <header class="header">
      <HeaderLogo />

      <div class="header-buttons">
        <HeaderButtonLocales />
        <HeaderButtonTheme />
        <HeaderButtonMenu />
      </div>
    </header>

    <HeaderMenu
        v-click-outside="openingAndClosingMenu"
        :class="isMenu ? 'menu__open' : 'menu__close'"
    />
  </div>
</template>

<script setup>
import {ref, computed} from "vue";
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import HeaderLogo from "@/components/header-app/header-logo.vue";
import HeaderButtonLocales from "@/components/header-app/header-button-locales.vue";
import HeaderButtonTheme from "@/components/header-app/header-button-theme.vue";
import HeaderButtonMenu from "@/components/header-app/header-button-menu.vue";
import HeaderMenu from "@/components/header-app/header-menu.vue";

const router = useRouter()
const store = useStore()
const isMenu = computed(() => store.getters["userModule/getIsMenu"])
const isMenuButton = ref(true)

router.beforeEach((to, from, next) => {
  isMenuButton.value = !(to.path === '/account/vote' || to.path === '/');
  next();
});

function openingAndClosingMenu() {
  store.commit("userModule/switchIsMenu", { condition: false })
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--accent-color);
    background: var(--main-color);

    &-buttons {
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
