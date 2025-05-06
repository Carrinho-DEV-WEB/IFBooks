<script setup>
import { inject } from 'vue';

const favorites = inject('favorites');
if (!favorites) {
  console.log('favorites não foi injetado corretamente');
}
</script>

<template>

<main>

<section class="empty-list" v-if="favorites.length === 0">
  <i class="fa-solid fa-heart-crack"></i>
  <h1>Não há nenhum livro nos seus favoritos.</h1>
</section>

<section class="fav-list" v-else>  
  <ul>
    <li v-for="favorite in favorites" :key="favorite.id">
        <img :src="favorite.cover" alt="book cover">
        <h2>{{ favorite.title }}</h2>
        <p>{{ favorite.author }}</p>
            <h3>R$ {{ favorite.price }}</h3>
        <button class="primary">
          <i class="fa-solid fa-cart-shopping"></i> Comprar
        </button>
    </li>
  </ul>
</section>

</main>
</template>


<style scoped>

</style>