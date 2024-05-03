<template>
  <input
    class="input patronymic"
    type="text"
    placeholder="Отчечтво"
    @input="editPatronymic($event.target.value)"
    :value="patronymic"
    :disabled="role !== 'superuser'"
  >
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();

const patronymic = computed(() => store.getters["userProfileModule/getPatronymicUser"])
const role = computed(() => store.getters["userModule/getRoleUser"])

function editPatronymic(patronymic) {
  store.commit("userProfileModule/editPatronymic", { patronymic })
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
