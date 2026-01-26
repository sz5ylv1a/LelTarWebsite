let randomTaglines = [
	"Well, shit.",
	"I don't think it worked...",
	"You shouldn't be here.",
	`<span class="h3">L</span>`,
	"haha xd"
];
let selectedTagline = randomTaglines[Math.floor(Math.random() * randomTaglines.length)];

document.getElementById('errMsg').innerHTML = selectedTagline