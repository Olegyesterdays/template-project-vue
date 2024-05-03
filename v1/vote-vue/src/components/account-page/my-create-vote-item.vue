<template>
  <button
      class="button item"
      @click="statistics"
  >
    <span class="mdi mdi-vote"/>
    <span class="title">
      {{ title }}
    </span>
  </button>

<!--  <img v-if="ava !== ''" :src="ava" alt="">-->
</template>

<script setup>
import {useRouter} from "vue-router";
import {defineProps, onMounted} from "vue";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

const props = defineProps({
  title: {
    type: String
  },

  date: {
    type: String
  },

  voteID: {
    type: String
  },

  ava: {
    type: String
  }
})

function statistics() {
  // store.commit("statisticsModule/voteID", { voteID: props.voteID})
  router.push({ path: `/account/statistics/${ props.voteID }` });
}
</script>

<style scoped lang="scss">
.button {
  height: 250px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: 4px solid var(--accent-color);
  background: var(--neutral-color);
  opacity: 1;
  animation: anim 0.5s forwards;

  @keyframes anim {
    to {
      opacity: 1;
    }

    from {
      opacity: 0;
    }
  }

  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
    z-index: 5;
  }

  .mdi-vote {
    font-size: 88px;
    position: absolute;
    width: 100%;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    color: var(--accent-color);
  }

  .title {
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, -50%);
    background: var(--neutral-color);
    width: 100%;
    height: 20%;
    z-index: 10;
  }

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
</style>
