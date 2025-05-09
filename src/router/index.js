import { createRouter, createWebHistory } from 'vue-router'

import Favorites from '../components/favorites.vue';
import Home from '../components/home.vue';

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router