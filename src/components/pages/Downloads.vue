<script lang="js">
import { ref, toRaw } from "vue";
import checksumsDotJson from "/checksum.json?url";

export default {
	data() {
		return {
			checksum: ref([])
		}
	},
	async mounted() {
		async function fetchFromReleases(target, output) {
			try {
				const response = await fetch(target);
				if (!response.ok) {
					throw new Error("HTTP Error! Status:",response.status)
				}
				let dat = await response.json();
				output.push(dat);
				console.log("Fetched",target);
				console.log(toRaw(output[0]));
			}
			catch (error) {
				console.error(`An error has occured trying to fetch "${target}":\n`,error);
			}
		}

		fetchFromReleases(checksumsDotJson, this.checksum);
	}
}
</script>

<template>
	<div class="container-xxl">
		<h1><i class="bi bi-download" /><span>Downloads</span></h1>
		<p>This download page is for all possible downloads. Make sure you pick the right platform and CPU architecture. <em class="text-secondary">(ARM64 is not supported, this is an x86 household)</em></p>
		<div class="alert alert-info d-flex gap-2" role="alert">
			<div>&#x2139;</div>
			<div><strong>This game is currently in a very unfinished state!!</strong> If you have any high expectations about this, don't expect anything good, nor should you spam and complain in my inbox about that.</div>
		</div>
		<hr />
		<h2 id="windows"><i class="bi bi-windows"></i> Windows</h2>
		<p>This was tested only on <strong>Windows 10-11</strong>, but it might work on Windows 7-8.x too. All installers were built using NSIS.</p>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarUserSetupX64.exe" role="button" class="btn btn-success">
				<i class="bi bi-filetype-exe"></i> Installer (64-bit, .exe)
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGamePortableX64.zip" role="button" class="btn btn-success">
				<i class="bi bi-archive"></i> Portable (64-bit, .zip)
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGamePortableX64.tar.gz" role="button" class="btn btn-success">
				<i class="bi bi-archive"></i> Portable (64-bit, .tar.gz)
			</a>
		</div>
		<h5>SHA-256 Checksums:</h5>
		<ul>
			<li>Installer: <code v-if="checksum.length != 0">{{ checksum[0].win64.ins }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
			<li>Executable: <code v-if="checksum.length != 0">{{ checksum[0].win64.bin }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
		</ul>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarUserSetupX86.exe" role="button" class="btn btn-outline-success">
				<i class="bi bi-filetype-exe"></i> Installer (32-bit, .exe)
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGamePortableX86.zip" role="button" class="btn btn-outline-success">
				<i class="bi bi-archive"></i> Portable (32-bit, .zip)
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGamePortableX86.tar.gz" role="button" class="btn btn-outline-success">
				<i class="bi bi-archive"></i> Portable (32-bit, .tar.gz)
			</a>
		</div>
		<h5>SHA-256 Checksums:</h5>
		<ul>
			<li>Installer: <code v-if="checksum.length != 0">{{ checksum[0].win32.ins }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
			<li>Executable: <code v-if="checksum.length != 0">{{ checksum[0].win32.bin }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
		</ul>
		<hr />
		<h2 id="linux"><i class="bi bi-tux"></i> Linux</h2>
		<p>Linux versions are currently only available in 64-bit, and are distributed as portable installations as I don't wanna bother making an AppImage for it yet.</p>
		<p>This was tested only on <strong>Arch Linux</strong>.</p>
		<div class="alert alert-warning d-flex gap-2" role="alert">
			<div>&#x26a0;</div>
			<div><strong>You might need to use <code>chmod +x</code> to allow the game to start.</strong> This must be applied to both the <code>.x86_64</code> executable and <code>.sh</code> script <em>(if it's a debug build)</em> for it to work.</div>
		</div>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGame-linux.tar.gz" role="button" class="btn btn-success">
				<i class="bi bi-archive"></i> Portable (64-bit, .tar.gz)
			</a>
		</div>
		<p class="text-start">SHA-256 Checksum: <code v-if="checksum.length != 0">{{ checksum[0].linux.bin }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></p>
		<hr />
		<h2 id="macos"><i class="bi bi-apple"></i> macOS</h2>
		<p class="text-start">No. Not happening. <em>(just use wine/proton or something lmfao)</em></p>
		<hr />
		<h2 id="sourcecode"><i class="bi bi-code-slash"></i> Source Code</h2>
		<p>Want the source code for this game? Including every single asset and janky code?</p>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/archive/refs/tags/v0.2.12.1.zip" role="button" class="btn btn-secondary">
				<i class="bi bi-archive"></i> .zip
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/archive/refs/tags/v0.2.12.1.tar.gz" role="button" class="btn btn-secondary">
				<i class="bi bi-archive"></i> .tar.gz
			</a>
			<a role="button" class="btn btn-outline-secondary" href="https://github.com/LohinSys/LelTarGame" target="_blank">
				<i class="bi bi-github"></i> GitHub Repository
			</a>
		</div>
	</div>
</template>

<style scoped>
h2 {
	display: inline-flex;
	gap: 10px;
}
h5 {
	margin-bottom: 0;
}
.placeholder-wave span {
	border-radius: 4px;
}
</style>