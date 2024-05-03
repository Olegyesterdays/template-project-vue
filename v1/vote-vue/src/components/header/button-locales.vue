<template>
  <button
      class="button locales"
      @click="toggleLanguage"
  >
    {{ $t("header.toggleLanguage") }}
  </button>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

function toggleLanguage() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru';
}
</script>

<style scoped lang="scss">
.button {
  border: 0;
  padding: 0 12px;
  border-radius: 8px;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background: var(--neutral-color);

  .mdi {
    font-size: 28px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
