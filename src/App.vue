<script setup lang="js">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import PageFooter from './components/PageFooter.vue';

const isLoggedIn = ref(false),
user = ref(JSON.parse(localStorage.getItem("user_data")) || {}),
username = ref(user.value.username || ""),
userId = ref(user.value.id || 0);

async function refreshStoredLoginInfo() {
	try {
		if (localStorage.getItem("user_data") != null) {
			user.value = JSON.parse(localStorage.getItem("user_data"));
			isLoggedIn.value = true;
		}
		else {
			user.value = "null"
			isLoggedIn.value = false;
		}

		if (user.value === null) {
			username.value = ""
		}
		else {
			username.value = user.value.username
			userId.value = user.value.id
		}
	}
	catch (e) {console.error(e);}
}

refreshStoredLoginInfo()
</script>

<template>
	<navbar current-page="Home" :logged-in="isLoggedIn" :user="username" />
	<div class="page-shit">
		<div class="content mb-5">
			<router-view :logged-in="isLoggedIn" :user="username" :user-id="userId" />
		</div>
		<page-footer entity-name="LohinSys" :f-year="2024" :l-year="2026" />
	</div>
</template>