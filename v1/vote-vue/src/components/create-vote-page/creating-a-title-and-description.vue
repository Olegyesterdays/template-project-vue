<template>
  <div class="container">
    <img
        class="img"
        :src="ava"
        :alt="$t('createVotePage.creatingATitleAndDescription.img.imageAlt')"
    />

    <button
        class="button"
        @click="addPicture"
    >
      {{ ava === "" ?
        $t("createVotePage.creatingATitleAndDescription.img.addImage") :
        $t("createVotePage.creatingATitleAndDescription.img.deleteImage")
      }}
    </button>

    <label class="title-vote">
      <input
          class="input"
          type="text"
          :placeholder="$t('createVotePage.creatingATitleAndDescription.titleVote')"
          @input="writeDownTitleVote($event.target.value)"
      >
    </label>

    <label class="description-vote">
      <input
          class="input"
          type="text"
          :placeholder="$t('createVotePage.creatingATitleAndDescription.descriptionVote')"
          @input="writeDownDescriptionVote($event.target.value)"
      >
    </label>
  </div>
</template>

<script setup>
import ava from "@/assets/ava.jpg";
import { useStore } from "vuex";

const store = useStore()

function addPicture() {

}

function writeDownTitleVote(title) {
  store.commit("createVoteModule/addTitle", { title: title })
}

function writeDownDescriptionVote(description) {
  store.commit("createVoteModule/addDescription", { description: description })
}
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 4px 6px var(--shadow-color);
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
  background: var(--main-color);
  border: 4px solid var(--neutral-color);

  .img {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
  }

  .button {
    margin: 8px 12px;
    padding: 12px;
    border-radius: 12px;
    border: 0;
    background: var(--neutral-color);

    &:hover {
      background: var(--accent-color);
      color: var(--main-color);
    }
  }

  .title-vote, .description-vote {
    margin: 8px 12px;
    display: flex;
    flex-direction: column;

    .title {
      margin-bottom: 4px;
    }

    .input {
      padding: 12px;
      border-radius: 12px;
      border: 0;
      background: var(--neutral-color);
    }
  }

  .description-vote {
    margin-bottom: 12px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
