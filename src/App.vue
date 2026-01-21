<script setup lang="js">
import navbar from './components/navbar.vue'
import PageFooter from './components/page-footer.vue';
</script>

<template>
	<navbar current-page="Home" logged-in="false" />
	<div class="page-shit">
		<div class="content mb-5">
			<router-view />
		</div>
		<page-footer entity-name="LohinSys" f-year=2024 l-year=2026 />
	</div>
</template>

<style>
.navbar {
	box-shadow: 5px 0 10px #000;
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
