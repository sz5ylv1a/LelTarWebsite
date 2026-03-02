<script setup lang="js">
defineProps({
	loggedIn: Boolean
})
</script>

<template>
	<div class="container-xxl" v-if="loggedIn === false">
		<h1 class="text-center mb-3">Create an account</h1>
		<form class="mb-2 needs-validation" id="registration" :action="import.meta.env.VITE_API_URL+'auth/register'" method="post" novalidate>
			<div class="form-floating mb-3">
				<input type="text" class="form-control" id="username" name="username" placeholder="Username" required />
				<label for="username" class="form-label"><i class="bi bi-person-fill"></i> Username</label>
			</div>
			<div class="form-floating mb-3">
				<input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required />
				<label for="email" class="form-label"><i class="bi bi-at"></i> E-mail</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
				<label for="password" class="form-label"><i class="bi bi-lock-fill"></i> Password</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm" placeholder="Confirm Password" required />
				<label for="passwordConfirm" class="form-label"><i class="bi bi-key-fill"></i> Confirm Password</label>
			</div>
			<div class="p-4 bg-body-tertiary mb-3">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="captcha" id="captcha" required />
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
		<h1>You've already logged in!</h1>
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