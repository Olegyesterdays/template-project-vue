<template>
  <input
    class="input placeOfWork"
    type="text"
    placeholder="Место работы"
    @input="editPlaceOfWork($event.target.value)"
    :value="placeOfWork"
    :disabled="role !== 'superuser'"
  >
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();

const placeOfWork = computed(() => store.getters["userProfileModule/getPlaceOfWorkUser"])
const role = computed(() => store.getters["userModule/getRoleUser"])

function editPlaceOfWork(placeOfWork) {
  store.commit("userProfileModule/editPlaceOfWork", { placeOfWork })
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
