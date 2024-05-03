<template>
  <div class="container">
    <AddingParticipants />

    <CreatingATitleAndDescription />
    <CreateQuestion />

    <div class="buttons">
      <ButtonAddQuestion />
      <ButtonCreate />
      <ButtonCreateAndPublish />
    </div>
  </div>
</template>

<script setup>
import CreatingATitleAndDescription from "@/components/create-vote-page/creating-a-title-and-description.vue"
import CreateQuestion from "@/components/create-vote-page/create-question.vue"
import ButtonAddQuestion from '@/components/create-vote-page/button-add-question.vue'
import ButtonCreate from '@/components/create-vote-page/button-create.vue'
import ButtonCreateAndPublish from '@/components/create-vote-page/button-create-and-publish.vue'
import AddingParticipants from '@/components/create-vote-page/adding-participants.vue'
</script>

<style scoped lang="scss">
.container {
  width: 1000px;
  margin: auto;

  .creatingOrParticipants {
    margin-top: 8px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 1000px) {
  .container {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    .buttons {
      .button:last-child {
        margin-bottom: 12px;
      }
    }
  }
}
</style>
