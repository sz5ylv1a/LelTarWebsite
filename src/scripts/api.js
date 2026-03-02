import { ref, computed } from "vue";
import { defineStore } from "pinia";
import ax from "axios";
import r from "./router.js";

const api = ax.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 30000,
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("user_token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

api.interceptors.use(
	(res) => res,
	(error) => {
		if (error.response?.status === 401) {
			localStorage.removeItem("user_token");
			localStorage.removeItem("user_data");
		}
		return Promise.reject(err);
	},
);

// ------------------------------------------------ //

export const useAuthStore = defineStore("auth", () => {
	const token = ref(localStorage.getItem("user_token") || null);
	const user = ref(JSON.parse(localStorage.getItem("user_data") || "null"));

	const isLoggedIn = computed(() => !!token.value);

	const assignedRole = ref(0);
	switch (user.value?.role) {
		case "Admin":
			assignedRole.value = 1;
			return;
		case "Moderator":
			assignedRole.value = 2;
			return;
		case "User":
			assignedRole.value = 3;
			return;
		case "Banned":
			assignedRole.value = 4;
			return;
	}

	async function login(username, password) {
		const { data } = await api.post("auth/login", {
			username,
			password,
		});
		token.value = data.token;
		user.value = {
			username: data.username,
			role: data.role,
		};

		localStorage.setItem("user_token", data.token);
		localStorage.setItem("user_data", JSON.stringify(user.value));

		r.push("/");
	}

	async function register(username, email, password) {
		const { data } = await api.post("auth/register", {
			username,
			email,
			password,
		});
		token.value = data.token;
		user.value = {
			username: data.username,
			role: data.role,
		};

		localStorage.setItem("user_token", data.token);
		localStorage.setItem("user_data", JSON.stringify(user.value));

		r.push("/");
	}

	async function logout() {
		token.value = null;
		user.value = null;

		localStorage.removeItem("user_token");
		localStorage.removeItem("user_data");

		r.push("/");
	}

	return { token, user, isLoggedIn, assignedRole, login, register, logout };
});
