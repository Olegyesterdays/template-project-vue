<template>
  <button
      class="button"
      @click="clickItem"
  >
    <span>
      {{ name }}
    </span>

    <button
        class="button-delete"
        @click.stop="clickDelete(index)"
    >
      <span class="mdi mdi-delete" />
    </button>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore()

defineProps({
  name: {
    type: String,
    default: "Иванов Иван Иваныч"
  },

  index: {
    type: String,
  }
})

function clickItem() {

}

function clickDelete(index) {
  store.commit("createVoteModule/deleteUser", { index: index })
}
</script>

<style scoped lang="scss">
.button {
  border: 0;
  display: flex;
  text-align: left;
  margin-top: 12px;
  padding: 4px 12px;
  align-items: center;
  border-radius: 12px;
  background: var(--neutral-color);
  justify-content: space-between;
  box-shadow: 0 4px 6px var(--shadow-color);

  .button-delete {
    border: 0;
    width: 32px;
    padding: 2px;
    height: 32px;
    display: flex;
    font-size: 24px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: var(--neutral-color);

    &:hover {
      background: var(--accent-color);

      .mdi {
        color: var(--main-color);
      }
    }

    &:active {
      transform: scale(0.95);
    }
  }

  &:first-child {
    margin: 0;
  }
}
</style>
