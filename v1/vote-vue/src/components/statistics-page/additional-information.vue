<template>
  <div class="container">
    <div class="content">
      <div class="additional-information">
        <div class="item number-of-questions">
          <div class="title">
            {{ $t("statisticsPage.additionalInformation.numberOfQuestions") }}
          </div>
          <div class="number">
            {{ numberOfQuestions }}
          </div>
        </div>

        <div class="item date-of-creation">
          <div class="title">
            {{ $t("statisticsPage.additionalInformation.dateOfCreation") }}
          </div>
          <div class="date">
            {{ dateOfCreation }}
          </div>
        </div>

        <div class="item number-of-participants">
          <div class="title">
            {{ $t("statisticsPage.additionalInformation.numberOfParticipants") }}
          </div>
          <div class="number">
            {{ numberOfParticipants }}
          </div>
        </div>
      </div>

<!--      <ListUsers />-->

<!--      <button class="button list-users" @click="listUsers">-->
<!--        Список пользователь-->
<!--      </button>-->

      <button class="button end-voting" @click="endVoting">
        {{ $t("statisticsPage.additionalInformation.endVoting") }}
      </button>

      <button class="button delete-vote" @click="deleteVoting">
        {{ $t("statisticsPage.additionalInformation.deleteVoting") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import ListUsers from '@/components/statistics-page/list-users.vue'

const store = useStore()
const router = useRouter()

const numberOfQuestions = computed(() => store.getters['statisticsModule/getNumberOfQuestions'])
const dateOfCreation = computed(() => store.getters['statisticsModule/getDateOfCreation'])
const numberOfParticipants = computed(() => store.getters['statisticsModule/getNumberOfParticipants'])

function listUsers() {

}

function endVoting() {
  store.dispatch("statisticsModule/endVoting")
}

function deleteVoting() {
  store.dispatch("statisticsModule/deleteVoting")
  router.push('/account')
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 8px;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 4px 6px var(--shadow-color);
  background: var(--main-color);
  border: 4px solid var(--neutral-color);

  .content {
    display: flex;
    flex-direction: column;

    .additional-information {
      padding: 8px 8px 4px;
      border-radius: 12px;

      .item {
        margin: 12px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .button {
      margin: 8px;
      padding: 12px;
      border-radius: 12px;
      border: 0;
      background: var(--neutral-color);

      &:hover {
        background: var(--accent-color);
        color: var(--main-color);
      }
    }

    .delete-vote {
      margin-bottom: 12px;
    }
  }
}
</style>
