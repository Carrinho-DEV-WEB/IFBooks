<script setup>
import { ref, inject } from 'vue'
import Favorites from './favorites.vue'

//CATALOGO DE LIVROS
const books = ref([
  {
    id: 1,
    cover: 'public/images/chainOfIron.png',
    title: 'Chain of Iron: Volume 2',
    description:
      'Cassandra Clare é a autora internacionalmente aclamada das Crônicas dos Caçadores de Sombras, uma série de fantasia best-seller. Em Chain of Iron, o segundo volume da série The Last Hours, ela traz de volta os personagens queridos em um mundo de magia, amor e perigo. Os livros de Clare cativaram milhões de leitores e foram traduzidos para mais de 35 idiomas.',
    author: 'Cassandra Clare',
    price: 23.24,
  },
  {
    id: 2,
    cover: 'public/images/chainOfThorns.png',
    description:
      'O livro final da série The Last Hours, Chain of Thorns de Cassandra Clare, promete concluir a épica história com ação eletrizante e um romance arrebatador. Clare é uma mestre na arte de contar histórias, e suas obras conquistaram uma legião de fãs ao redor do mundo. Com mais de 50 milhões de cópias vendidas, seus livros foram traduzidos para mais de 30 idiomas.',
    title: 'Chain of Thorns',
    author: 'Cassandra Clare',
    price: 23.24,
  },
  {
    id: 3,
    cover: 'public/images/cityOfFallen.png',
    title: 'City of Fallen Angels',
    description:
      'City of Fallen Angels de Cassandra Clare é o quarto livro da série Os Instrumentos Mortais. Conhecida por seus personagens envolventes e construção de mundo intrincada, Clare criou um fenômeno no gênero jovem adulto. Seus livros venderam milhões de cópias e foram traduzidos para mais de 40 idiomas, cativando leitores ao redor do mundo.',
    author: 'Cassandra Clare',
    price: 13.94,
  },
  {
    id: 4,
    cover: 'public/images/nonaTheNinth.png',
    title: 'Nona The Ninth',
    description:
      'Cassandra Clare, uma das grandes promessas da ficção especulativa, é conhecida por sua narrativa sombria e inovadora. Nona the Ninth é o terceiro livro da série The Locked Tomb, uma mistura de ficção científica e fantasia. O estilo único de Muir e seus personagens complexos conquistaram uma base de fãs fiel, e seu trabalho tem sido amplamente aclamado pela crítica.',
    author: 'Cassandra Clare',
    price: 16.84,
  },
  {
    id: 5,
    cover: 'public/images/harlemShuffle.png',
    title: 'Harlem Shurffle',
    description:
      'Colson Whitehead, vencedor de dois Prêmios Pulitzer, leva os leitores a uma jornada pelos anos 1960 em Harlem com Harlem Shuffle. Com uma mistura magistral de história e ficção, Whitehead explora temas de crime, família e identidade em uma cidade vibrante. Seus livros, incluindo O Trem Subterrâneo e Os Meninos da Nickel, foram traduzidos para mais de 30 idiomas.',
    author: 'Colson Whitehead',
    price: 26.92,
  },
  {
    id: 6,
    cover: 'public/images/twoOldWomen.png',
    title: 'Two Old Women',
    description:
      'Two Old Women de Velma Wallis é uma história poderosa sobre sobrevivência, resiliência e amizade, inspirada nas tradições e no folclore dos povos nativos do Alasca. Wallis cativou os leitores com sua narrativa, e o livro se tornou um clássico querido, traduzido para vários idiomas. Sua escrita continua a inspirar e ressoar com o público em todo o mundo.',
    author: 'Velma Wallis',
    price: 13.95,
  },
  {
    id: 7,
    cover: 'public/images/CarrieSotoIsBack.png',
    description:
      'Taylor Jenkins Reid, autora de Os Sete Maridos de Evelyn Hugo, traz aos leitores uma história emocionante sobre o retorno de uma ícone do tênis ao esporte em Carrie Soto Is Back. Conhecida por suas narrativas emocionais e profunda exploração de personagens, as obras de Reid cativaram os leitores e foram traduzidas para vários idiomas, conquistando uma base de fãs global.',
    title: 'Carrie Soto Is Back',
    author: 'Taylor Jenkins Reid',
    price: 26.04,
  },
  {
    id: 8,
    cover: 'public/images/bookLovers.png',
    description:
      'Emily Henry, conhecida por seus romances espirituosos e tocantes, traz uma abordagem refrescante do gênero romântico em Book Lovers. Esta encantadora história sobre uma editora de livros e um agente literário navegando pelo amor, vida e carreira tocou o coração de leitores ao redor do mundo. Os livros de Henry se tornaram bestsellers e foram traduzidos para diversos idiomas, tornando-a uma das autoras contemporâneas mais queridas',
    title: 'Book Lovers',
    author: 'Emily Henry',
    price: 15.81,
  },
])

//MUDA O LIVRO DO BANNER
function recommendedBook() {
  const indexBook = Math.floor(Math.random() * books.value.length)
  return books.value[indexBook]
}
const randomBook = ref(recommendedBook())

//ENVIAR PRODUTOS A FUNÇÃO QUE ADICIONA AOS FAVORITOS
const favorites = inject('favorites');
const updateToFavorites = inject('updateFavorites')

function sendBook(book){
  updateToFavorites({...book})
}
</script>

<template>
  <main>
    <section class="banner">
      <div class="description-autor">
        <button class="secondary">Livro Recomendado</button>
        <h1>{{ randomBook.title }}</h1>
        <p>{{ randomBook.description }}</p>
        <button class="primary">Acessar página do livro</button>
      </div>

      <img :src="randomBook.cover" alt="book image" />
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
          <img :src="book.cover" alt="book cover" />
          <h2>{{ book.title }}</h2>
          <p>{{ book.author }}</p>
          <div class="price-area">
            <h3>R$ {{ book.price }}</h3>
            <i
              @click="sendBook(book)"
              :class="
                favorites.some((fav) => fav.id === book.id)
                  ? 'fa-solid fa-heart'
                  : 'fa-regular fa-heart'
              "
              :title="favorites.some((fav) => fav.id === book.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'"
            ></i>
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

.catalog-books h2 {
  font-size: 2em;
  font-weight: 600;
  margin: 2vw 0 0 5vw;
}

.catalog-books ul {
  display: flex;
  justify-content: center;
  margin: 4vw auto;
  flex-wrap: wrap;
  width: 80%;
}

.catalog-books ul li {
  display: flex;
  flex-direction: column;
  margin: 1vw;
}

.catalog-books ul li h2 {
  font-size: 1.5em;
  font-weight: 600;
  margin: 1vw 0;
}

.catalog-books ul li p {
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
