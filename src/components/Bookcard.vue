<script setup>
import { inject } from 'vue'


const selectBook = inject('selectBook')
</script>

<template>
  <section>
    <div class="card">
      <img :src="selectBook.cover" alt="" />

      <div class="cardDescription">
        <h2>{{ selectBook.title }}</h2>
        <h3>{{ selectBook.publication }}</h3>
        <p>{{ selectBook.author }}</p>
        <p class="review">{{ selectBook.review }}</p>
        <button class="primary"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
      </div>
    </div>
    <router-link class="primary" to="/">
        <i class="fa-solid fa-arrow-left"></i> Voltar
    </router-link>
  </section>
</template>

<style scoped>
section{
     margin: 5vw;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #27ae60;
  padding: 4vw;
  margin-bottom: 2vw;
}

.cardDescription {
  display: flex;
  flex-direction: column;
}

.cardDescription h2 {
  font-size: 3em;
  font-weight: 600;
  text-align: center;
}

.cardDescription h3 {
  font-size: 1.7em;
  text-align: center;
  margin: 1vw 0;
  font-weight: 600;
}

.cardDescription p {
  font-size: 1.2em;
  text-align: center;
}

.cardDescription .review {
  font-size: 1.5em;
  text-align: justify;
  width: 80%;
  margin: 1vw auto;
  line-height: 150%;
}

.cardDescription button {
  width: 80%;
  margin: 1vw auto;
}

section .primary i{
    margin-right: 0.5vw;
    transition: .4s;
}

section .primary:hover i{
    margin-right: 1vw;
}
</style>
