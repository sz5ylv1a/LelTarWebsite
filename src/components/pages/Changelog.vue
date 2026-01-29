<script lang="js">
export default {
	data() {
		return {
			latestGameVer: "0.0.2.8",
			latestApiVer: "1.0",
		}
	},
	mounted() {
		try {
			function openLatest(type,verId) {
				const latest = document.getElementById(type+"-"+verId);
				latest.open = true;
			}

			openLatest("game",this.latestGameVer);
			openLatest("api",this.latestApiVer)
		}
		catch (error) {
			console.error(error)
		}
	}
}
</script>

<template>
	<div class="container-xxl">
		<h1><i class="bi bi-clock-history"></i> Changelog</h1>
	<p>This page contains the changelog of the game and server, documenting every possible version.</p>
	<hr>
	<details id="api-1.0">
		<summary class="h2"><i class="bi bi-database"></i> API - v1.0 <span class="badge rounded-pill text-bg-success">Latest</span></summary>
		<ul>
			<li>Initial release...?</li>
		</ul>
	</details>
	<details id="game-0.0.2.8">
		<summary class="h2"><i class="bi bi-controller"></i> Game - v0.0.2.8 <span class="badge rounded-pill text-bg-success">Latest</span></summary>
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
	<details id="game-0.0.2.7">
		<summary class="h2"><i class="bi bi-controller"></i> Game - v0.0.2.7</summary>
		<ul>
			<li>Added a W.I.P. 3D scrolling background for stages</li>
			<li>An even more fleshed out menu complete with functional graphics settings</li>
			<li>Lots of small tweaks and changes...</li>
		</ul>
	</details>
	<details id="game-0.0.2.2">
		<summary class="h2"><i class="bi bi-controller"></i> Game - v0.0.2.2</summary>
		<ul>
			<li>Changed main number font</li>
			<li>Added a W.I.P. boss bar, containing info like boss health, name, current spellcard and a timer until the attack stops.</li>
			<li>Other small tweaks...</li>
		</ul>
	</details>
	</div>
</template>

<style scoped></style>