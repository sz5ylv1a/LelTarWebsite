<script setup lang="js">
var checksumWin64 = "73cbd9141486943a4cc2dfccc0dfda9a2ae1ed8f437e9debcd06409d32616c6a"
var checksumWin32 = "bd17e8655457ce092219b5f10fa71a39dc1f39e42d295592d8a0cd729dd5ad21"
var checksumLinux = "75d90693b6209e2d649271c19be34bd6402afcfd16d342197dbf16a5fc49f1b8"
</script>

<template>
	<div class="container-xxl">
		<h1>Downloads</h1>
		<p>This download page is for all possible downloads. Make sure you pick the right platform and CPU architecture. <i>(ARM64 is not supported, this is an x86 household)</i></p>
		<hr />
		<h2 id="windows">Windows</h2>
		<p>This was tested only on <strong>Windows 10-11</strong>, but it might work on Windows 7-8.x too.</p>
		<div class="d-flex gap-1 mb-1">
			<button type="button" class="btn btn-success">Installer (64-bit, .exe)</button>
			<button type="button" class="btn btn-success">Portable (64-bit, .zip)</button>
			<button type="button" class="btn btn-success">Portable (64-bit, .tar.gz)</button>
		</div>
		<p>SHA-256 Checksum: <code>{{ checksumWin64 }}</code></p>
		<div class="d-flex gap-1 mb-1">
			<button type="button" class="btn btn-outline-success">Installer (32-bit, .exe)</button>
			<button type="button" class="btn btn-outline-success">Portable (32-bit, .zip)</button>
			<button type="button" class="btn btn-outline-success">Portable (32-bit, .tar.gz)</button>
		</div>
		<p>SHA-256 Checksum: <code>{{ checksumWin32 }}</code></p>
		<hr />
		<h2 id="linux">Linux</h2>
		<p>Linux versions are currently only available in 64-bit, and are distributed as portable installations as I don't wanna bother making an AppImage for it yet.</p>
		<p>This was tested only on <strong>Arch Linux</strong>.</p>
		<div class="alert alert-warning" role="alert">
			⚠	<strong>You might need to use <code>chmod +x</code> to allow the game to start.</strong> This must be applied to both the <code>.x86_64</code> executable and <code>.sh</code> script for it to work.
		</div>
		<div class="d-flex gap-1 mb-1">
			<button type="button" class="btn btn-success">Portable (64-bit, .tar.gz)</button>
		</div>
		<p>SHA-256 Checksum: <code>{{ checksumLinux }}</code></p>
		<hr />
		<h2 id="macos">macOS</h2>
		<p>No. Not happening. Just use Wine or something lmfao</p>
		<hr />
		<h2 id="sourcecode">Source Code</h2>
		<p>Want the source code for this game? Including every single asset and janky code?</p>
		<div class="d-flex gap-1 mb-1">
			<button type="button" class="btn btn-outline-secondary">.zip</button>
			<button type="button" class="btn btn-outline-secondary">.tar.gz</button>
		</div>
	</div>
</template>

<style scoped></style>