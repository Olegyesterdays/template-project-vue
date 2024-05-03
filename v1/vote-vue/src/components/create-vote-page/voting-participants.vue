<template>
  <div class="container">
    <input class="input" type="text" placeholder="ФИО">

    <div v-if="listUsers.length !== 0" class="list-users">
      <UserItem
          v-for="({ name }, index) in listUsers"
          :key="index"
          :name="name"
          :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import UserItem from "@/components/create-vote-page/user-item.vue";
import { computed } from "vue";
import { useStore} from "vuex";

const store = useStore()

const listUsers = computed(() => store.getters["createVoteModule/getListUsers"])
</script>

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: var(--main-color);
  border: 4px solid var(--neutral-color);
  box-sizing: border-box;

  .input {
    margin: 12px;
    padding: 12px;
    border: 0;
    border-radius: 12px;
    background: var(--neutral-color);
    box-shadow: 0 4px 6px var(--shadow-color);
  }

  .list-users {
    margin: 0 12px 12px;
    display: flex;
    flex-direction: column;
  }
}
</style>
