import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/header.vue';

const app = createApp(App);
app.component('Header', Header);
app.mount('#app');

