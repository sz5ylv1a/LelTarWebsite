import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Changelog from "../components/pages/Changelog.vue";
import Downloads from "../components/pages/Downloads.vue";
import Leaderboards from "../components/pages/Leaderboards.vue";

import Login from "../components/pages/Login.vue";
import Register from "../components/pages/Register.vue";

import Profile from "../components/pages/personal/Profile.vue";
import Stats from "../components/pages/personal/Stats.vue";
import Settings from "../components/pages/personal/Settings.vue";

const base = `/${import.meta.env.VITE_BASE_ROUTE}/`,
router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: `${base}`, name: "Home", component: Home },
		{ path: `${base}about`, name: "About", component: About },
		{ path: `${base}changelog`, name: "Changelog", component: Changelog },
		{ path: `${base}downloads`, name: "Downloads", component: Downloads },
		{ path: `${base}leaderboards`, name: "Leaderboards", component: Leaderboards },

		{ path: `${base}login`, name: "Login", component: Login },
		{ path: `${base}register`, name: "Register", component: Register },

		{ path: `${base}profile`, name: "Profile", component: Profile },
		{ path: `${base}stats`, name: "Stats", component: Stats },
		{ path: `${base}settings`, name: "Settings", component: Settings },

		// a little fix for refreshes and going to non-root links manually returning bullshit 404 errors
		{ path: `${base}:pathMatch(.*)*`, redirect: `${base}` },
	],
});

router.beforeEach((to) => {
	const token = localStorage.getItem("user_token");
	const user = JSON.parse(localStorage.getItem("user_data") || "null");

	if (to.meta.guest && token) return { path: "/" };
	if (to.meta.adminOnly && user?.role !== "Admin") return { path: "/" };
});

export default router;
