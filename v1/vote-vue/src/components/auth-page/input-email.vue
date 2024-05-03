<template>
  <label class="input-email">
    <span>{{ $t('authPage.authPanel.form.email') }}</span>
    <input
      v-model="email"
      class="input email"
      type="email"
      @input="emailRecording($event.target.value)"
    >
  </label>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from 'vue'

const store = useStore()
const email = computed(() => store.getters["userModule/getEmail"])

function emailRecording(email) {
  store.commit("userModule/email", { email })
}
</script>

<style scoped lang="scss">
.input-email {
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  .input {
    margin-top: 8px;
    display: flex;
    padding: 12px;
    border-radius: 12px;
    border: 0;
    width: auto;
    background: var(--neutral-color);
  }
}
</style>
