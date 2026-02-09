<script setup lang="js">
let randomTaglines = [
	"Well, shit.",
	"I don't think it worked...",
	"You shouldn't be here.",
	`<span class="h3">L</span>`,
	"haha xd"
];

let selectedTagline = randomTaglines[Math.floor(Math.random() * randomTaglines.length)];
</script>

<template>
	<div class="container-xxl">
		<h1 id="errTitle">404 Error - Page Not Found</h1>
		<p id="errMsg">{{ selectedTagline }}</p>
		<button type="button" :onclick="history.back()">Go back</button>
	</div>
</template>

<style scoped>
body {
	font-family: var(--main-font);
	text-align: center;
	scrollbar-width: thin;
	background-color: var(--bg-colour);
	color: #dee2e6;
}
code, kbd {
	font-family: JetBrains Mono, "Noto Color Emoji", "Noto Emoji", monospace;
}
#errTitle {
	font-size: 4rem;
}
#errMsg {
	font-size: 2rem;
	font-style: italic;
}
button {
	font-family: var(--main-font);
	font-size: 1.4rem;
	margin-top: 50px;
	padding: 0.7rem;
	background-color: transparent;
	color: #dee2e6;
	border: 2px solid #dee2e6;
	border-radius: 10px;
	cursor: default;
}
button:active {
	background-color: #dee2e6;
	color: var(--bg-colour);
}
</style>