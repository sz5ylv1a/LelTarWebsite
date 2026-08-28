<template>
	<div class="container-xxl" v-if="!loggedIn">
		<h1 class="text-center mb-3 d-block">Please log in</h1>
		<form class="mb-2 needs-validation" id="accountLogin" method="post" @submit.prevent="submit" novalidate>
			<div class="alert alert-danger d-flex gap-2" v-if="error != null">
				<div>❌</div>
				<div>{{ error }}</div>
			</div>
			<div class="form-floating mb-3">
				<input type="text" class="form-control" id="username" name="username" placeholder="Username" required v-model="form.username" :disabled="loading" />
				<label for="username" class="form-label"><i class="bi bi-person-fill" /> Username</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="password" name="password" placeholder="Password" required v-model="form.password" :disabled="loading" />
				<label for="password" class="form-label"><i class="bi bi-lock-fill" /> Password</label>
			</div>
			<div class="mb-3">
				<div id="turnstile-container" />
			</div>
			<!-- <div class="form-check mb-3">
				<input class="form-check-input" type="checkbox" name="stayLoggedIn" id="stayLoggedIn" v-model="form.stayLoggedIn" />
				<label class="form-check-label" for="stayLoggedIn"><i>Stay logged in</i></label>
			</div> -->
			<div class="text-center">
				<input class="btn btn-success btn-lg" type="submit" :value="loginBtnMsg" accesskey="enter" :disabled="loading">
			</div>
		</form>
		<p class="no-account">Don't have an account? <router-link :to="base+'register'">Register!</router-link></p>
	</div>
	<div class="container-xxl text-center" v-else>
		<h1 class="d-block">You've already logged in!</h1>
		<p class="text-center">Log out or clear all cookies and data if you believe this is an error.</p>
		<a href="javascript:history.back()" class="btn btn-lg btn-outline-secondary" role="button">Go back</a>
	</div>
</template>

<script setup lang="js">
import { ref } from "vue";

defineProps({loggedIn: Boolean});

const base = `/${import.meta.env.VITE_BASE_ROUTE}/`,
form = ref({
	username: "",
	password: "",
	captcha: false,
	stayLoggedIn: false
}),
loading = ref(false),
loginBtnMsg = ref("Login"),
error = ref(null),
dat = ref(),
responseNum = ref(0);

function turnstileRender() {
	turnstile.render("#turnstile-container", {
		sitekey: import.meta.env.VITE_TURNSTILE_SITEKEY,
		theme: 'dark',
		size: 'flexible',
		language: 'en',
		callback: (t) => {
			console.log("Turnstile success:", t);
			form.value.captcha = true;
		},
		'error-callback': (e) => {
			console.error("Turnstile error:", e);
			form.value.captcha = false;
		},
		'expired-callback': () => {
			console.error("Turnstile token has expired!");
			form.value.captcha = false;
		},
		'timeout-callback': () => {
			console.error("Turnstile challenge timed out!");
			form.value.captcha = false;
		},
	});
}
try {
	setTimeout(() => turnstileRender(), 300);
} catch (e) {
	console.error(e);
}

async function submit() {
	if (form.value.captcha) {
		loading.value = true;
		loginBtnMsg.value = "Logging in..."
		error.value = null;
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
				method: "POST",
				headers: {
					'Accept': "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					'username': form.value.username,
					'password': form.value.password,
				}),
			}).then((r) => {
				responseNum.value = r.status;
				return r.json();
			});
			if (responseNum.value === 200) {
				dat.value = await response
				loginBtnMsg.value = "Success!"
				console.log("Login success!")
				localStorage.setItem("user_token",dat.value.token);
				localStorage.setItem("user_data",`{
					"username": "${form.value.username}",
					"password": "${form.value.password}",
					"id": ${dat.value.id},
					"role": "${dat.value.role}"
				}`.replaceAll("	","").replaceAll(" ","").replaceAll("\n",""));	// the replaceAlls are only for minifying the json as much as possible

				window.location.href = base;
			}
			else if (responseNum.value === 401) {
				loginBtnMsg.value = "Login"
				error.value = `Invalid username or password. (Error code: ${responseNum.value})`
			}
			else {
				loginBtnMsg.value = "Login"
				error.value = `An error has occured whilst logging in! (Error code: ${responseNum.value})`
			}
		} catch (e) {
			error.value = e?.response?.data?.message || "Invalid username or password.";
			loginBtnMsg.value = "Login"
			console.error(error.value);
			console.error(e);
		} finally {
			if (responseNum.value !== 200) loading.value = false
		}
	}
	else {
		error.value = "Please fill in the captcha!"
		console.error(error.value)
	}
}
</script>

<style scoped>
form {
	margin: auto;
	max-width: 400px;
}

.no-account {
	text-align: center;
	font-style: italic;
	opacity: 50%;
}
</style>