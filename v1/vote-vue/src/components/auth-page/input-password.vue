<template>
  <label class="input-password">
    <span>{{ $t('authPage.authPanel.form.password') }}</span>
    <input
      v-model="password"
      class="input password"
      type="password"
      @input="passwordRecording($event.target.value)"
    >
  </label>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const password = computed(() => store.getters["userModule/getPassword"])

function passwordRecording(password) {
  store.commit("userModule/password", { password })
}
</script>

<style scoped lang="scss">
.input-password {
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
