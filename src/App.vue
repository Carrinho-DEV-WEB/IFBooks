<script setup>
import { ref } from 'vue'
import Home from './components/home.vue';
const currentPage = ref('home')

function changePage(page){
  currentPage.value = page
}
</script>

<template>
  <Header @change-page="changePage"/>

  <section v-if=" currentPage === 'home' ">
    <Home />
  </section>

</template>

<style scoped>
  
</style>