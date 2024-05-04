<template>
  <div class="book-page">
    <h1 class="book-page-header">
      {{ title }}
    </h1>

    <div class="book-page-content">
      <span class="mdi mdi-book-open-page-variant-outline" />

      <div class="book-info">
        <div class="book-info-description">
          какое-то описание
        </div>

        <button class="book-info-author">
          {{ author }}
        </button>

        <div class="list-of-genres">
          Список жанров:
          <button
              class="genre" v-for="({ genre, id }, index) in genres"
              :key="index"
              @click="viewingTheGenre(id)"
          >
            {{ genre }}
          </button>
        </div>

        <button class="download">
          скачать
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed } from "vue";
import {useStore} from "vuex";
const store = useStore();

const title = computed(() => store.getters["booksModule/getTitle"])
const author = computed(() => store.getters["booksModule/getAuthor"])
const genres = computed(() => store.getters["booksModule/getGenres"])

function viewingTheGenre(id) {

}
</script>

<style scoped lang="scss">
.book-page {
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--accent-color);
  background: var(--main-color);

  .book-page-header {
    font-size: 64px;
    color: var(--text-color);
  }

  .book-page-content {
    width: 100%;
    display: flex;
    //justify-content: space-between;

    .mdi {
      font-size: 200px;
      padding: 20px;
      color: var(--text-color);
    }

    .book-info {
      width: 100%;
      display: flex;
      flex-direction: column;

      .book-info-description {
        color: var(--text-color);
        margin-bottom: 6px;
      }

      .book-info-author {
        margin-right: auto;
        border: 0;
        background: var(--main-color);
        color: var(--accent-color);
        padding-left: 0;
        margin-bottom: 6px;
      }

      .list-of-genres {
        display: flex;
        flex-direction: column;
        color: var(--text-color);
        margin-bottom: 6px;

        .genre {
          margin-right: 100%;
          padding-left: 0;
          border: 0;
          background: var(--main-color);
          color: var(--accent-color);
        }
      }

      .download {
        margin-top: auto;
        padding: 12px;
        border: 12px;
        border-radius: 12px;
        background: var(--accent-color);
        color: var(--button-text-color);
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .book-page {
    width: 100%;
  }
}
</style>
