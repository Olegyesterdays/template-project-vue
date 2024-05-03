<template>
  <div class="container">
    <button 
      v-for="(card, index) in cards" 
      :key="index" 
      class="card" 
      @click="clickCard(index)"
    >
      {{ card }}
    </button>
  </div>
</template>
  
<script setup>
import {ref} from 'vue';
// Генерация данных для карточек
function generateCards() {
  const cards = [];
  for (let i = 1; i <= 42; i++) {
    cards.push(`Card ${i}`);
  }
  return cards;
}
function clickCard(index) {
  console.log("card", index + 1);
}

const cards = ref(generateCards());
</script>

<style scoped lang="scss">
.container {
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  border: 4px solid red;

  .card {
    flex-grow: 1;
    height: 250px;
    margin: 10px;
    border: 0;
    background: #56e31e;
  }
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
  