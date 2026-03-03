<script setup lang="js">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import PageFooter from './components/PageFooter.vue';

let isLoggedIn = ref(false)
let user = ref("null")
let username = ref("")

async function refreshStoredLoginInfo() {
	try {
		if (localStorage.getItem("user_data") != null) {
			user.value = JSON.parse(localStorage.getItem("user_data") || "null");
			isLoggedIn.value = true;
		}
		else {
			user.value = "null"
			isLoggedIn.value = false;
		}
		if (user.value === "null") {
			username.value = ""
		}
		else {
			username = user.value.username
		}
	}
	catch (e) {
		console.error(e);
	}
}

refreshStoredLoginInfo()
</script>

<template>
	<navbar current-page="Home" :logged-in="isLoggedIn.value" :user="username.value" />
	<div class="page-shit">
		<div class="content mb-5">
			<router-view :logged-in="isLoggedIn.value" :user="username.value" />
		</div>
		<page-footer entity-name="LohinSys" :f-year="2024" :l-year="2026" />
	</div>
</template>

<style>
.navbar {
	box-shadow: 0 0 10px #000;
}
h1 {
	margin-top: 20px;
}
.page-shit {
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 60px);
}
</style>
