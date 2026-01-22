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
			<div class="row">
				<div class="col text-start">
					<p><span class="copyleft">&copy;</span> {{ entityName }} {{ fYear }}-{{ lYear }}. Game licensed under <a href="">MPL-2.0</a>, website <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></p>
				</div>
				<div class="col text-end d-inline-flex justify-content-end gap-3">
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
	height: 60px;
	max-height: 60px;
}
.copyleft {
	display: inline-block;
	transform: rotate(180deg);
}
</style>