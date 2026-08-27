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
					<p class="mb-0">{{ entityName }} &copy; {{ fYear }}-{{ lYear }}. Game and website licensed under <a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank">MPL-2.0</a>.</p>
				</div>
				<div class="text-end d-inline-flex justify-content-end gap-3 ms-3">
					<a class="nav-link" href="https://sz5ylv1a.github.io" title="My main website"><i class="bi bi-globe" /></a>
					<a class="nav-link" href="https://bsky.app/profile/sz5ylv1a.bsky.social" title="Bluesky" target="_blank"><i class="bi bi-bluesky" /></a>
					<a class="nav-link" href="https://meow.social/@sz5ylv1a" title="Mastodon" target="_blank"><i class="bi bi-mastodon" /></a>
					<a class="nav-link" href="https://github.com/sz5ylv1a" title="GitHub" target="_blank"><i class="bi bi-github" /></a>
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