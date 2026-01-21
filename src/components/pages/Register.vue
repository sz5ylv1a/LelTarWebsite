<script setup lang="js">
	
</script>

<template>
	<div class="container-xxl">
		<h1 class="text-center mb-3">Create an account</h1>
		<form class="mb-2" id="registration" action="">
			<div class="form-floating mb-3">
				<input type="text" class="form-control" id="username" name="username" />
				<label for="username">Username</label>
			</div>
			<div class="form-floating mb-3">
				<input type="email" class="form-control" id="email" name="email" />
				<label for="email">E-mail</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="password" name="password" />
				<label for="password">Password</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm" />
				<label for="passwordConfirm">Confirm Password</label>
			</div>
			<div class="p-4 bg-body-tertiary mb-3">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="captcha" id="captcha" />
					<label class="form-check-label" for="captcha"><i>pretend that there's a captcha here</i></label>
				</div>
			</div>
			<div class="text-center">
				<input class="btn btn-success btn-lg" type="submit" value="Register">
			</div>
		</form>
		<p class="no-account">Already have an account? <a href="/login">Log in!</a></p>
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