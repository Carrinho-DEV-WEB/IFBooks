<script setup>
import { ref, provide } from 'vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Bookcard from './components/Bookcard.vue';

const favorites = ref([]);
const openBook = ref(false);
const selectBook = ref(null);

//ADICIONAR ou REMOVER LIVROS DOS FAVORITOS
function updateFavorites(book) {
  const index = favorites.value.findIndex(f => f.id === book.id);
  if (index === -1) {
    favorites.value.push(book);
  }
  else {
    favorites.value.splice(index, 1)
  }
}
//MOSTAR/FECHAR CARD DE PÁGINA DO LIVRO
function openBookDetails(book) {
  openBook.value = true;
  selectBook.value = book;
}

provide('updateFavorites', updateFavorites);
provide('favorites', favorites);
provide('openBook', openBook);
provide('selectBook', selectBook);
provide('openBookDetails', openBookDetails);

</script>

<template>
  <Header />

  <main>
    <router-view />
  </main>

  <Footer />
</template>

<style scoped>
main {
  padding-top: 80px;
}
</style>