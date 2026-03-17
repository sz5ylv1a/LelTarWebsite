<script setup lang="js">
import { ref } from 'vue';

const form = ref({
	username: '',
	email: '',
	password: '',
	passwordConfirm: '',
	captcha: false
}),
loading = ref(false),
error = ref(null),
dat = ref(),
responseNum = ref(0);

async function submit() {
	if (form.value.password === form.value.passwordConfirm && !!form.value.captcha) {
		loading.value = true
		error.value = null
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}auth/register`, {
				method: "POST",
				headers: {
					'Accept': "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					'username': form.value.username,
					'email': form.value.email,
					'password': form.value.password,
				}),
			}).then((r) => {
				responseNum.value = r.status;
				return r.json();
			});
			if (responseNum.value === 200) {
				console.info("Registered successfully!")
				dat.value = response
				localStorage.setItem("user_token",dat.value.token);
				localStorage.setItem("user_data",`{
					"username": "${form.value.username}",
					"password": "${form.value.password}",
					"id": ${dat.value.id},
					"role": "${dat.value.role}"
				}`.replaceAll("	","").replaceAll(" ","").replaceAll("\n",""));	// the replaceAlls are only for minifying the json as much as possible

				window.location.href = `/${import.meta.env.VITE_BASE_ROUTE}/`;
			}
		}
		catch (e) {
			error.value = e?.response?.data?.message || "Registration failed. Please try again later."
			console.error(error.value)
			console.error(e)
		}
		finally {
			loading.value = false
		}
	}
	else {
		if (form.value.password === form.value.passwordConfirm) {
			error.value = "The passwords do not match!"
			console.error(error.value)
		}
		else if (!form.value.captcha) {
			error.value = "Please fill in the captcha!"
			console.error(error.value)
		}
	}
}

defineProps({loggedIn: Boolean})
</script>

<template>
	<div class="container-xxl" v-if="!loggedIn">
		<h1 class="text-center mb-3 d-block">Create an account</h1>
		<form class="mb-2 needs-validation" id="registration" method="post" @submit.prevent="submit" novalidate>
			<div class="alert alert-danger d-flex gap-2" v-if="error != null">
				<div>❌</div>
				<div>{{ error }}</div>
			</div>
			<div class="form-floating mb-3">
				<input type="text" class="form-control" id="username" name="username" placeholder="Username" required v-model="form.username" />
				<label for="username" class="form-label"><i class="bi bi-person-fill"></i> Username</label>
			</div>
			<div class="form-floating mb-3">
				<input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required v-model="form.email" />
				<label for="email" class="form-label"><i class="bi bi-at"></i> E-mail</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="password" name="password" placeholder="Password"
				required v-model="form.password" />
				<label for="password" class="form-label"><i class="bi bi-lock-fill"></i> Password</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm"
				placeholder="Confirm Password" required v-model="form.passwordConfirm" />
				<label for="passwordConfirm" class="form-label"><i class="bi bi-key-fill"></i> Confirm Password</label>
			</div>
			<div class="p-4 bg-body-tertiary mb-3">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="captcha" id="captcha" required v-model="form.captcha" />
					<label class="form-check-label ps-3" for="captcha">I'm not a robot</label>
				</div>
			</div>
			<div class="text-center">
				<input class="btn btn-success btn-lg" type="submit" value="Register">
			</div>
		</form>
		<p class="no-account">Already have an account? <a href="/login">Log in!</a></p>
	</div>
	<div class="container-xxl text-center" v-else>
		<h1 class="d-block">You've already logged in!</h1>
		<p class="text-center">Logged in users cannot register new accounts.<br />You must log out or clear all cookies and data before you do it, or if you believe this is an error.</p>
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