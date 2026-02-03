<script setup lang="js">
defineProps({
	loggedIn: Boolean,
	user: String
})
</script>

<template>
	<div class="container-xxl" v-if="loggedIn">
		<h1><i class="bi bi-person-circle" /> {{ user }}</h1>
		<p>Created at: idk lol</p>
		<hr />
		<p>Nothing to see here though...</p>
	</div>
	<div class="container-xxl text-center" v-else>
		<h1>You are not logged in!</h1>
		<p class="text-center">Please log in or register first to view this page!</p>
		<div class="mb-4">
			<a class="btn btn-lg btn-outline-secondary" role="button" href="/login">Login</a>
			<a class="btn btn-lg btn-outline-success ms-2" role="button" href="/register">Register</a>
		</div>
		<a href="javascript:history.back()" class="text-secondary fst-italic" role="button">...or just go back</a>
	</div>
</template>

<style scoped>
</style>