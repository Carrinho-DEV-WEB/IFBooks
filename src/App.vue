<script setup>
import { ref, provide } from 'vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';

//ADICIONAR ou REMOVER LIVROS DOS FAVORITOS
const favorites = ref([]);
function updateFavorites(book){
  const index = favorites.value.findIndex(f => f.id === book.id);
  if(index === -1){
    favorites.value.push(book);
  }
  else{
    favorites.value.splice(index, 1)
  }
}

provide('updateFavorites', updateFavorites);
provide('favorites', favorites);

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