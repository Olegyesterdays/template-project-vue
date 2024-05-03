<template>
  <button
    class="button"
    @click="saveChanges"
    :disabled="role !== 'superuser'"
  >
    сохранить
  </button>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const role = computed(() => store.getters["userModule/getRoleUser"])

function saveChanges() {
  store.dispatch("userProfileModule/saveChanges")
}
</script>

<style scoped lang="scss">
.button {
  margin: 6px 12px;
  padding: 12px;
  border-radius: 12px;
  border: 0;
  background: var(--neutral-color);

  &:hover {
    background: var(--accent-color);
    color: var(--main-color);
  }

  &:disabled {
    background: var(--secondary-color);
    color: var(--black-color);
  }
}
</style>
