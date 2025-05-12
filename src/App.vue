<script setup>
import { ref, provide } from 'vue';
import { reactive } from 'vue'
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import { RouterView } from 'vue-router'

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

// ADICIONAR OU REMOVER LIVROS DO CARRINHO
const cart = reactive([])

function addToCart(book) {
  const existing = cart.find(item => item.id === book.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.push({ ...book, quantity: 1 })
  }
}

function removeFromCart(bookId) {
  const index = cart.findIndex(item => item.id === bookId)
  if (index !== -1) cart.splice(index, 1)
}

function updateQuantity(bookId, amount) {
  const item = cart.find(b => b.id === bookId)
  if (item) {
    item.quantity += amount
    if (item.quantity < 1) removeFromCart(bookId)
  }
}


//MOSTAR/FECHAR CARD DE PÁGINA DO LIVRO
function openBookDetails(book) {
  openBook.value = true;
  selectBook.value = book;
}

// GUARDAR O LIVRO PESQUISADO PELO USUÁRIO
const searchBook = ref('')


provide ('searchBook', searchBook)
provide('updateFavorites', updateFavorites);
provide('favorites', favorites);
provide('openBook', openBook);
provide('selectBook', selectBook);
provide('openBookDetails', openBookDetails);
provide('addToCart', addToCart);
provide('cart', cart)

</script>

<template>
  <Header :cart="cart" />

  <main>
    <Router-view 
    :cart="cart" 
    :addToCart="addToCart" 
    :removeFromCart="removeFromCart" 
    :updateQuantity="updateQuantity" 
    />
  </main>

  <Footer />
</template>

<style scoped>
main {
  padding-top: 80px;
}
</style>