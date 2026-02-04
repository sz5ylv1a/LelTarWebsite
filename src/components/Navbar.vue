<script setup lang="js">
defineProps({
	currentPage: String,
	loggedIn: Boolean,
	user: String
})

const base = `/${import.meta.env.VITE_BASE_ROUTE}/`
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
						<router-link class="nav-link" :to="base">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="base+'about'">About</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="base+'changelog'">Changelog</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="base+'downloads'">Downloads</router-link>
					</li>
					<li class="nav-item">
						<a class="text-warning nav-link lb-link" :href="base+'leaderboards'">Leaderboards</a>
					</li>
				</ul>
				<div class="d-flex justify-content-end gap-1" id="account-section" v-if="!loggedIn">
					<a class="btn btn-outline-secondary" role="button" :href="base+'login'">Login</a>
					<a class="btn btn-outline-success" role="button" :href="base+'register'">Register</a>
				</div>
				<div class="d-flex justify-content-end gap-1" id="account-section" v-else>
					<div class="btn-group">
						<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" style="border:none;"><span class="account-circle"><i class="bi bi-person-circle" /></span><span class="ps-2">{{ user }}</span></button>
						<ul class="dropdown-menu dropdown-menu-end">
							<li><a class="dropdown-item" :href="base+'profile'"><i class="bi bi-person-fill" /> Profile</a></li>
							<li><a class="dropdown-item" :href="base+'stats'"><i class="bi bi-graph-up" /> Statistics</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li><a class="dropdown-item" :href="base+'settings'"><i class="bi bi-sliders2" /> Settings</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li><button class="dropdown-item" id="logout-btn"><i class="bi bi-box-arrow-left" /> Log out</button></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.account-circle {
	scale: 2;
}
#logout-btn {
	color: var(--bs-danger);
}
#logout-btn:active {
	background-color: var(--bs-danger);
	color: #fff;
}
</style>