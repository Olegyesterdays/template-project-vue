<template>
  <input
    class="input post"
    type="text"
    placeholder="Должность"
    @input="editPost($event.target.value)"
    :value="post"
    :disabled="role !== 'superuser'"
  >
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();

const post = computed(() => store.getters["userProfileModule/getPostUser"])
const role = computed(() => store.getters["userModule/getRoleUser"])

function editPost(post) {
  store.commit("userProfileModule/editPost", { post })
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
