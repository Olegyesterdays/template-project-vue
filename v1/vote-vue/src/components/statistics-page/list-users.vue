<template>
  <div class="content-list-users">
    <Tabs
      @update:typeUsersList="switchingTheList($event)"
    />

    <div class="list-users">
      <UserItem
        v-for="({ name }, index) in typeUsersList === 'notPassed' ? listUsersWhoDidNotVote : listUsersWhoDidVote"
        :key="index"
        :name="name"
      />
    </div>
  </div>
</template>

<script setup>
import Tabs from '@/components/statistics-page/tabs.vue'
import UserItem from '@/components/statistics-page/user-item.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

const store = useStore()
const typeUsersList = ref(true)
const listUsersWhoDidNotVote = store.getters["statisticsModule/getListUsersWhoDidNotVote"]
const listUsersWhoDidVote= store.getters["statisticsModule/getListUsersWhoDidVote"]

function switchingTheList(type) {
  typeUsersList.value = type
}
</script>

<style scoped lang="scss">
.content-list-users {
  padding: 12px;
  border-radius: 12px;

  .list-users {
    margin-top: 8px;
  }
}
</style>
