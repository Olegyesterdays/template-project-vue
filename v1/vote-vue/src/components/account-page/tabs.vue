<template>
  <div class="tabs">
    <input type="radio" id="radio-1" name="tabs" @change="newVote" checked/>
    <label class="tab" for="radio-1">
        <span class="text">
          {{ $t("accountPage.notPassed") }}
        </span>

      <span class="mdi mdi-checkbox-blank-outline" />
      <span class="quantity">
          {{ theNumberOfNotPassedVotes }}
        </span>
    </label>

    <input type="radio" id="radio-2" name="tabs" @change="passed"/>
    <label class="tab" for="radio-2">
        <span class="text">
          {{ $t("accountPage.passed") }}
        </span>

      <span class="mdi mdi-checkbox-marked-outline" />
    </label>
    <span class="glider"></span>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {defineProps} from "vue";

const store = useStore();

defineProps({
  theNumberOfNotPassedVotes: {
    type: Number,
    default: 0
  }
})
function newVote() {
  store.commit("accountModule/voteTypeNotPassed")
}

function passed() {
  store.commit("accountModule/voteTypePassed")
}
</script>

<style scoped lang="scss">
.tabs {
  width: 1000px;
  margin: 12px auto;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  position: relative;

  * {
    z-index: 2;
  }

  input[type="radio"] {
    display: none;
  }

  .tab {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;

    .mdi {
      display: none;
    }

    .quantity {
      margin-left: 12px;
      border-radius: 50%;
      font-size: 16px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--accent-color);
      color: var(--main-color);
    }
  }

  input[type="radio"] {
    &:checked {
      & + label {
        .text, .mdi {
          color: var(--main-color);
        }

        .quantity {
          background: var(--main-color);
          color: var(--accent-color);
        }
      }
    }
  }

  input[id="radio-1"] {
    &:checked {
      & ~ .glider {
        transform: translateX(0);
      }
    }
  }

  input[id="radio-2"] {
    &:checked {
      & ~ .glider {
        transform: translateX(100%);
      }
    }
  }

  input[id="radio-3"] {
    &:checked {
      & ~ .glider {
        transform: translateX(200%);
      }
    }
  }

  .glider {
    position: absolute;
    display: flex;
    height: 44px;
    width: 50%;
    background-color: var(--accent-color);
    z-index: 1;
    border-radius: 99px;
    transition: 0.25s ease-out;
  }
}

@media screen and (max-width: 400px) {
  .container {
    .tabs {
      .tab {
        .text {
          display: none;
        }

        .mdi {
          font-size: 32px;
          display: block;
        }
      }
    }
  }
}
</style>
