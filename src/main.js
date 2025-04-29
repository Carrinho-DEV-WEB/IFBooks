import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import favorites from './components/favorites.vue';
import Home from './components/home.vue';

const app = createApp(App);
app.component('Header', Header);
app.component('Footer', Footer);
app.component('Favorites', favorites);
app.component('Home', Home)
app.mount('#app');

