<script setup lang="js">
defineProps({
	entityName: String,
	fYear: Number,
	lYear: Number
})
</script>

<template>
	<footer class="bg-body-tertiary px-3 py-3 mt-auto border-top border-body">
		<div class="container-xxl">
			<div class="d-flex">
				<div class="flex-fill text-start">
					<p class="mb-0">&#x1f12f; {{ entityName }} {{ fYear }}-{{ lYear }}. Game licensed under <a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank">MPL-2.0</a>, website <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a></p>
				</div>
				<div class="text-end d-inline-flex justify-content-end gap-3 ms-3">
					<a class="nav-link" href="mailto:omgkiddoesta@pm.me" title="Contact us via e-mail!"><i class="bi bi-envelope-fill"></i></a>
					<a class="nav-link" href="https://github.com/LohinSys" title="GitHub" target="_blank"><i class="bi bi-github"></i></a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	box-shadow: 5px 0 10px #000;
	min-height: 60px;
}
</style>