<template>
  <div class="container-not-found-page">
    <h1>
      404 - {{ $t("not-found-page.header") }}
    </h1>

    <p>
      {{ $t("not-found-page.description") }}
    </p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.container-not-found-page {
  width: 100%;
  height: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: var(--main-color);

  h1 {
    margin-top: 200px;
  }

  h1, p {
    color: var(--text-color);
  }
}
// Для мониторов — 1280 px, 1600 px, 1920 px и выше.
@media screen and (max-width: 1920px) {
  .container-not-found-page {

  }
}

@media screen and (max-width: 1600px) {
  .container-not-found-page {

  }
}

@media screen and (max-width: 1280px) {
  .container-not-found-page {

  }
}

// Для нетбуков — 1024 px и выше;
@media screen and (max-width: 1024px) {
  .container-not-found-page {

  }
}

// Для планшетов — 768 px и выше;
@media screen and (max-width: 768px) {
  .container-not-found-page {

  }
}

// Для смартфонов — 320 px, 480 px и выше;
@media screen and (max-width: 480px) {
  .container-not-found-page {

  }
}

@media screen and (max-width: 320px) {
  .container-not-found-page {

  }
}
</style>
