<template>
  <div class="container">
    <NameUser />
    <SurnameUser />
    <PatronymicUser />
    <PlaceOfWorkUser />
    <RoleUser />
    <PostUser />

    <ButtonSaveChanges />
  </div>
</template>

<script setup>
import NameUser from '@/components/user-profile-page/name-user.vue'
import SurnameUser from '@/components/user-profile-page/surname-user.vue'
import PatronymicUser from '@/components/user-profile-page/patronymic-user.vue'
import PlaceOfWorkUser from '@/components/user-profile-page/placeOfWork-user.vue'
import RoleUser from '@/components/user-profile-page/role-user.vue'
import PostUser from '@/components/user-profile-page/post-user.vue'
import ButtonSaveChanges from '@/components/user-profile-page/button-save-changes.vue'
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 6px 0;
  background: var(--main-color);
  border: 4px solid var(--neutral-color);
}
</style>
