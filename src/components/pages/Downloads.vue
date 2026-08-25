<script setup lang="js">
import { ref, toRaw } from "vue";
import checksumsDotJson from "/checksum.json?url";

const checksum = ref([])

async function fetchFromReleases(target, output) {
	try {
		const response = await fetch(target, {
			method: 'GET',
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		}).then((r) => {return [r.ok, r.status, r.json()];});
		if (response[0]) {
			output.push(await response[2]);
			console.debug("Fetched",target);
			console.debug(toRaw(output)[0]);
		} else {throw new Error(`HTTP Error! (${response[1]})`);}
	}
	catch (e) {
		console.error(`An error has occured trying to fetch "${target}":\n`,e);
	}
}

fetchFromReleases(checksumsDotJson, checksum.value);
</script>

<template>
	<div class="container-xxl">
		<h1><i class="bi bi-download" /><span>Downloads</span></h1>
		<p>This download page is for all possible downloads. Make sure you pick the right platform and CPU architecture.</p>
		<div class="alert alert-info d-flex gap-2" role="alert">
			<div>&#x2139;</div>
			<div><strong>This game is currently in a very unfinished state!!</strong> If you have any high expectations about this, don't expect anything good, nor should you spam and complain in my inbox about that.</div>
		</div>
		<hr />
		<h2 id="windows"><i class="bi bi-windows" /> Windows</h2>
		<p>This was tested only on <strong>Windows 10-11</strong>, and are the only ones supported. All installers were built using NSIS.</p>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarUserSetupX64.exe" role="button" class="btn btn-success">
				<i class="bi bi-filetype-exe" /> <span>Installer (x64, .exe)</span>
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGamePortableX64.zip" role="button" class="btn btn-outline-success">
				<i class="bi bi-archive" /> <span>Portable (x64, .zip)</span>
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGamePortableX64.tar.gz" role="button" class="btn btn-outline-success">
				<i class="bi bi-archive" /> <span>Portable (x64, .tar.gz)</span>
			</a>
		</div>
		<h5>SHA-256 Checksums:</h5>
		<ul>
			<li>Installer: <code v-if="checksum.length != 0">{{ checksum[0].win_ins.x64 }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
			<li>Executable: <code v-if="checksum.length != 0">{{ checksum[0].win_bin.x64 }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
		</ul>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarUserSetupARM64.exe" role="button" class="btn btn-success">
				<i class="bi bi-filetype-exe" /> <span>Installer (ARM64, .exe)</span>
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGamePortableARM64.zip" role="button" class="btn btn-outline-success">
				<i class="bi bi-archive" /> <span>Portable (ARM64, .zip)</span>
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGamePortableARM64.tar.gz" role="button" class="btn btn-outline-success">
				<i class="bi bi-archive" /> <span>Portable (ARM64, .tar.gz)</span>
			</a>
		</div>
		<h5>SHA-256 Checksums:</h5>
		<ul>
			<li>Installer: <code v-if="checksum.length != 0">{{ checksum[0].win_ins.arm }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
			<li>Executable: <code v-if="checksum.length != 0">{{ checksum[0].win_bin.arm }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
		</ul>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/releases/download/v0.3.0/LelTarUserSetupX86.exe" role="button" class="btn btn-secondary">
				<i class="bi bi-filetype-exe" /> <span>Installer (x86/IA-32, .exe)</span>
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/download/v0.3.0/LelTarGamePortableX86.zip" role="button" class="btn btn-outline-secondary">
				<i class="bi bi-archive" /> <span>Portable (x86/IA-32, .zip)</span>
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/download/v0.3.0/LelTarGamePortableX86.tar.gz" role="button" class="btn btn-outline-secondary">
				<i class="bi bi-archive" /> <span>Portable (x86/IA-32, .tar.gz)</span>
			</a>
		</div>
		<h5>SHA-256 Checksums:</h5>
		<ul>
			<li>Installer: <code v-if="checksum.length != 0">{{ checksum[0].win_ins.x86 }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
			<li>Executable: <code v-if="checksum.length != 0">{{ checksum[0].win_bin.x86 }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
		</ul>
		<hr />
		<h2 id="linux"><i class="bi bi-tux" /> Linux</h2>
		<p>Linux versions are currently only distributed as portable installations as I don't wanna bother making an AppImage for it yet.</p>
		<p>This was only tested on <strong>Arch Linux</strong>.</p>
		<div class="alert alert-warning d-flex gap-2" role="alert">
			<div>&#x26a0;</div>
			<div><strong>You might need to use <code>chmod +x</code> to allow the game to start.</strong> This must be applied to the <code>.x86_64</code> and <code>.arm64</code> executables for it to work.</div>
		</div>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGame-linux.tar.gz" role="button" class="btn btn-success">
				<i class="bi bi-archive" /> <span>Portable (x64, .tar.gz)</span>
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/releases/latest/download/LelTarGame-linux.tar.gz" role="button" class="btn btn-success">
				<i class="bi bi-archive" /> <span>Portable (ARM64, .tar.gz)</span>
			</a>
			<a href="" role="button" class="btn btn-outline-success disabled" title="This distribution channel is coming soon.">
				<i class="bi bi-file-earmark-binary" /> <span>AppImage (coming soon)</span>
			</a>
		</div>
		<h5>SHA-256 Checksums:</h5>
		<ul>
			<li>Executable <em>(x64)</em>: <code v-if="checksum.length != 0">{{ checksum[0].linux.x64 }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
			<li>Executable <em>(ARM64)</em>: <code v-if="checksum.length != 0">{{ checksum[0].linux.arm }}</code><code class="placeholder-wave" v-else><span class="placeholder col-5"></span></code></li>
		</ul>
		<hr />
		<h2 id="macos"><i class="bi bi-apple" /> macOS</h2>
		<p class="text-start"><strong>No. Not happening.</strong> As much as I would release native builds for them, I have no Mac that I can use for testing. Not to mention that you'd have to manually whitelist the app in Gatekeeper, since signing it would cost me $100+ a month on top of the price I'd pay for <em>a</em> Mac.</p>
		<p>If you really want to play on macOS, <strong>use the Windows binaries with Wine or Proton</strong>.</p>
		<hr />
		<h2 id="sourcecode"><i class="bi bi-code-slash" /> Source Code</h2>
		<p>Want the source code for this game? Including every single asset and janky code?</p>
		<div class="d-flex gap-1 mb-1">
			<a href="https://github.com/LohinSys/LelTarGame/archive/refs/tags/v0.3.0.zip" role="button" class="btn btn-secondary">
				<i class="bi bi-archive" /> <span>.zip</span>
			</a>
			<a href="https://github.com/LohinSys/LelTarGame/archive/refs/tags/v0.3.0.tar.gz" role="button" class="btn btn-secondary">
				<i class="bi bi-archive" /> <span>.tar.gz</span>
			</a>
			<a role="button" class="btn btn-outline-secondary" href="https://github.com/LohinSys/LelTarGame" target="_blank">
				<i class="bi bi-github" /> <span>GitHub Repository</span>
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