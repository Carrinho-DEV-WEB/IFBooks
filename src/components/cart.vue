<script setup>
defineProps(['cart', 'removeFromCart', 'updateQuantity']);
import { inject } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const openBookDetails = inject('openBookDetails');

function clickBook(book) {
  openBookDetails(book)
  router.push('/Bookcard')
}
</script>
<template>
  <div class="cart">
  

    <div v-if="cart.length === 0" class="hollow-cart">
        <div>
            
                <i class="fa-solid fa-cart-shopping  my-icon"></i>

            <h1>Não há nenhum livro no seu carrinho</h1>
      <router-link class="primary" to="/">
      <i class="fa-solid fa-arrow-left"></i> Voltar
    </router-link>
        </div>
    </div>

    <div v-else>
        <h2>Carrinho</h2>
      <div class="tqs">
        <ul>
          <li>Título</li>
          <li>Quantidade</li>
          <li>Subtotal</li>
        </ul>
      </div>

      <div v-for="item in cart" :key="item.id" class="item">
        <div class="book-info">
          <img :src="item.cover" alt="item.title" @click="clickBook(item)"/>
          <div class="info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.author }}</p>
          </div>
        </div>

        <div class="quantity">
          <button @click="updateQuantity(item.id, -1)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="updateQuantity(item.id, 1)">+</button>
        </div>

        <p class="price">R${{ (item.price * item.quantity).toFixed(2) }}</p>
      </div>

        <button class="return" @click="router.push('/')">Voltar para loja</button>

      <div class="summary">
        <input placeholder="Código do cupom" />
        <button class="secondary">Inserir Cupom</button>

        <div class="totals">
          <h3>Total da compra</h3>

          <div class="line">
            <span>Produtos:</span>
            <span>R${{ cart.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2) }}</span>
          </div>

          <hr />

          <div class="line">
            <span>Frete:</span>
            <span>Grátis</span>
          </div>

          <hr />

          <div class="line total">
            <span>Total:</span>
            <span>R${{ cart.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2) }}</span>
          </div>

          <button class="payment">Ir para pagamento</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.hollow-cart {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh;   
}

.my-icon {
    font-size: 4.2vw;
    color: #27ae60;
    margin: 0 19.4vw;
}

.hollow-cart h1 {
    font-size: 2.5em;
  color: #3fbc73;
  font-weight: bold;
  margin: 2.4vw 0;
}

.primary {
    margin: 0 17.5vw;
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

.cart {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 24px;
}

h2 {
  font-size: 28px;
  margin-bottom: 24px;
  font-weight: bold;
  color: #27ae60;
}

.tqs ul {
  display: grid;
  grid-template-columns: 3fr 2.2fr 0.1fr;
  list-style: none;
  padding: 0;
  border-bottom: 2px solid #27ae60;
  font-weight: bold;
  padding-bottom: 8px;
  margin-bottom: 24px;
}

.item {
  display: grid;
  grid-template-columns: 3fr 7fr 1fr;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 16px;
}

.book-info {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.book-info img {
  width: 80px;
  height: auto;
  border-radius: 4px;
}

.info h3 {
  font-size: 16px;
  margin: 0;
}

.info p {
  font-size: 14px;
  color: #666;
  margin: 4px 0 0 0;
}

.quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.quantity button {
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  font-weight: bold;
}

.price {
  font-weight: bold;
  text-align: right;
  justify-self: end;
}

.return {
    background-color: #27ae60;
  color: white;
  border: none;
  padding: 8px 14px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: .5s;
}

.return:hover {
    background-color: #1d7541;
}

.secondary {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 8px 14px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: .5s;
}
.secondary:hover {
    background-color: #1d7541;
}

.summary {
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
}

.summary input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.totals {
  margin: 0 5.2vw 2vw 5.2vw;
  border: 2px solid #000;
  padding: 32px;
  width: 300px;
  border-radius: 8px;
  background-color: white;
  font-weight: 450;
}

.totals h3 {
    margin: 0vw 0 2vw 0;
}

.line {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.total {
  margin-top: 16px;
  font-size: 1.1rem;
}

.totals hr {
  margin: 8px 0;
  border: none;
  border-top: 1px solid #ccc;
} 
.payment {
    background-color: #27ae60;
  color: white;
  border: none;
  padding: 8px 14px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: .5s;
}
.payment:hover{
    background-color: #1d7541;
}
</style>
