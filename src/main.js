import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue'

const app = createApp(App);
app.component('Header', Header);
app.component('Footer', Footer);
app.mount('#app');

