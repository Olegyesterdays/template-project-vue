<template>
  <div class="test">
    <div class="content">
      Какой-то важный текст Какой-то важный текст Какой-то важный текст Какой-то важный текст Какой-то важный текст Какой-то важный текст
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.test {
  .button {
    padding: 12px;
  }

  .content {
    margin-top: 12px;
    border-radius: 8px;
    border: 4px solid red;
    width: 100px;
    padding: 12px;

    /* Анимация появления */
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
  }

}


</style>
