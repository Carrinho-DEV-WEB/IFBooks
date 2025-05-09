<script setup>
import { inject } from 'vue';

const favorites = inject('favorites');
</script>

<template>

<section class="empty-list" v-if="favorites.length === 0">
  <i class="fa-solid fa-heart-crack"></i>
  <h1>Não há nenhum livro nos seus favoritos.</h1>
</section>

<section class="fav-list" v-else>  
  <h1>Livros Favoritos</h1>
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

</template>


<style scoped>
  .empty-list{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .empty-list h1{
    font-size: 2.5em;
    color: #3fbc73;
    font-weight: bold;
    margin-top: 1.5vw;
  }

  .empty-list i{
    font-size: 4em;
    color: #1d7541;
  }

  .fav-list h1{
    font-size: 2.5em;
    color: #3fbc73;
    font-weight: bold;
    margin-bottom: 1.5vw;
  }

  .fav-list ul{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;
  }

  .fav-list li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1vw 1vw;
    font-size: 1.2em;
  }

  .fav-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3vw;
  }

  .fav-list ul li h2 {
  font-size: 1.3em;
  font-weight: 600;
  margin: 1vw 0 0.5vw 0;
}

.fav-list ul li p {
  font-size: 1.1em;
}

.fav-list ul li h3{
  font-size: 1.3em;
  font-weight: 600;
  margin: 2vw 0 1vw 0;
}
</style>