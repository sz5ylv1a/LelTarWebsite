<script setup lang="js">
	
</script>

<template>
	<div class="container-xxl">
		<h1 class="text-center mb-3">Please log in</h1>
		<form class="mb-2 needs-validation" id="accountLogin" action="" novalidate>
			<div class="form-floating mb-3">
				<input type="text" class="form-control" id="username" name="username" required />
				<label for="username" class="form-label">Username</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="password" name="password" required />
				<label for="password" class="form-label">Password</label>
			</div>
			<div class="p-4 bg-body-tertiary mb-3">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="captcha" id="captcha" required />
					<label class="form-check-label" for="captcha"><i>pretend that there's a captcha here</i></label>
				</div>
			</div>
			<div class="form-check mb-3">
				<input class="form-check-input" type="checkbox" name="stayLoggedIn" id="stayLoggedIn" />
				<label class="form-check-label" for="stayLoggedIn"><i>Stay logged in</i></label>
			</div>
			<div class="text-center">
				<input class="btn btn-success btn-lg" type="submit" value="Login">
			</div>
		</form>
		<p class="no-account">Don't have an account? <a href="/register">Register!</a></p>
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
</style>