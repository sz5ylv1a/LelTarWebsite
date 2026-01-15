<script setup lang="js"></script>

<template>
	<div class="container-xxl">
		<h1>About this game</h1>
		<p><strong>Lel.tar</strong> is an <strong>arcade-style <abbr title="Shoot 'em Up">"shmup"</abbr></strong> game, heavily inspired by games like <strong>Touhou Project</strong> and <strong>QP Shooting</strong>. It features simple graphics, guaranteed to run smooth enough even on weaker integrated GPUs <em>(i.e. Intel&reg; HD/UHD Graphics)</em>; as well as the same engaging gameplay carefully designed for any kind of player.</p>
		<hr />
		
		<h2 id="backstory">Backstory / Prologue</h2>
		<p>You went to order a package from your favourite shopping site, SchmitarMarkt. The delivery man from <abbr title="Outback-Outeast Postal Service">OOPS</abbr> comes to place it in front of your door. You come and get it, and- uh oh! Some shady porch pirates come to beat you up and steal the package from you, and then they fly away to their organization's <em>(<abbr title="Deportation of Imported Crates Syndicate">DICS</abbr>)</em> warehouse to then maybe resell it. Having experienced that, as well as hearing news of other locals being affected by those guys, it's time to fly up and follow them to the warehouse to retrieve the package(s) once and for all!</p>
		<hr />
		
		<h2 id="controls">Controls</h2>
		<div class="table-responsive">
			<table class="table table-striped table-bordered">
				<thead>
					<tr>
						<th scope="col">Action</th>
						<th scope="col">Keyboard</th>
						<th scope="col">Controller (Xbox/Nintendo)</th>
						<th scope="col">Controller (PlayStation)</th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<tr>
						<th scope="row">Move</th>
						<td><kbd>⬅</kbd> <kbd>⬇</kbd> <kbd>⬆</kbd> <kbd>➡</kbd> / <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> / <kbd>Numpad1</kbd> <kbd>Numpad2</kbd> <kbd>Numpad3</kbd> <kbd>Numpad5</kbd></td>
						<td>D-pad / Left Joystick</td>
						<td>D-pad / Left Joystick (L3)</td>
					</tr>
					<tr>
						<th scope="row">Shoot</th>
						<td><kbd>Y</kbd> / <kbd>Z</kbd></td>
						<td>A</td>
						<td>Cross</td>
					</tr>
					<tr>
						<th scope="row">Focus</th>
						<td><kbd>LShift</kbd> / <kbd>RShift</kbd></td>
						<td>LB / RB</td>
						<td>L1 / R1</td>
					</tr>
					<tr>
						<th scope="row">Bomb</th>
						<td><kbd>X</kbd></td>
						<td>B</td>
						<td>Circle</td>
					</tr>
					<tr>
						<th scope="row">Pause</th>
						<td><kbd>Esc</kbd></td>
						<td>Start / Menu</td>
						<td>Start / Options</td>
					</tr>
				</tbody>
			</table>
		</div>
		<hr />
		
		<h2 id="technical-details">Technical details</h2>
		<p>This game was made using <strong><a href="https://godotengine.org/" target="_blank">Godot Engine v4.5.1</a></strong> using the <strong>GDScript</strong> language. It supports native <strong>Vulkan</strong> rendering, with fallbacks for <strong>DirectX 12</strong> and <strong>OpenGL 3</strong> if not supported by the hardware.</p>
		<p>Compatibility with <strong><a href="https://www.winehq.org/" target="_blank">Wine</a> and <a href="https://en.wikipedia.org/wiki/Proton_(software)" target="_blank">Proton</a></strong> should be quite good if you choose to play the game this way, especially on macOS.</p>
		<h3 id="system-requirements">System requirements</h3>
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<h4>Minimum</h4>
					<ul>
						<li><b>OS:</b> Windows 10 <em>(or equivalent Linux and/or Wine version)</em></li>
						<li><b>CPU:</b> x86_64 CPU with SSE4.2 support</li>
						<li><b>RAM:</b> 4 GB</li>
						<li><b>GPU:</b> Support for OpenGL 3.3 <em>(or newer/equivalent)</em></li>
						<li><b>Storage:</b> 150 MB of free space</li>
					</ul>
				</div>
				<div class="col">
					<h4>Recommended</h4>
					<ul>
						<li><b>OS:</b> Windows 10 <em>(or equivalent Linux and/or Wine version)</em></li>
						<li><b>CPU:</b> Intel&reg; Core&trade; i7-3770 <em>(or equivalent)</em></li>
						<li><b>RAM:</b> 8 GB</li>
						<li><b>GPU:</b> Support for Vulkan 1.2 <em>(or newer)</em></li>
						<li><b>Storage:</b> 250 MB of free space or more</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
