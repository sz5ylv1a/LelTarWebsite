<script setup lang="js">
</script>

<template>
	<div id="carouselExampleIndicators" class="carousel slide" style="margin-bottom:30px;">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="/res/images/carousel/slide1.png" class="d-block w-100" alt="...">
			</div>
			<div class="carousel-item">
				<img src="/res/images/carousel/slide2.png" class="d-block w-100" alt="...">
			</div>
			<div class="carousel-item">
				<img src="/res/images/carousel/slide3.png" class="d-block w-100" alt="...">
			</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
	<div class="text-center px-3">
		<div class="container-xxl">
			<h1>Lel.tar</h1>
			<p class="text-center">An arcade-style "bullet hell" Shoot 'em Up game, taking you to an adventure of searching for a stolen package...</p>
			<button type="button" class="btn btn-lg btn-outline-primary" onclick="location.href='./download.html'" style="line-height:1;">Download now!<br><span style="font-size:0.75rem;">for Windows & Linux</span></button>
		</div>
	</div>
	<div class="bg-body-tertiary text-start mt-5 py-5 px-5">
		<div class="container-xxl">
			<h2>Brace for an exciting challenge!</h2>
			<p class="text-start">For the beginners and the absolute savages, Lel.tar does not hold back in difficulty, and has been fairly balanced for every kind of bullet hell player.</p>
		</div>
	</div>
	<div class="text-end py-5 px-5">
		<div class="container-xxl">
			<h2>All from the classics!</h2>
			<p class="text-end">Inspired by games like <strong>Touhou Project</strong>, Lel.tar features gameplay, visuals and various other mechanics similar to it, whilst still adding its own unique spin for an equally as awesome experience!</p>
		</div>
	</div>
	<div class="bg-body-tertiary text-start py-5 px-5">
		<div class="container-xxl">
			<h2>Brace for an exciting challenge!</h2>
			<p class="text-start">For the beginners and the absolute savages, Lel.tar does not hold back in difficulty, and has been fairly balanced for every kind of bullet hell player.</p>
		</div>
	</div>
	<div class="text-center py-5 px-5">
		<div class="container-xxl">
			<h2>Ready to disembark?</h2>
			<button type="button" class="btn btn-lg btn-outline-primary" onclick="location.href='./download.html'" style="line-height:1;">Download now!<br><span style="font-size:0.75rem;">for Windows & Linux</span></button>
		</div>
	</div>
</template>

<style scoped>
h1 {margin-top: initial;}
</style>
