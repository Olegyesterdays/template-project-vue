<template>
  <div class="form">
    <InputEmail />
    <InputPassword />
    <InputFullName />
  </div>
</template>

<script setup>
import InputEmail from '@/components/auth-page/input-email.vue'
import InputPassword from '@/components/auth-page/input-password.vue'
import InputFullName from '@/components/auth-page/input-fullName.vue'
</script>

<style scoped lang="scss">
.form {
  margin: 0 12px 12px 12px;
  display: flex;
  flex-direction: column;
}
</style>
