<template>
  <div class="menu">
    <button class="button" @click="profile">
      профиль
    </button>

    <button class="button" @click="exit">
      выход
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {computed, defineEmits} from "vue";

const store = useStore()
const router = useRouter();
const emit = defineEmits();

function profile() {
  // emit('update:close', true)
  // router.push({ path: "/account/userProfilePage" });
}

function exit() {
  // emit('update:close', true)
  // store.commit("userModule/clearDataUser");
  // router.push({ path: "/" });
}
</script>

<style scoped lang="scss">
.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: var(--main-color);
  border-left: 1px solid var(--accent-color);
  overflow: hidden;

  .button {
    padding: 12px;
    margin: 12px 12px 0;
    border-radius: 12px;
    border: 0;
    background: var(--accent-color);
    color: var(--button-text-color);

    &:last-child {
      margin-bottom: 12px;
    }
  }
}
</style>
