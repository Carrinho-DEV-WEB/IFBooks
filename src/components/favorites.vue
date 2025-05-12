<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const favorites = inject('favorites')
const openBookDetails = inject('openBookDetails')
const addToCart = inject('addToCart')
//MUDAR PÁGINA PARA O CARD
function clickBook(book) {
  openBookDetails(book)
  router.push('/Bookcard')
}

//REMOVER DOS FAVORITOS
function deleteFavorite(favorite) {
  const index = favorites.value.findIndex((f) => f.id === favorite.id)
  favorites.value.splice(index, 1)
}
</script>

<template>
  <section class="empty-list" v-if="favorites.length === 0">
    <i class="fa-solid fa-heart-crack"></i>
    <h1>Não há nenhum livro nos seus favoritos.</h1>
    <router-link class="primary" to="/">
      <i class="fa-solid fa-arrow-left"></i> Voltar
    </router-link>
  </section>

  <section class="fav-list" v-else>
    <h1>Livros Favoritos</h1>
    <ul>
      <li v-for="favorite in favorites" :key="favorite.id">
        <img :src="favorite.cover" alt="book cover" @click="clickBook(favorite)" />
        <h2>{{ favorite.title }}</h2>
        <p>{{ favorite.author }}</p>
        <div class="price-area">
          <h3>R$ {{ favorite.price }}</h3>
          <i
            @click="deleteFavorite(favorite)"
            class="fa-solid fa-heart"
            title="Remover dos favoritos"
          ></i>
        </div>
        <button class="primary" @click="addToCart(book)"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
      </li>
    </ul>
    <router-link class="primary" to="/">
      <i class="fa-solid fa-arrow-left"></i> Voltar
    </router-link>
  </section>
</template>

<style scoped>
.empty-list {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.empty-list h1 {
  font-size: 2.5em;
  color: #3fbc73;
  font-weight: bold;
  margin: 1.5vw 0;
}

.empty-list i {
  font-size: 4em;
  color: #1d7541;
}

.primary i{
  font-size: 1.1em;
  margin-right: 0.5vw;
  transition: .4s;
  color: white;
}

.primary:hover i{
    margin-right: 1vw;
}


.fav-list h1 {
  font-size: 2.5em;
  color: #3fbc73;
  font-weight: bold;
  margin-bottom: 1.5vw;
}

.fav-list ul {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
}

.fav-list li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vw 1vw;
  font-size: 1.2em;
}

.fav-list {
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

.price-area {
  display: flex;
  justify-content: space-between;
  font-size: 1.3em;
  margin: 1vw 0 2vw 0;
}

.price-area h3 {
  font-weight: 600;
}

.price-area i {
  color: #27ae60;
  cursor: pointer;
}
</style>
