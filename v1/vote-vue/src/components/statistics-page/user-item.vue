<template>
  <button class="user-item" @click="clickUser">
    <span class="name">
      {{ name }}
    </span>

<!--    <button class="button button-account" @click.stop="clickAccountUser">-->
<!--      <span class="mdi mdi-account-circle-outline" />-->
<!--    </button>-->
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  userID: {
    type: String
  },

  name: {
    type: String
  }
})

function clickUser() {

}

// function clickAccountUser() {
//
// }
</script>

<style scoped lang="scss">
.user-item {
  display: flex;
  align-items: center;
  justify-content: left;
  //justify-content: space-between;
  padding: 12px;
  border-radius: 12px;
  background: var(--neutral-color);

  .name {

  }

  .button-account {
    padding: 4px;
    border-radius: 50%;

    .mdi-account-circle-outline {

    }
  }
}
</style>
