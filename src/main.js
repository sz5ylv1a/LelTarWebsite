import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.min.css';

import App from './App.vue';

import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Changelog from './components/pages/Changelog.vue';
import Downloads from './components/pages/Downloads.vue';
import Leaderboards from './components/pages/Leaderboards.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/about', name: 'About', component: About },
		{ path: '/changelog', name: 'Changelog', component: Changelog },
		{ path: '/downloads', name: 'Downloads', component: Downloads },
		{ path: '/leaderboards', name: 'Leaderboards', component: Leaderboards }
	]
});

createApp(App).use(router).mount('#app');