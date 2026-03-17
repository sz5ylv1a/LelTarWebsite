<script setup lang="js">
const props = defineProps({
	loggedIn: Boolean,
	userId: Number
}),
base = `/${import.meta.env.VITE_BASE_ROUTE}/`
</script>

<template>
	<div class="container-xxl" v-if="props.loggedIn">
		<h1><i class="bi bi-sliders2" /><span>Settings</span></h1>
		<p>All what <em>could</em> be changed if this was ever implemented properly...</p>
		<hr>
		<h3>Update User Info</h3>
		<form method="put">
			<div class="row mb-3">
				<label for="updateCountry" class="col-auto col-form-label">Country</label>
				<div class="col-lg-3 px-lg-0">
					<select id="updateCountry" class="form-select">
						<option value="0">❔ Unknown</option>
					</select>
				</div>
				<div class="col-auto mt-3 mt-lg-0">
					<input class="btn btn-success" type="submit" value="Save" />
				</div>
			</div>
		</form>
		<hr>
		<h2>Update Credentials</h2>
		<h3>Username</h3>
		<form method="put">
			<div class="row mb-1">
				<label for="oldUsername" class="col-auto col-form-label">Old Username</label>
				<div class="col-lg-3 px-lg-0">
					<input id="oldUsername" class="form-control" type="text" />
				</div>
			</div>
			<div class="row mb-3">
				<label for="newUsername" class="col-auto col-form-label">New Username</label>
				<div class="col-lg-3 px-lg-0">
					<input id="newUsername" class="form-control" type="text" />
				</div>
			</div>
			<div class="row mb-3 mt-0">
				<div class="col-auto">
					<input class="btn btn-success" type="submit" value="Save" />
				</div>
			</div>
		</form>
		<h3>E-mail Address</h3>
		<form method="put">
			<div class="row mb-3">
				<label for="oldEmail" class="col-auto col-form-label">Old E-mail</label>
				<div class="col-lg-3 px-lg-0">
					<input id="oldPassword" class="form-control" type="email" />
				</div>
			</div>
			<div class="row mb-1">
				<label for="newEmail" class="col-auto col-form-label">New E-mail</label>
				<div class="col-lg-3 px-lg-0">
					<input id="newEmail" class="form-control" type="email" />
				</div>
			</div>	
			<div class="row mb-3">
				<label for="confirmNewEmail" class="col-auto col-form-label">Confirm New E-mail</label>
				<div class="col-lg-3 px-lg-0">
					<input id="confirmNewEmail" class="form-control" type="email" />
				</div>
			</div>
			<div class="row mb-3 mt-0">
				<div class="col-auto">
					<input class="btn btn-success" type="submit" value="Save" />
				</div>
			</div>
		</form>
		<h3>Password</h3>
		<form method="put">
			<div class="row mb-3">
				<label for="oldPassword" class="col-auto col-form-label">Old Password</label>
				<div class="col-lg-3 px-lg-0">
					<input id="oldPassword" class="form-control" type="password" />
				</div>
			</div>
			<div class="row mb-1">
				<label for="newPassword" class="col-auto col-form-label">New Password</label>
				<div class="col-lg-3 px-lg-0">
					<input id="newPassword" class="form-control" type="password" />
				</div>
			</div>	
			<div class="row mb-3">
				<label for="confirmNewPassword" class="col-auto col-form-label">Confirm New Password</label>
				<div class="col-lg-3 px-lg-0">
					<input id="confirmNewPassword" class="form-control" type="password" />
				</div>
			</div>
			<div class="row mb-3 mt-0">
				<div class="col-auto">
					<input class="btn btn-success" type="submit" value="Save" />
				</div>
			</div>
		</form>
		<hr>
		<h2 class="text-danger">Danger Zone</h2>
		<p class="text-danger" style="font-weight:bold;">Careful! These actions are irreversible and cannot be undone!</p>
		<button class="btn btn-danger">Delete Account</button>
	</div>
	<div class="container-xxl text-center" v-else>
		<h1 class="d-block">You are not logged in!</h1>
		<p class="text-center">Please log in or register first to view this page!</p>
		<div class="mb-4">
			<router-link class="btn btn-lg btn-outline-secondary" role="button" :href="base+'login'">Login</router-link>
			<router-link class="btn btn-lg btn-outline-success ms-2" role="button" :href="base+'register'">Register</router-link>
		</div>
		<a href="javascript:history.back()" class="text-secondary fst-italic" role="button">...or just go back</a>
	</div>
</template>