<script setup lang="js">
const props = defineProps({
	loggedIn: Boolean,
	user: String,
	userId: Number
})
const base = `/${import.meta.env.VITE_BASE_ROUTE}/`

if (!props.loggedIn) {
	console.info("You are not logged in!")
}
</script>

<template>
	<div class="container-xxl" v-if="props.loggedIn">
		<h1><i class="bi bi-person-circle" /><span>{{ props.user }}</span></h1>
		<ul>
			<li>User ID: {{ props.userId }}</li>
			<li>Created at: Unknown</li>
		</ul>
		<hr />
		<p>Nothing to see here though...</p>
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

<style scoped>
</style>