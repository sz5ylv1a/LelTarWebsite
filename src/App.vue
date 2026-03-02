<script setup lang="js">
import Navbar from './components/Navbar.vue';
import PageFooter from './components/PageFooter.vue';

let isLoggedIn = true
let username = localStorage.getItem('user_name')

if (username !== "") {isLoggedIn = true} else {isLoggedIn = false}
</script>

<template>
	<navbar current-page="Home" :logged-in="isLoggedIn" :user="username" />
	<div class="page-shit">
		<div class="content mb-5">
			<router-view :logged-in="isLoggedIn" :user="username" />
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
