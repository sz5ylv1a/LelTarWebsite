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
			<router-link class="navbar-brand d-inline-flex gap-1 me-2" :to="base"><img src="/res/icons/favicon.png" alt="Lel.tar" height="32"><span>Lel.tar</span><sup style="font-size:0.6rem;opacity:35%;margin-top:12px;">INDEV</sup></router-link>
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
						<router-link class="text-warning nav-link lb-link" :to="base+'leaderboards'">Leaderboards</router-link>
					</li>
				</ul>
				<div class="d-flex justify-content-center justify-content-lg-end gap-1" id="account-section" v-if="!loggedIn">
					<router-link class="btn btn-outline-secondary" role="button" :to="base+'login'">Login</router-link>
					<router-link class="btn btn-outline-success" role="button" :to="base+'register'">Register</router-link>
				</div>
				<div class="d-flex justify-content-end gap-1" id="account-section" v-else>
					<div class="btn-group">
						<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" style="border:none;"><span class="account-circle"><i class="bi bi-person-circle" /></span><span class="ps-2">{{ user }}</span></button>
						<ul class="dropdown-menu dropdown-menu-end">
							<li><router-link class="dropdown-item" :to="base+'profile'"><i class="bi bi-person-fill" /> Profile</router-link></li>
							<li><router-link class="dropdown-item" :to="base+'stats'"><i class="bi bi-graph-up" /> Statistics</router-link></li>
							<li><hr class="dropdown-divider" /></li>
							<li><router-link class="dropdown-item" :to="base+'settings'"><i class="bi bi-sliders2" /> Settings</router-link></li>
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
@media screen and (min-width: 992px) {
	.navbar {
		max-height: 60px;
	}
}
@media screen and (max-width: 992px) {
	.navbar-nav {
		text-align: center;
	}
}
</style>