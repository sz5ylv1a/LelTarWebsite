<script setup lang="js">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import PageFooter from './components/PageFooter.vue';

let isLoggedIn = ref(true)
const user = ref(JSON.parse(localStorage.getItem("user_data") || "null"))
let username = ""
try {
	if (user.value === "null") {
		username = ""
	}
	else {
		username = user.value.username
	}
}
catch (e) {
	console.error(e);
}

if (user.value !== "null") {isLoggedIn.value = true}
else {isLoggedIn.value = false}
</script>

<template>
	<navbar current-page="Home" :logged-in="isLoggedIn.value" :user="username" />
	<div class="page-shit">
		<div class="content mb-5">
			<router-view :logged-in="isLoggedIn.value" :user="username" />
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
