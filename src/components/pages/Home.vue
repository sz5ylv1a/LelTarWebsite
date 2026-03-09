<script setup lang="js">
const base = `/${import.meta.env.VITE_BASE_ROUTE}/`;

// image alt texts
const upsell_b1 = "Hard Difficulty Demonstration Screenshot from v0.2.12.1"
const upsell_b2 = "placeholder image"
</script>

<template>
	<div id="mainCarousel" class="carousel slide">
		<div class="carousel-indicators" data-bs-theme="light">
			<button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
		</div>
		<div class="carousel-inner border-bottom border-body" style="box-shadow: 0 0 10px #000000c0;">
			<div class="carousel-item active">
				<img src="/res/images/carousel/slide1.png" class="d-block w-100" alt="In-game title screen background" style="filter:brightness(50%);">
				<div class="carousel-content text-center">
					<h1>Lel.tar</h1>
					<p class="text-center">An arcade-style "bullet hell" Shoot 'em Up game, taking you to an adventure of searching for a stolen package...</p>
					<router-link role="button" class="btn btn-lg btn-outline-primary" :to="base+'downloads'" style="line-height:1;">
						<div class="row row-cols-auto">
							<div class="col align-self-center justify-content-center pe-0">
								<i class="bi bi-download"></i>
							</div>
							<div class="col text-start">
								Download now!<br>
								<span style="font-size:0.75rem;">for Windows & Linux</span>
							</div>
						</div>
					</router-link>
				</div>
			</div>
			<div class="carousel-item">
				<img src="/res/images/carousel/slide2.png" class="d-block w-100" alt="Demo Image 2">
			</div>
			<div class="carousel-item">
				<img src="/res/images/carousel/slide3.png" class="d-block w-100" alt="Demonstration of the bomb mechanic: aftermath">
			</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev" data-bs-theme="light">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next" data-bs-theme="light">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
	
	<div class="pt-4 px-5">
		<div class="container-xxl">
			<div class="alert alert-info d-flex gap-2" role="alert">
				<div>&#x2139;</div>
				<div><strong>This game is currently in a very unfinished state!!</strong> If you have any high expectations about this, don't expect anything good, nor should you spam and complain in my inbox about that.</div>
			</div>
		</div>
	</div>
	<div class="text-start py-5 px-5">
		<div class="container-xxl" id="upsell1">
			<div class="row">
				<div class="col-lg order-lg-1 align-self-lg-center">
					<h2>Brace for an exciting challenge!</h2>
					<p class="text-center text-lg-start">For the beginners and the absolute savages, Lel.tar does not hold back in difficulty, and has been fairly balanced for every kind of bullet hell player.</p>
				</div>
				<div class="col-lg-auto order-lg-2 text-center text-lg-end">
					<img class="rounded upsell-shadow" src="/res/images/upsell/block1.png" :alt="upsell_b1" :title="upsell_b1" height="300">
				</div>
			</div>
		</div>
	</div>
	<div class="bg-body-tertiary text-end py-5 px-5 border-top border-bottom border-body upsell-shadow">
		<div class="container-xxl" id="upsell2">
			<div class="row">
				<div class="col-lg order-lg-2 align-self-lg-center">
					<h2>All from the classics!</h2>
					<p class="text-center text-lg-end">Inspired by games like <strong>Touhou Project</strong>, Lel.tar features gameplay, visuals and various other mechanics similar to it, whilst still adding its own unique spin for an equally as awesome experience!</p>
				</div>
				<div class="col-lg-auto order-lg-1 text-center text-lg-end">
					<img class="rounded upsell-shadow" src="/res/images/upsell/block2.png" :alt="upsell_b2" :title="upsell_b2" height="300">
				</div>
			</div>
		</div>
	</div>
	<div class="text-center py-5 px-5">
		<div class="container-xxl" id="ready-upsell">
			<h2>Ready to disembark?</h2>
			<router-link role="button" class="btn btn-lg btn-outline-primary" :to="base+'downloads'" style="line-height:1">
				<div class="row row-cols-auto">
					<div class="col align-self-center justify-content-center pe-0">
						<i class="bi bi-download"></i>
					</div>
					<div class="col text-start">
						Download now!<br>
						<span style="font-size:0.75rem;">for Windows & Linux</span>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
h1 {
	margin-bottom: 4px;
	display: block;
	gap: 0;
}
.carousel-content h1, .carousel-content p {
	margin-top: initial;
	color: #dee2e6;
}
.carousel-content {
	position: absolute;
	bottom: 15vw;
	left: 10vw;
	right: 10vw;
	justify-content: center;
	z-index: 20;
	color: var(--bs-body-color);
	text-shadow: 0 1.5px 4px #000;
}
@media screen and (max-width: 529px) {
	.carousel-content {
		bottom: 10vw;
	}
}
@media screen and (max-width: 500px) {
	.carousel-content {
		bottom: 8vw;
	}
}
.carousel-content .btn,
#ready-upsell .btn {
	text-shadow: 0 1.5px 4px #000;
	box-shadow:	0 1.5px 4px #000000a0, inset 0 1.5px 4px #000000a0;
}
.carousel-content .btn:hover,
#ready-upsell .btn:hover {
	text-shadow: none;
	box-shadow:	0 1.5px 4px #000000a0;
}
@media screen and (max-width: 991px) {
	#upsell1, #upsell2 {
		text-align: center;
	}
}
.upsell-shadow {
	box-shadow: 0 0 10px #000000c0;
}
#upsell1 div div img {
	rotate: 2.5deg;
}
#upsell2 div div img {
	rotate: -2.5deg;
}
</style>
