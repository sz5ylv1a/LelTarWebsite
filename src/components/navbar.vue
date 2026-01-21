<script lang="js">
// defineProps({
// 	currentPage: String,
// 	loggedIn: Boolean,
// })

export default {
	data() {
		return {
			loggedIn: false
		}
	},
	mounted() {
		var loggedIn = this.loggedIn

		try {
			if (!loggedIn) {
				document.getElementById("account-section").innerHTML = `
				<a class="btn btn-outline-secondary" role="button" href="/login">Login</a>
				<a class="btn btn-outline-success" role="button" href="/register">Register</a>`
			}
		}
		catch (error) {
			console.error(error)
		}
	}
}
</script>

<template>
	<nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary border-bottom border-body">
		<div class="container-xxl">
			<a class="navbar-brand" href="/"><img src="/res/icons/favicon.png" alt="Lel.tar" height="32"> Lel.tar</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mr-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/about">About</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/changelog">Changelog</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/downloads">Downloads</router-link>
					</li>
					<li class="nav-item">
						<a class="text-warning nav-link lb-link" href="/leaderboards">Leaderboards <!-- <i class="bi bi-box-arrow-up-right"></i> --></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://github.com/szB3NC3/lel-tar" target="_blank">GitHub <i class="bi bi-box-arrow-up-right"></i></a>
					</li>
				</ul>
				<div class="d-flex justify-content-end gap-1" id="account-section"></div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
	
</style>