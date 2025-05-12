<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const favorites = inject('favorites')
const updateToFavorites = inject('updateFavorites')
const openBookDetails = inject('openBookDetails')
const addToCart = inject('addToCart')
const cart = inject('cart')
//CATALOGO DE LIVROS
const books = ref([
  {
    id: 1,
    cover: '/images/chainOfIron.png',
    title: 'Chain of Iron: Volume 2',
    publication: '2021',
    description:
      'Cassandra Clare é a autora internacionalmente aclamada das Crônicas dos Caçadores de Sombras, uma série de fantasia best-seller. Em Chain of Iron, o segundo volume da série The Last Hours, ela traz de volta os personagens queridos em um mundo de magia, amor e perigo. Os livros de Clare cativaram milhões de leitores e foram traduzidos para mais de 35 idiomas.',
    review:
      'Chain of Iron mergulha os leitores ainda mais fundo no universo sombrio e fascinante criado por Cassandra Clare. Neste segundo volume da trilogia The Last Hours, os personagens enfrentam novos desafios que testam os limites de sua coragem e lealdade. A narrativa é repleta de reviravoltas, com um enredo habilmente entrelaçado de romance, mistério e batalhas sobrenaturais. Clare entrega diálogos emocionantes e desenvolvimento de personagens que prendem a atenção do início ao fim. Uma leitura imperdível para fãs de fantasia urbana.',
    author: 'Cassandra Clare',
    price: 23.24,
  },
  {
    id: 2,
    cover: '/images/chainOfThorns.png',
    title: 'Chain of Thorns',
    publication: '2023',
    description:
      'O livro final da série The Last Hours, Chain of Thorns de Cassandra Clare, promete concluir a épica história com ação eletrizante e um romance arrebatador. Clare é uma mestre na arte de contar histórias, e suas obras conquistaram uma legião de fãs ao redor do mundo. Com mais de 50 milhões de cópias vendidas, seus livros foram traduzidos para mais de 30 idiomas.',
    review:
      'Chain of Thorns é o grandioso encerramento da trilogia The Last Hours, oferecendo uma conclusão emocionalmente impactante e cheia de ação. Cassandra Clare equilibra habilmente cenas de batalhas intensas com momentos íntimos de romance e descobertas pessoais. Os personagens evoluem significativamente, confrontando o passado e redefinindo seu futuro. Clare encerra a série com maestria, entregando um final que é tanto satisfatório quanto melancólico. Uma jornada épica para leitores que acompanharam essa saga desde o início.',
    author: 'Cassandra Clare',
    price: 23.24,
  },
  {
    id: 3,
    cover: '/images/cityOfFallen.png',
    title: 'City of Fallen Angels',
    publication: '2011',
    description:
      'City of Fallen Angels de Cassandra Clare é o quarto livro da série Os Instrumentos Mortais. Conhecida por seus personagens envolventes e construção de mundo intrincada, Clare criou um fenômeno no gênero jovem adulto. Seus livros venderam milhões de cópias e foram traduzidos para mais de 40 idiomas, cativando leitores ao redor do mundo.',
    review:
      'Em City of Fallen Angels, Cassandra Clare continua sua aclamada série Os Instrumentos Mortais com uma trama mais sombria e emocionalmente carregada. A tensão entre os personagens principais aumenta, assim como o perigo que os cerca. O livro explora as consequências das escolhas feitas anteriormente e mergulha mais fundo nos dilemas morais e nas emoções humanas. Clare mantém o leitor intrigado com sua escrita fluida, personagens carismáticos e um enredo que cresce em intensidade a cada página.',
    author: 'Cassandra Clare',
    price: 13.94,
  },
  {
    id: 4,
    cover: '/images/nonaTheNinth.png',
    title: 'Nona The Ninth',
    publication: '2022',
    description:
      'Cassandra Clare, uma das grandes promessas da ficção especulativa, é conhecida por sua narrativa sombria e inovadora. Nona the Ninth é o terceiro livro da série The Locked Tomb, uma mistura de ficção científica e fantasia. O estilo único de Muir e seus personagens complexos conquistaram uma base de fãs fiel, e seu trabalho tem sido amplamente aclamado pela crítica.',
    review:
      'Nona the Ninth é uma obra singular dentro da ficção científica e da fantasia, misturando elementos de necromancia, identidade e transformação pessoal. Com uma protagonista intrigante e um universo complexo, o livro oferece uma leitura desafiadora e recompensadora. Clare cria uma atmosfera de estranheza e beleza ao mesmo tempo, com um enredo que exige atenção e reflexão. Para os leitores que buscam algo fora do comum e com profundidade filosófica, este é um excelente exemplar.',
    author: 'Cassandra Clare',
    price: 16.84,
  },
  {
    id: 5,
    cover: '/images/harlemShuffle.png',
    publication: '2021',
    title: 'Harlem Shurffle',
    description:
      'Colson Whitehead, vencedor de dois Prêmios Pulitzer, leva os leitores a uma jornada pelos anos 1960 em Harlem com Harlem Shuffle. Com uma mistura magistral de história e ficção, Whitehead explora temas de crime, família e identidade em uma cidade vibrante. Seus livros, incluindo O Trem Subterrâneo e Os Meninos da Nickel, foram traduzidos para mais de 30 idiomas.',
    review:
      'Harlem Shuffle é uma vibrante mistura de ficção criminal e retrato social, onde Colson Whitehead nos transporta para a Nova York dos anos 1960 com maestria. A história acompanha Ray Carney, um vendedor de móveis com um pé no mundo do crime, enquanto tenta equilibrar moralidade e sobrevivência. Com diálogos afiados, ambientação riquíssima e críticas sociais sutis, o livro é tanto um romance de personagem quanto uma análise da dinâmica racial e econômica da época. Um romance urbano elegante e cheio de camadas.',
    author: 'Colson Whitehead',
    price: 26.92,
  },
  {
    id: 6,
    cover: '/images/twoOldWomen.png',
    title: 'Two Old Women',
    publication: '1993',
    description:
      'Two Old Women de Velma Wallis é uma história poderosa sobre sobrevivência, resiliência e amizade, inspirada nas tradições e no folclore dos povos nativos do Alasca. Wallis cativou os leitores com sua narrativa, e o livro se tornou um clássico querido, traduzido para vários idiomas. Sua escrita continua a inspirar e ressoar com o público em todo o mundo.',
    review:
      'Baseado em uma lenda ancestral, Two Old Women é um conto inspirador de superação e sabedoria. Velma Wallis conta a história de duas idosas deixadas para morrer por sua tribo durante o inverno rigoroso. Em vez de sucumbirem, elas usam sua experiência e coragem para sobreviver, redescobrindo sua força e independência. O livro é curto, mas profundamente tocante, oferecendo lições sobre dignidade, coragem e reconciliação. Uma joia literária que fala direto ao coração.',
    author: 'Velma Wallis',
    price: 13.95,
  },
  {
    id: 7,
    cover: '/images/CarrieSotoIsBack.png',
    title: 'Carrie Soto Is Back',
    publication: '2022',
    description:
      'Taylor Jenkins Reid, autora de Os Sete Maridos de Evelyn Hugo, traz aos leitores uma história emocionante sobre o retorno de uma ícone do tênis ao esporte em Carrie Soto Is Back. Conhecida por suas narrativas emocionais e profunda exploração de personagens, as obras de Reid cativaram os leitores e foram traduzidas para vários idiomas, conquistando uma base de fãs global.',
    review:
      'Carrie Soto Is Back é uma celebração da força feminina, da determinação e da complexidade emocional por trás das grandes conquistas. Taylor Jenkins Reid mergulha na mente de uma atleta lendária que decide retornar ao topo do tênis, enfrentando não só adversárias mais jovens, mas também seus próprios limites físicos e emocionais. A narrativa é envolvente, com ritmo ágil e muitos momentos de reflexão. Uma história inspiradora sobre identidade, envelhecimento e a eterna busca pela excelência.',
    author: 'Taylor Jenkins Reid',
    price: 26.04,
  },
  {
    id: 8,
    cover: '/images/bookLovers.png',
    title: 'Book Lovers',
    publication: '2022',
    description:
      'Emily Henry, conhecida por seus romances espirituosos e tocantes, traz uma abordagem refrescante do gênero romântico em Book Lovers. Esta encantadora história sobre uma editora de livros e um agente literário navegando pelo amor, vida e carreira tocou o coração de leitores ao redor do mundo. Os livros de Henry se tornaram bestsellers e foram traduzidos para diversos idiomas, tornando-a uma das autoras contemporâneas mais queridas',
    review:
      'Book Lovers é um romance encantador e cheio de camadas, que vai além da comédia romântica tradicional. Emily Henry apresenta personagens bem construídos, vulneráveis e engraçados, em uma trama que celebra os livros, os relacionamentos e os recomeços. A química entre os protagonistas é palpável, e os diálogos são inteligentes e emocionantes. Ideal para quem busca uma leitura leve, mas com profundidade emocional e literária.',
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
function sendBook(book) {
  updateToFavorites({ ...book })
}

//MUDAR DA PAGINA PARA O CARD
function clickBook(book) {
  openBookDetails(book)
  router.push('/Bookcard')
}
</script>

<template>
  <main>
    <section class="banner">
      <div class="description-autor">
        <button class="secondary">Livro Recomendado</button>
        <h1>{{ randomBook.title }}</h1>
        <p>{{ randomBook.description }}</p>
        <button class="primary" @click="clickBook(randomBook)">Acessar página do livro</button>
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
          <img
            :src="book.cover"
            alt="book cover"
            @click="clickBook(book)"
            title="Ver detalhes do livro"
          />
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
              :title="
                favorites.some((fav) => fav.id === book.id)
                  ? 'Remover dos favoritos'
                  : 'Adicionar aos favoritos'
              "
            ></i>
          </div>
          <button :class="cart.some((item) => item.id === book.id) ? 'inCart' : 'primary'" @click="addToCart(book)">
            <i class="fa-solid fa-cart-shopping"></i>
              {{ cart.some((item) => item.id === book.id) ? 'Adicionado' : 'Comprar' }}
          </button>
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
