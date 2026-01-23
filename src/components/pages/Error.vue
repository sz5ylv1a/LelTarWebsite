<script setup lang="js">
// import errors from '@/assets/errors.json';

var code = 404;
var msg = "Page Not Found";

let randomTaglines = [
	"Well, shit.",
	"I don't think it worked...",
	"You shouldn't be here.",
	`<span class="h3">L</span>`,
	"haha xd"
];
let selectedTagline = randomTaglines[Math.floor(Math.random() * randomTaglines.length)];
</script>

<template>
	<div class="container-xxl">
		<h1>{{ code }} - {{ msg }}</h1>
		<p>{{ selectedTagline }}</p>
	</div>
</template>

<style scoped>

</style>