<template>
  <label class="input-fullName">
    <span>{{ $t('authPage.authPanel.form.fullName') }}</span>
    <input
      v-model="fullName"
      class="input fullName"
      type="text"
      @input="fullNameRecording($event.target.value)"
    >
  </label>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const fullName = computed(() => store.getters["userModule/getFullName"])

function fullNameRecording(fullName) {
  store.commit("userModule/fullName", { fullName })
}
</script>

<style scoped lang="scss">
.input-fullName {
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
