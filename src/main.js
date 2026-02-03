import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.min.css';

import App from './App.vue';

import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Changelog from './components/pages/Changelog.vue';
import Downloads from './components/pages/Downloads.vue';
import Leaderboards from './components/pages/Leaderboards.vue';

import Login from './components/pages/Login.vue';
import Register from './components/pages/Register.vue';

import Profile from './components/pages/personal/Profile.vue';
import Stats from './components/pages/personal/Stats.vue';
import Settings from './components/pages/personal/Settings.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/about', name: 'About', component: About },
		{ path: '/changelog', name: 'Changelog', component: Changelog },
		{ path: '/downloads', name: 'Downloads', component: Downloads },
		{ path: '/leaderboards', name: 'Leaderboards', component: Leaderboards },

		{ path: '/login', name: 'login', component: Login },
		{ path: '/register', name: 'Register', component: Register },

		{ path: '/profile', name: 'profile', component: Profile },
		{ path: '/stats', name: 'stats', component: Stats },
		{ path: '/settings', name: 'settings', component: Settings }
	]
});

createApp(App).use(router).mount('#app');