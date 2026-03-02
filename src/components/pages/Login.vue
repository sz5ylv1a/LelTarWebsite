<script setup lang="js">
import { ref } from 'vue';
import { useAuthStore } from '../../scripts/api.js';

const form = ref({
	username: '',
	password: ''
})
const loading = ref(false)
const error = ref(null)

async function submit() {
	loading.value = true
	error.value = null
	try {
		await useAuthStore().login(form.value.username, form.value.password)
	} catch (e) {
		error.value = e?.response?.data?.message || "Registration failed. Please try again later."
	} finally {
		loading.value = false
	}
}

defineProps({
	loggedIn: Boolean
})
</script>

<template>
	<div class="container-xxl" v-if="loggedIn === false">
		<h1 class="text-center mb-3">Please log in</h1>
		<form class="mb-2 needs-validation" id="accountLogin" :action="import.meta.env.VITE_API_URL+'auth/login'" method="post" novalidate>
			<div class="form-floating mb-3">
				<input type="text" class="form-control" id="username" name="username" placeholder="Username" required />
				<label for="username" class="form-label"><i class="bi bi-person-fill"></i> Username</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
				<label for="password" class="form-label"><i class="bi bi-lock-fill"></i> Password</label>
			</div>
			<div class="p-4 bg-body-tertiary mb-3">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="captcha" id="captcha" required />
					<label class="form-check-label ps-3" for="captcha">I'm not a robot</label>
				</div>
			</div>
			<div class="form-check mb-3">
				<input class="form-check-input" type="checkbox" name="stayLoggedIn" id="stayLoggedIn" />
				<label class="form-check-label" for="stayLoggedIn"><i>Stay logged in</i></label>
			</div>
			<div class="text-center">
				<input class="btn btn-success btn-lg" type="submit" value="Login" accesskey="enter">
			</div>
		</form>
		<p class="no-account">Don't have an account? <a href="/register">Register!</a></p>
	</div>
	<div class="container-xxl text-center" v-else>
		<h1>You've already logged in!</h1>
		<p class="text-center">Log out or clear all cookies and data if you believe this is an error.</p>
		<a :href="history.back()" class="btn btn-lg btn-outline-secondary" role="button">Go back</a>
	</div>
</template>

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
input#captcha {
	scale: 2;
}
</style>