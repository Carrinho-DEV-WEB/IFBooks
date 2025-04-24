<script setup>
import { ref } from 'vue'

const books = ref([
  {
    id: 1,
    cover: 'public/images/chainOfIron.png',
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
  },
  {
    id: 2,
    cover: 'public/images/chainOfThorns.png',
    title: 'Chain of Thorns',
    author: 'Cassandra Clare',
    price: 23.24,
  },
  {
    id: 3,
    cover: 'public/images/cityOfFallen.png',
    title: 'City of Fallen Angels',
    author: 'Cassandra Clare',
    price: 13.94,
  },
  {
    id: 4,
    cover: 'public/images/nonaTheNinth.png',
    title: 'Nona The Ninth',
    author: 'Cassandra Clare',
    price: 16.84,
  },
  {
    id: 5,
    cover: 'public/images/harlemShuffle.png',
    title: 'Harlem Shurffle',
    author: 'Colson Whitehead',
    price: 26.92,
  },
  {
    id: 6,
    cover: 'public/images/twoOldWomen.png',
    title: 'Two Old Women',
    author: 'Velma Wallis',
    price: 13.95,
  },
  {
    id: 7,
    cover: 'public/images/CarrieSotoIsBack.png',
    title: 'Carrie Soto Is Back',
    author: 'Taylor Jenkins Reid',
    price: 26.04,
  },
  {
    id: 8,
    cover: 'public/images/bookLovers.png',
    title: 'Book Lovers',
    author: 'Emily Henry',
    price: 15.81,
  },
])
</script>

<template>
  <Header />
  <main>
    <section class="banner">
      <div class="description-autor">
        <button class="secondary">Autor de Abril</button>
        <h1>Eric-Emanuel Schmitt</h1>
        <p>
          Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and
          in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been
          translated into over 40 languages.
        </p>
        <button class="primary">Acessar página do livro</button>
      </div>

      <img src="/public/images/livroBanner.png" alt="Nocognia book" />
    </section>

    <section class="catalog-options">
      <ul>
        <li>
          <i class="fa-solid fa-truck"></i>
          <h2>Frete grátis para SC</h2>
          |
        </li>
        <li>
          <i class="fa-solid fa-star"></i>
          <h2>Livros recomendados</h2>
          |
        </li>
        <li>
          <i class="fa-solid fa-book-open"></i>
          <h2 class="actived">Mais vendidos</h2>
        </li>
      </ul>
    </section>

    <section class="catalog-books">
        <h2>Lançamentos</h2>

        <ul>

            <li v-for="book in books" :key="book.id">
                <img :src="book.cover" alt="book cover">
                <h2>{{ book.title }}</h2>
                <p>{{ book.author }}</p>
                <div class="price-area">
                    <h3>R$ {{ book.price }}</h3>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <button class="primary"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
            </li>

        </ul>

    </section>
  </main>
</template>

<style scoped>
/*========================
        BANNER
*==========================*/

main {
  padding-top: 30px;
}

.banner {
  display: flex;
  align-items: center;
  margin: 2vw 5vw;
}

.description-autor h1 {
  font-size: 3.5em;
  font-weight: bold;
  margin: 1vw 0 2vw 0;
}

.description-autor p {
  font-size: 1.5em;
  width: 70%;
  margin-bottom: 2vw;
}

/*=======================
    CATOLOG OPTIONS
=========================*/
.catalog-options ul {
  display: flex;
  justify-content: center;
  padding: 3vw;
  border-top: #27ae60 solid 2px;
  border-bottom: #27ae60 solid 2px;
}

.catalog-options ul li {
  display: flex;
  margin-left: 2vw;
  font-size: 1.2em;
  cursor: pointer;
}

.catalog-options ul li h2 {
  font-weight: 700;
  margin: 0 1vw;
}

.actived {
  border-bottom: 2px solid black;
}

/*==========================
        CATALOG-BOOKS
===========================*/

.catalog-books h2{
    font-size: 2em;
    font-weight: 600;
    margin: 2vw 0 0 5vw;
}

.catalog-books ul{
    display: flex;
    justify-content: center;
    margin: 4vw auto;
    flex-wrap: wrap;
    width: 80%;
}

.catalog-books ul li{
    margin:1vw;
}

.catalog-books ul li h2{
    font-size: 1.5em;
    font-weight: 600;
    margin: 1vw 0;
}

.catalog-books ul li p{
    font-size: 1.1em;
}

.price-area{
    display: flex;
    justify-content: space-between;
    font-size: 1.3em;
    margin: 1vw 0 2vw 0;
}

.price-area h3{
    font-weight: 600;
}

.price-area i{
  color: #27ae60;
  cursor: pointer;
}
</style>
