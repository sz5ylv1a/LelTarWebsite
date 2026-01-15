<script setup lang="js">
import navbar from './components/navbar.vue'
import PageFooter from './components/page-footer.vue';
</script>

<template>
	<navbar current-page="Home" logged-in="false" />
	<div class="content">
		<router-view />
	</div>
	<page-footer entity-name="LohinSys" f-year="2024" l-year="2026" />
</template>

<style>
.navbar {box-shadow: 5px 0 10px #000;}
h1 {margin-top: 20px;}
</style>
