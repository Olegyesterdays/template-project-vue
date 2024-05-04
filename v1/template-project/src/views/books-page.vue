<template>
  <div class="books-page">
    <div class="container">
      <CardBook
          v-for="({ title, author, genres }, index) in cards"
          :key="index"
          :title="title"
          :author="author"
          :genres="genres"
          @click="clickCard(index)"
      />
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue';

import CardBook from "@/components/books-page/card-book.vue";

import {useStore} from "vuex";
import {useRouter} from "vue-router";

const router = useRouter();
const store = useStore();

function clickCard(index) {
  store.commit("booksModule/theBookBeingViewed", { theBookBeingViewed: index })
  router.push({ path: "/bookPage" });
}

const cards = computed(() => store.getters["booksModule/getBooksList"]);
</script>

<style scoped lang="scss">
.books-page {
  width: 100%;
  height: 100%;
  background: var(--main-color);
}
.container {
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  background: var(--main-color);
}

@media screen and (max-width: 1000px) {
  .container {
    width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 400px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

