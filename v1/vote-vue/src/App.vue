<template>
  <div class="container">
    <Header />

    <router-view class="content" />

    <TheQuickMoveButton />
  </div>
</template>

<script setup>
import Header from "@/components/header/header.vue";
import { useStore } from 'vuex';
import { computed, onMounted, ref } from "vue";
import TheQuickMoveButton from "@/components/the-quick-move-button.vue";

const store = useStore();
const isMenu = computed(() => store.getters["appModule/getIsMenu"]);
const isScrollable = ref(false);

// Проверяем, есть ли возможность прокрутки страницы
function checkScrollable() {
  isScrollable.value = document.body.scrollHeight > window.innerHeight;
}

// Вызываем функцию для проверки при монтировании компонента
onMounted(() => {
  checkScrollable();
});

// Добавляем обработчик изменения размеров окна браузера
window.addEventListener('resize', checkScrollable);
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--main-color);

  .content {
    margin-top: 68px;
  }
}
</style>
