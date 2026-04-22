<template>
	<div class="container-xxl">
		<h1><i class="bi bi-info-circle-fill" /><span>About this game</span></h1>
		<p><strong>Lel.tar</strong> is an <strong>arcade-style <abbr title="Shoot 'em Up">"shmup"</abbr></strong> game, heavily inspired by games like <strong>Touhou Project</strong> and <strong>QP Shooting</strong>. It features simple graphics, guaranteed to run smooth enough even on weaker integrated GPUs <em>(i.e. Intel&reg; HD/UHD Graphics)</em>; as well as the same engaging gameplay carefully designed for any kind of player.</p>
		<hr />
		
		<h2 id="backstory"><i class="bi bi-hourglass-split" /><span>Backstory / Prologue</span></h2>
		<p>You went to order a package from your favourite shopping site, SchmitarMarkt. The delivery man from <abbr title="Outback-Outeast Postal Service">OOPS</abbr> comes to place it in front of your door. You come and get it, and- uh oh! Some shady porch pirates come to beat you up and steal the package from you, and then they fly away to their organization's <em>(<abbr title="Deportation of Imported Crates Syndicate">DICS</abbr>)</em> warehouse to then maybe resell it. Having experienced that, as well as hearing news of other locals being affected by those guys, it's time to fly up and follow them to the warehouse to retrieve the package(s) once and for all!</p>
		<hr />
		
		<h2 id="controls"><i class="bi bi-joystick" /><span>Controls</span></h2>
		<div class="table-responsive">
			<table class="table table-striped table-bordered">
				<thead>
					<tr>
						<th scope="col">Action</th>
						<th scope="col">Keyboard</th>
						<th scope="col">Controller (Xbox/Nintendo) <sup class="text-warning">3</sup></th>
						<th scope="col">Controller (PlayStation) <sup class="text-warning">3</sup></th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<tr>
						<th scope="row">Move</th>
						<td><kbd>&#x1f808;</kbd> <kbd>&#x1f80b;</kbd> <kbd>&#x1f809;</kbd> <kbd>&#x1f80a;</kbd> / <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> / <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>5</kbd> <sub><em>(Numpad)</em></sub> <sup class="text-info">4</sup></td>
						<td><span class="xbox-btns">S</span> / <span class="xbox-btns">&lt;</span></td>
						<td><span class="ps-btns">S</span> / <span class="ps-btns">&lt;</span></td>
					</tr>
					<tr>
						<th scope="row">Shoot</th>
						<td><kbd>Y</kbd> / <kbd>Z</kbd></td>
						<td><span class="xbox-btns">a</span> / <span class="switch-btns">b</span> <sup>1</sup></td>
						<td class="ps-btns">x</td>
					</tr>
					<tr>
						<th scope="row">Focus</th>
						<td><kbd>LShift</kbd> / <kbd>RShift</kbd></td>
						<td><span class="xbox-btns">&lbrack;</span> / <span class="xbox-btns">&rbrack;</span> &bull; <span class="switch-btns">&lbrack;</span> / <span class="switch-btns">&rbrack;</span></td>
						<td><span class="ps-btns">&lbrack;</span> / <span class="ps-btns">&rbrack;</span></td>
					</tr>
					<tr>
						<th scope="row">Bomb</th>
						<td><kbd>X</kbd></td>
						<td><span class="xbox-btns">b</span> / <span class="switch-btns">a</span> <sup>1</sup></td>
						<td><span class="ps-btns">c</span></td>
					</tr>
					<tr>
						<th scope="row">Pause</th>
						<td><kbd>Esc</kbd></td>
						<td>Start / <span class="xbox-btns">m</span></td>
						<td>Start / <span class="ps-btns">o</span> <sup>2</sup></td>
					</tr>
				</tbody>
				<caption class="pb-0">
					<p class="mb-0"><sup>1</sup> A and B button positions are flipped on Nintendo controllers</p>
					<p class="mb-0"><sup>2</sup> PS4 and later controllers have the Start button replaced as Options</p>
					<p class="mb-0 text-warning" style="opacity:85%;"><sup>3</sup> <strong>Controller support is experimental and might not work at all in most cases!!</strong></p>
					<p class="mb-0 text-info" style="opacity:85%;"><sup>4</sup> <strong>Numpad keys are currently producing glitchy behaviour with movement when shooting and focusing are held down too.</strong> I recommend playing with arrow keys instead for now until further notice</p>
				</caption>
			</table>
		</div>
		<hr />
		
		<h2 id="technical-details"><i class="bi bi-tools" /><span>Technical details</span></h2>
		<p>This game was made using <strong><a href="https://godotengine.org/download/archive/#4.5.2" target="_blank">Godot Engine 4.5.2</a></strong> using the <strong>GDScript</strong> language. It supports native <strong>Vulkan</strong> rendering, with fallbacks for <strong>DirectX 12</strong> and <strong>OpenGL 3</strong> if not supported by the hardware.</p>
		<p>Compatibility with <strong><a href="https://www.winehq.org/" target="_blank">Wine</a> and <a href="https://en.wikipedia.org/wiki/Proton_(software)" target="_blank">Proton</a></strong> should be quite good if you choose to play the game this way, especially on macOS.</p>
		<h3 id="system-requirements"><i class="bi bi-pc-display" /><span>System requirements</span></h3>
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<h4><i class="bi bi-slash-circle" /><span>Minimum</span></h4>
					<ul>
						<li><b>OS:</b> Windows 10 <em>(or equivalent Linux and/or Wine version)</em></li>
						<li><b>CPU:</b> x86_64 CPU with SSE4.2 support</li>
						<li><b>RAM:</b> 4 GB</li>
						<li><b>GPU:</b> Support for OpenGL 3.3 <em>(or newer/equivalent)</em></li>
						<li><b>Storage:</b> 150 MB of free space</li>
					</ul>
				</div>
				<div class="col">
					<h4><i class="bi bi-check-circle" /><span>Recommended</span></h4>
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

<style scoped>
@font-face {
	font-family: "Xbox Buttons";
	src: url(/res/fonts/xbox.otf);
}
@font-face {
	font-family: "PlayStation Buttons";
	src: url(/res/fonts/ps.otf);
}
@font-face {
	font-family: "Switch Buttons";
	src: url(/res/fonts/switch.otf);
}
.xbox-btns {
	font-family: "Xbox Buttons";
}
.ps-btns {
	font-family: "PlayStation Buttons";
}
.switch-btns {
	font-family: "Switch Buttons";
}
h2, h3, h4 {
	display: inline-flex;
}
h2 {
	gap: 10px;
}
h3 {
	gap: 8.5px;
}
h4 {
	gap: 7px;
}
</style>
