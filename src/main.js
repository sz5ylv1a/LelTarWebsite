import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.min.css';
import App from './App.vue';
import { router } from './scripts/router.js';

createApp(App).use(createPinia()).use(router).mount('#app');