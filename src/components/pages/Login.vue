<script setup lang="js">
import { ref } from "vue";

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
responseNum = ref(0);

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
				return [r.ok, r.json()];
			});
			if (responseNum[0]) {
				loginBtnMsg.value = "Success!"
				console.info("Login success!")
				localStorage.setItem("user_token",response[1].token);
				localStorage.setItem("user_data",`{
					"username": "${form.value.username}",
					"password": "${form.value.password}",
					"id": ${response[1].id},
					"role": "${response[1].role}"
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

defineProps({loggedIn: Boolean});
</script>

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
			<div class="p-4 bg-body-tertiary mb-3">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="captcha" id="captcha" required v-model="form.captcha" :disabled="loading" />
					<label class="form-check-label ps-3" for="captcha">I'm not a robot</label>
				</div>
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