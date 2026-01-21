<script setup lang="js">
defineProps({
	entityName: String,
	fYear: Number,
	lYear: Number
})
</script>

<template>
    <footer class="bg-body-tertiary px-3 py-3 mt-auto text-center border-top border-body">
		{{ entityName }} <span class="copyleft">&copy;</span> {{ fYear }}-{{ lYear }}<br>
	</footer>
</template>

<style scoped>
footer {
	box-shadow: 5px 0 10px #000;
	height: 60px;
	max-height: 60px;
}
.copyleft {
	display: inline-block;
	transform: rotate(180deg);
}
</style>