<template>
  <div class="container">
    <HeaderApp />

    <div class="pages">
      <router-view />
    </div>

    <TheButtonForQuickNavigationOnThePage />

    <FooterApp />
  </div>
</template>

<script setup>
import HeaderApp from "@/components/header-app/header-app.vue";
import FooterApp from "@/components/footer-app/footer-app.vue";
import TheButtonForQuickNavigationOnThePage from "@/components/the-button-for-quick-navigation-on-the-page.vue";
import {onBeforeMount} from "vue";
import {useStore} from "vuex";

const store = useStore();

onBeforeMount(() => {
  store.dispatch("userModule/installingTheTheme")
})
</script>

<style lang="scss" scoped>
.container {
  //width: 100%;
  //height: 100%;

  .pages {
    width: 100%;
    margin-top: 64px;
    background: var(--main-color);
  }
}
</style>
