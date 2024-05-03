<template>
  <input
    class="input surname"
    type="text"
    placeholder="Фамилия"
    @input="editSurname($event.target.value)"
    :value="surname"
    :disabled="role !== 'superuser'"
  >
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();

const surname = computed(() => store.getters["userProfileModule/getSurnameUser"])
const role = computed(() => store.getters["userModule/getRoleUser"])

function editSurname(surname) {
  store.commit("userProfileModule/editSurname", { surname })
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
