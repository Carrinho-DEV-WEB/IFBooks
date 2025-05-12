<script setup>
import { useRouter } from 'vue-router'
defineProps({
  cart: {
    type: Array,
    default: () => []
  }
})
const router = useRouter()
</script>

<template>
  <header>
    <nav class="nav-bar">
      <router-link to="/">
        <img src="/public/images/logo.png" alt="logo png" />
      </router-link>

      <div class="search-area">
          <input type="search" placeholder="Pesquisar" />
      </div>

      <ul class="nav-list">
        <li><a href="#">Termos</a></li>
        <li><a href="#">Equipe</a></li>
        <li><a href="#">Envio</a></li>
        <li><a href="#">Devoluções</a></li>
      </ul>

      <ul class="icons-list">
        <li>
          <i class="fa-solid fa-cart-shopping" @click="router.push('/cart')" ></i> |
        </li>
        <li>
        <router-link to="/favorites">
          <i class="fa-solid fa-heart"></i> |
        </router-link>

        </li>
        <li>
            <a href="#"><i class="fa-solid fa-user"></i></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header{
    background: #ffff;
    border-bottom: #27AE60 solid 2px;
    width: 100%;
    position: fixed;
    z-index: 100;
}

.nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1vw 3vw;
}

ul{
    display: flex;
}

a{
    color: #7B7881;
    transition: .5s;
}

a:hover{
    color: #3f3f3f;
}

.nav-list li{
    margin-right: 3vw;
    transition: .5s;
}

.icons-list li{
    font-size: 1.3em;
    color: #27AE60;
}

.icons-list li i{
    color: #27AE60;
    margin: 0 1vw;
    cursor: pointer;
    transition: .5s;
}

.icons-list li i:hover{
    color: #1d7541;
}

.search-area input{
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23666' d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'/%3E%3C/svg%3E");
  background-repeat: no-repeat ;
  background-position: 20vw center;
  background-size: 25px 25px;

    background-color: #F1F1F1;
    color: #B8B8B8;
    border: none;
    padding: 0.8vw 11vw 0.8vw 0.8vw;
    transition: 0.5s;
}

.search-area input:focus{
    box-shadow: 0px 3px 7px #979797;
    outline: none;
}

.search-area button{
    border: none;
    background-color: #F1F1F1;
    color: #231F2D;
    font-size: 0.8em;
    padding: 0.8vw;
}
</style>
