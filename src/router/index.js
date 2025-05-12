import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../components/cart.vue'
import Favorites from '../components/favorites.vue';
import Home from '../components/home.vue';
import Bookcard from '../components/Bookcard.vue';

const routes = [
    {
    path: '/', 
    name: 'Home',
    component: Home
    },

    {
    path: '/favorites', 
    name: 'Favorites',
    component: Favorites
    },

    {
      path: '/Bookcard',
      name: 'Bookcard',
      component: Bookcard
    },
   
  {
    path: '/cart',
    name: 'cart', 
    component: Cart 
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router