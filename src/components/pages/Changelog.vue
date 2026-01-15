<script lang="js">
export default {
	data() {
		return {
			latestGameVer: "0.0.2.8",
		}
	},
	mounted() {
		try {
			const latest = document.getElementById("v"+this.latestGameVer)
			latest.open = true
		}
		catch (error) {
			console.error(error)
		}
	}
}
// var openLatest = document.getElementById('latest').open

// openLatest = true;
</script>

<template>
	<div class="container-xxl">
		<h1>Changelog</h1>
	<p>This page contains the changelog of the game and server, documenting every possible version. <strong>The latest version is <code id="latest-version">v{{ latestGameVer }}</code>.</strong></p>
	<hr>
	<details id="v0.0.2.8">
		<summary class="h2">Game - v0.0.2.8 <span class="badge rounded-pill text-bg-success">Latest</span></summary>
		<ul>
			<li>Added actual blur effects, finally!</li>
			<li>A somewhat functional and W.I.P. difficulty system</li>
			<li>Nerfed high score requirement from 500,000 to 50,000</li>
			<li>Couple bugfixes, like...</li>
			<ul>
				<li>Tooltips and dropdown menus in pause screen no longer appearing behind it</li>
				<li>Some settings tooltips will now show the correct tooltip</li>
			</ul>
		</ul>
	</details>
	<details id="v0.0.2.7">
		<summary class="h2">Game - v0.0.2.7</summary>
		<ul>
			<li>Added a W.I.P. 3D scrolling background for stages</li>
			<li>An even more fleshed out menu complete with functional graphics settings</li>
			<li>Lots of small tweaks and changes...</li>
		</ul>
	</details>
	<details id="v0.0.2.2">
		<summary class="h2">Game - v0.0.2.2</summary>
		<ul>
			<li>Changed main number font</li>
			<li>Added a W.I.P. boss bar, containing info like boss health, name, current spellcard and a timer until the attack stops.</li>
			<li>Other small tweaks...</li>
		</ul>
	</details>
	</div>
</template>

<style scoped></style>