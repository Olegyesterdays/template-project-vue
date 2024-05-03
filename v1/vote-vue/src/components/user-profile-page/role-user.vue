<template>
  <input
    class="input role"
    type="text"
    placeholder="Права"
    @input="editRole($event.target.value)"
    :value="roleUser"
    :disabled="role !== 'superuser'"
  >
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();

const roleUser = computed(() => store.getters["userProfileModule/getRoleUser"])
const role = computed(() => store.getters["userModule/getRoleUser"])

function editRole(role) {
  store.commit("userProfileModule/editRole", { role })
}
</script>

<style scoped lang="scss">
.input {
  margin: 6px 12px;
  padding: 12px;
  border-radius: 12px;
  border: 0;
  background: var(--neutral-color);

  &:disabled {
    background: var(--secondary-color);
  }
}
</style>
