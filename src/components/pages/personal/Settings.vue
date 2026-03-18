<script setup lang="js">
import { ref } from 'vue';

const props = defineProps({
	loggedIn: Boolean,
	user: String,
	userId: Number
}),
base = `/${import.meta.env.VITE_BASE_ROUTE}/`,
apiUrl = `${import.meta.env.VITE_API_URL}accMgmt/${props.userId}`,
reqHeaders = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
},

formCountry = ref({
	new: 0
}),
formUsername = ref({
	old: "",
	new: ""
}),
formEmail = ref({
	old: "",
	new: "",
	confirm: ""
}),
formPassword = ref({
	old: "",
	new: "",
	confirm: ""
}),

loading = ref(false),
error = ref(null),
dat = ref(),
responseNum = ref(0);

async function changeCountry() {
	loading.value = true
	error.value = null
	try {
		const response = await fetch(`${apiUrl}/updateCountry`, {
			method: 'PUT',
			headers: reqHeaders,
			body: formCountry.value.new,
		}).then((r) => {
			responseNum.value = r.status;
			return r.json();
		});
	} catch (e) {
		error.value = e?.response?.data?.message || "Could not change your country!"
		console.error(error.value);
		console.error(e);
	} finally {
		loading.value = false
	}
}
async function changeUsername() {
	loading.value = true
	error.value = null
	try {
		const response = await fetch(`${apiUrl}/updateUsername`, {
			method: 'PUT',
			headers: reqHeaders,
			body: formUsername.value.new,
		}).then((r) => {
			responseNum.value = r.status;
			return r.json();
		});
	} catch (e) {
		error.value = e?.response?.data?.message || "Username could not be updated!"
		console.error(error.value);
		console.error(e);
	} finally {
		loading.value = false
	}
}
async function changePassword() {
	if (formPassword.value.new === formPassword.value.confirm) {
		loading.value = true
		error.value = null
		try {
			const response = await fetch(`${apiUrl}/updatePassword`, {
				method: 'PUT',
				headers: reqHeaders,
				body: formPassword.value.new,
			}).then((r) => {
				responseNum.value = r.status;
				return r.json();
			});
		} catch (e) {
			error.value = e?.response?.data?.message || "Password could not be changed!"
			console.error(error.value);
			console.error(e);
		} finally {
			loading.value = false
		}
	}
	else {
		error.value = "The passwords do not match!"
		return console.error("Confirmation failed:", error.value);
	}
}
async function changeEmail() {
	if (formEmail.value.new === formEmail.value.confirm) {
		loading.value = true
		error.value = null
		try {
			const response = await fetch(`${apiUrl}/updateEmail`, {
				method: 'PUT',
				headers: reqHeaders,
				body: formEmail.value.new,
			}).then((r) => {
				responseNum.value = r.status;
				return r.json();
			});
		} catch (e) {
			error.value = e?.response?.data?.message || "Could not change your e-mail address!"
			console.error(error.value);
			console.error(e);
		} finally {
			loading.value = false
		}
	}
	else {
		error.value = "Confirmation failed: The e-mail addresses do not match!";
		return console.error("Confirmation failed:", error.value);
	}
}

async function deleteAccount() {
	// const confirmed = confirm("Are you sure you wanna delete your account?\nThis action CANNOT be undone!");
	// if (confirmed) {
	// 	loading.value = true
	// 	error.value = null
	// 	try {
	// 		const response = await fetch(`${apiUrl}/deleteAccount`, {
	// 			method: 'DELETE',
	// 			headers: reqHeaders
	// 		}).then((r) => {
	// 			responseNum.value = r.status;
	// 			return r.json();
	// 		});
	// 	} catch (e) {
	// 		error.value = "An error has occured whilst trying to delete the account."
	// 		console.error(error.value);
	// 		console.error(e);
	// 	} finally {
	// 		loading.value = false
	// 	}
	// }
	// else {
	// 	error.value = "Operation cancelled."
	// 	return console.info(error.value);
	// }
	return;
}
</script>

<template>
	<div class="container-xxl" v-if="props.loggedIn">
		<h1><i class="bi bi-sliders2" /><span>Settings</span></h1>
		<p>All what <em>could</em> be changed if this was ever implemented properly...</p>
		<hr>
		<h3>Update User Info</h3>
		<form class="needs-validation" method="put" @submit.prevent="changeCountry" novalidate>
			<div class="row mb-3">
				<label for="updateCountry" class="col-auto col-form-label">Country</label>
				<div class="col-lg-3 px-lg-0">
					<select id="updateCountry" class="form-select" v-model="formCountry.new" :disabled="loading">
						<option value="0">❔ Unknown</option>
					</select>
				</div>
				<div class="col-auto mt-3 mt-lg-0">
					<input class="btn btn-success" type="submit" value="Save" :disabled="loading" />
				</div>
			</div>
		</form>
		<hr>
		<h2>Update Credentials</h2>
		<h3>Username</h3>
		<form class="needs-validation" method="put" @submit.prevent="changeUsername" novalidate>
			<div class="row mb-1">
				<label for="oldUsername" class="col-auto col-form-label">Old Username</label>
				<div class="col-lg-3 px-lg-0">
					<input id="oldUsername" class="form-control" type="text" v-model="formUsername.old" :disabled="loading" />
				</div>
			</div>
			<div class="row mb-3">
				<label for="newUsername" class="col-auto col-form-label">New Username</label>
				<div class="col-lg-3 px-lg-0">
					<input id="newUsername" class="form-control" type="text" v-model="formUsername.new" :disabled="loading" />
				</div>
			</div>
			<div class="row mb-3 mt-0">
				<div class="col-auto">
					<input class="btn btn-success" type="submit" value="Save" :disabled="loading" />
				</div>
			</div>
		</form>
		<h3>E-mail Address</h3>
		<form class="needs-validation" method="put" @submit.prevent="changeEmail" novalidate>
			<div class="row mb-3">
				<label for="oldEmail" class="col-auto col-form-label">Old E-mail</label>
				<div class="col-lg-3 px-lg-0">
					<input id="oldPassword" class="form-control" type="email" v-model="formEmail.old" :disabled="loading" />
				</div>
			</div>
			<div class="row mb-1">
				<label for="newEmail" class="col-auto col-form-label">New E-mail</label>
				<div class="col-lg-3 px-lg-0">
					<input id="newEmail" class="form-control" type="email" v-model="formEmail.new" :disabled="loading" />
				</div>
			</div>
			<div class="row mb-3">
				<label for="confirmNewEmail" class="col-auto col-form-label">Confirm New E-mail</label>
				<div class="col-lg-3 px-lg-0">
					<input id="confirmNewEmail" class="form-control" type="email" v-model="formEmail.confirm" :disabled="loading" />
				</div>
			</div>
			<div class="row mb-3 mt-0">
				<div class="col-auto">
					<input class="btn btn-success" type="submit" value="Save" :disabled="loading" />
				</div>
			</div>
		</form>
		<h3>Password</h3>
		<form class="needs-validation" method="put" @submit.prevent="changePassword" novalidate>
			<div class="row mb-3">
				<label for="oldPassword" class="col-auto col-form-label">Old Password</label>
				<div class="col-lg-3 px-lg-0">
					<input id="oldPassword" class="form-control" type="password" v-model="formPassword.old" :disabled="loading" />
				</div>
			</div>
			<div class="row mb-1">
				<label for="newPassword" class="col-auto col-form-label">New Password</label>
				<div class="col-lg-3 px-lg-0">
					<input id="newPassword" class="form-control" type="password" v-model="formPassword.new" :disabled="loading" />
				</div>
			</div>
			<div class="row mb-3">
				<label for="confirmNewPassword" class="col-auto col-form-label">Confirm New Password</label>
				<div class="col-lg-3 px-lg-0">
					<input id="confirmNewPassword" class="form-control" type="password" v-model="formPassword.confirm" :disabled="loading" />
				</div>
			</div>
			<div class="row mb-3 mt-0">
				<div class="col-auto">
					<input class="btn btn-success" type="submit" value="Save" :disabled="loading" />
				</div>
			</div>
		</form>
		<hr>
		<h2 class="text-danger">Danger Zone</h2>
		<p class="text-danger" style="font-weight:bold;">Careful! These actions are irreversible and cannot be undone!</p>
		<form title="I don't think I can let you do that yet" method="delete" @submit.prevent="deleteAccount" novalidate style="cursor:not-allowed;width:min-content;">
			<input class="btn btn-danger" type="submit" value="Delete Account" :disabled="true">
		</form>
	</div>
	<div class="container-xxl text-center" v-else>
		<h1 class="d-block">You are not logged in!</h1>
		<p class="text-center">Please log in or register first to view this page!</p>
		<div class="mb-4">
			<router-link class="btn btn-lg btn-outline-secondary" role="button" :href="base + 'login'">Login</router-link>
			<router-link class="btn btn-lg btn-outline-success ms-2" role="button"
				:href="base + 'register'">Register</router-link>
		</div>
		<a href="javascript:history.back()" class="text-secondary fst-italic" role="button">...or just go back</a>
	</div>
</template>