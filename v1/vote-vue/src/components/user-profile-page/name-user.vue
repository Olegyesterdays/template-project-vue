<template>
  <input
    class="input name"
    type="text"
    placeholder="Имя"
    @input="editName($event.target.value)"
    :value="name"
    :disabled="role !== 'superuser'"
  >
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const name = computed(() => store.getters["userProfileModule/getNameUser"])
const role = computed(() => store.getters["userModule/getRoleUser"])

function editName(name) {
  store.commit("userProfileModule/editName", { name })
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
