<template>
  <div class="container">
    <div class="menu-opportunities">
      <h3>
        {{ $t("accountPage.createVote") }}
      </h3>

      <button
          class="all-my-votes"
          :class="isAllMyVotes ? 'all-my-votes__open' : ''"
          @click="viewAllMyVotes"
      >
        <span class="mdi mdi-chevron-down"/>
      </button>
    </div>

    <div class="my-votes" ref="animatedMyVotes">
      <button class="button button-create-vote" @click="createVote">
        <span class="mdi mdi-plus" />
      </button>

      <MyCreateVoteItem
          v-for="({ quiz_id, title, imgURI }, index) in myVotes"
          :key="index"
          :voteID="quiz_id"
          :title="title"
      />

      <div v-intersection="uploadMoreVotes" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MyCreateVoteItem from "@/components/account-page/my-create-vote-item.vue";

const store = useStore();
const router = useRouter();
const isAllMyVotes = ref(false);
const myVotes = computed(() => store.getters["accountModule/getMyVote"])
const maxHeight = ref("250px");
const isOpen = ref(false);
const animatedMyVotes = ref(null);

onMounted(() => {
  store.dispatch("accountModule/myCreated")
})
function viewAllMyVotes() {
  isAllMyVotes.value = !isAllMyVotes.value
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(() => {
      maxHeight.value = `${animatedMyVotes.value.scrollHeight}px`;
    });
  } else {
    maxHeight.value = "250px";
  }
}

function createVote() {
  router.push({ path: "/account/createVote" });
}

function uploadMoreVotes() {
  store.dispatch("accountModule/addMyCreated")
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--neutral-color);

  .menu-opportunities {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    h3 {
      margin: 0;
      height: 40px;
      display: flex;
      align-items: center;
    }

    .all-my-votes {
      width: 40px;
      height: 40px;
      background: var(--neutral-color);
      border: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4px;

      &:hover {
        background: var(--main-color);
      }

      span {
        font-size: 40px;
        transition: transform 0.3s; /* Добавлено для анимации */
      }

      &__open {
        span {
          transform: rotate(180deg); /* Добавлено для поворота при активации */
        }
      }
    }
  }

  .my-votes {
    width: 1000px;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: flex-start;
    gap: 25px;
    overflow: hidden;
    transition: max-height 0.3s ease;
    max-height: v-bind(maxHeight);

    .button {
      height: 250px;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      border: 4px solid var(--accent-color);
      background: var(--neutral-color);

      &-create-vote {
        font-size: 88px;

        .mdi {
          color: var(--accent-color);
        }
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
}

@media screen and (max-width: 1012px) {
  .container {
    margin: 0 12px;

    .menu-opportunities, .my-votes {
      width: 100%;
    }

    .my-votes {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    .my-votes {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    .my-votes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 400px) {
  .container {
    .my-votes {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
