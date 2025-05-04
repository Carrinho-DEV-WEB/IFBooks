<script setup>
import { inject } from 'vue';

const favorites = inject('favorites');
if (!favorites) {
  console.log('favorites não foi injetado corretamente');
}
</script>

<template>
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
</template>


<style scoped>

</style>