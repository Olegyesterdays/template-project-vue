<template>
  <div class="container">
    <h1>
      404 - {{ $t("notFoundPage.header") }}
    </h1>

    <p>
      {{ $t("notFoundPage.description") }}
    </p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 200px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
