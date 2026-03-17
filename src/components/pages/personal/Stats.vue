<script setup lang="js">
const props = defineProps({
	loggedIn: Boolean,
	userId: Boolean
}),
base = `/${import.meta.env.VITE_BASE_ROUTE}/`
</script>

<template>
	<div class="container-xxl" v-if="props.loggedIn">
		<h1><i class="bi bi-graph-up" /><span>Statistics</span></h1>
		<p>Nothing to see here yet...</p>
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