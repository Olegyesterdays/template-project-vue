<template>
  <div class="container">
    <div class="list">
      <input
          class="input"
          type="text"
          placeholder="ФИО"
      >

      <div class="list-users">
        <UserItem
            v-for="({ name }, index) in users"
            :key="index"
            :name="name"
        />
      </div>
    </div>

    <div class="buttons">
      <button class="button back">
        <span class="mdi mdi-chevron-left" />
      </button>

      <button class="button next">
        <span class="mdi mdi-chevron-right" />
      </button>
    </div>
  </div>
</template>

<script setup>
import UserItem from "@/components/list-users/user-item.vue";
import { ref } from "vue";

const users = ref([
  {
    name: "Иванов Иван Иваныч 1"
  },
  {
    name: "Иванов Иван Иваныч 2"
  },
  {
    name: "Иванов Иван Иваныч 3"
  },
  {
    name: "Иванов Иван Иваныч 4"
  },
  {
    name: "Иванов Иван Иваныч 5"
  },
  {
    name: "Иванов Иван Иваныч 6"
  },
  {
    name: "Иванов Иван Иваныч 7"
  },
  {
    name: "Иванов Иван Иваныч 8"
  },
  {
    name: "Иванов Иван Иваныч 9"
  },
  {
    name: "Иванов Иван Иваныч 10"
  }
])
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;
  border-radius: 12px;
  background: var(--neutral-color);
  box-shadow: 0 4px 6px var(--shadow-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .list {
    display: flex;
    flex-direction: column;
    height: 578px;

    .input {
      margin: 12px 12px 6px;
      padding: 12px;
      border: 0;
      border-radius: 12px;
      box-shadow: 0 4px 6px var(--shadow-color);
    }

    .list-users {
      margin: 6px 12px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  }

  .buttons {
    margin: 6px 12px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .button {
      width: 100%;
      border-radius: 12px;
      border: 0;
      background: var(--main-color);
      box-shadow: 0 4px 6px var(--shadow-color);

      .mdi {
        font-size: 40px;
      }

      &:hover {
        background: var(--accent-color);

        .mdi {
          color: var(--main-color);
        }
      }
    }

    .back {
      margin-right: 6px;
    }

    .next {
      margin-left: 6px;
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
