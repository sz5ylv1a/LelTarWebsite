<template>
	<div class="container-xxl">
		<h1><i class="bi bi-clock-history" /><span>Changelog</span></h1>
		<p>This page contains the changelog of the game and server, documenting every possible version.</p>
		<hr>
		<details :open="false" id="game-0.3.0">
			<summary class="h2">
				<div>
					<i class="bi bi-controller" />
					<span>Game - v0.3.0</span>
					<span class="badge rounded-pill text-bg-secondary">Not released</span>
				</div>
			</summary>
			<h5>By far the biggest update yet!</h5>
			<ul>
				<li>Tweaked grazing a little bit</li>
				<li>Reworked whole internal game logic</li>
				<li>Added a new attack into the game</li>
				<li>Raised minimum high score requirements from 50,000 to 100,000 due to major scoring changes</li>
				<li>The main game has actual music now, not just the title screen</li>
				<li>In addition, the whole background has been revamped too</li>
				<li>The boss actually has a name now; her name is <strong>Ayane Hanako</strong></li>
				<li>A new and much more simpler health system, as well as redesigned health and bomb bars entirely</li>
				<li>You can now use whatever framerate you want, up to <strong>500+ FPS</strong>! ...as long as V-Sync is disabled, of course</li>
				<li>Actually implemented online account support instead of using a fake dummy login prompt</li>
			</ul>
			<h6>Bugfixes:</h6>
			<ul>
				<li>Fix for shooting and focusing sometimes resetting your movement speed</li>
				<li>Fix volume sliders randomly setting themselves to incorrect values</li>
			</ul>
		</details>
		<details :open="true" id="api-2.0">
			<summary class="h2">
				<div>
					<i class="bi bi-database" />
					<span>API - v2.0</span>
					<span class="badge rounded-pill text-bg-success">Latest</span>
				</div>
			</summary>
			<ul>
				<li>Major security changes</li>
				<li>An actually functional auth</li>
				<li>A way better structure for managing stuff like submission and account settings <em>(coming soon)</em></li>
				<li class="mt-4">oh yeah and v1 is fully read-only now, sorry if you were using that</li>
			</ul>
		</details>
		<details :open="true" id="game-0.2.13">
			<summary class="h2">
				<div>
					<i class="bi bi-controller" />
					<span>Game - v0.2.13</span>
					<span class="badge rounded-pill text-bg-success">Latest</span>
				</div>
			</summary>
			<ul>
				<li>Added an explosion animation to bullets that were affected by the bomb ability</li>
				<li>Additionally, you will now earn a bonus for every bullet you've exploded</li>
				<li>Added more menu sound effects and reworked handling of those</li>
				<li>Add <em>(experimental)</em> controller support, can't guarantee that it'll work</li>
				<li>Grazing is now fully functional, which also gives a small score bonus the more bullets you graze</li>
				<li>Restarting and exiting back to title is fully functional now</li>
				<li>Fixed a bug with the bomb sound not playing at the last bomb used</li>
				<li>Volume sliders finally work as they should now!</li>
			</ul>
		</details>
		<details :open="false" id="api-1.0">
			<summary class="h2">
				<div>
					<i class="bi bi-database" />
					<span>API - v1.0</span>
					<span class="badge rounded-pill text-bg-warning">Deprecated</span>
				</div>
			</summary>
			<ul>
				<li>Initial release...?</li>
			</ul>
		</details>
		<details :open="false" id="game-0.2.12.1">
			<summary class="h2">
				<div>
					<i class="bi bi-controller" />
					<span>Game - v0.2.12.1</span>
				</div>
			</summary>
			<h5>This is a versioned hotfix to change a couple things that I forgot to do and fix critical stuff<br /><strong class="fw-bolder">I strongly recommend updating your game to this version if you're still on v0.2.12</strong></h5>
			<ul>
				<li>Installed app name wasn't showing correctly, now it should show fine</li>
				<li>Internal consistency changes, including window titles and folder names being capitalized</li>
			</ul>
		</details>
		<details :open="false" id="game-0.2.12">
			<summary class="h2">
				<div>
					<i class="bi bi-controller" />
					<span>Game - v0.2.12</span>
				</div>
			</summary>
			<ul>
				<li>First publicly available release!</li>
				<li>Bumped up version to minor version <em>(0.2.x)</em> instead of patch version with "sub-patch" <em>(0.0.2.x)</em></li>
				<li>Couple tweaks and changes that I don't feel like listing down...</li>
			</ul>
		</details>
		<details :open="false" id="game-0.0.2.8">
			<summary class="h2">
				<div>
					<i class="bi bi-controller" />
					<span>Game - v0.0.2.8</span>
				</div>
			</summary>
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
		<details :open="false" id="game-0.0.2.7">
			<summary class="h2">
				<div>
					<i class="bi bi-controller" />
					<span>Game - v0.0.2.7</span>
				</div>
			</summary>
			<ul>
				<li>Added a W.I.P. 3D scrolling background for stages</li>
				<li>An even more fleshed out menu complete with functional graphics settings</li>
				<li>Lots of small tweaks and changes...</li>
			</ul>
		</details>
		<details :open="false" id="game-0.0.2.2">
			<summary class="h2">
				<div>
					<i class="bi bi-controller" />
					<span>Game - v0.0.2.2</span>
				</div>
			</summary>
			<ul>
				<li>Changed main number font</li>
				<li>Added a W.I.P. boss bar, containing info like boss health, name, current spellcard and a timer until the attack stops.</li>
				<li>Other small tweaks...</li>
			</ul>
		</details>
	</div>
</template>

<style scoped>
summary div {
	display: inline-flex;
	align-items: center;
	gap: 8px;
}
</style>

<script setup lang="js">
const
latestGameVer = "0.2.13",
latestApiVer = "2.0"

try {
	function openLatest(type, verId) {
		const latest = document.getElementById(`${type}-${verId}`);
		latest.open = true;
	}

	openLatest("game",latestGameVer);
	openLatest("api",latestApiVer)
}
catch (e) {
	console.error(e);
}
</script>