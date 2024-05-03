<template>
  <div class="form-container">
    <div class="auth-or-login">
      <button>auth</button>
      <button>login</button>
    </div>

    <div class="auth-form-container">
      <InputEmail />
      <InputFullName />
      <InputLogin />
      <InputPassword />
      <InputTelephone />
    </div>

    <div class="login-form-container">
      <InputLogin />
      <InputPassword />
    </div>

    <button>
      Войти
    </button>
  </div>
</template>

<script setup>
import InputEmail from "@/components/auth-page/input-email.vue";
import InputFullName from "@/components/auth-page/input-full-name.vue";
import InputLogin from "@/components/auth-page/input-login.vue";
import InputPassword from "@/components/auth-page/input-password.vue";
import InputTelephone from "@/components/auth-page/input-telephone.vue";

</script>

<style scoped lang="scss">
.form-container {
  display: flex;
  flex-direction: column;

  .auth-or-login {
    display: flex;
  }

  .auth-form-container {
    display: flex;
    flex-direction: column;
  }

  .login-form-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
