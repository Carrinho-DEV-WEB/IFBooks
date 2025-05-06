<script setup>
import { ref, provide } from 'vue'

//MOVER ENTRE OS COMPONENTES
const currentPage = ref('home');
function changePage(page){
  currentPage.value = page
}

//ADICIONAR LIVROS AOS FAVORITOS
const favorites = ref([]);
function addFavorites(book){
  if(!favorites.value.find(fav => fav.id === book.id)){
    favorites.value.push(book);
  }
}
provide('favorites', favorites);
provide('addFavorites', addFavorites);

</script>

<template>
  <Header @change-page="changePage"/>

  <section v-if=" currentPage === 'home' ">
    <Home />
    <Favorites />
  </section>
  
  <Footer />
</template>

<style scoped>
  
</style>