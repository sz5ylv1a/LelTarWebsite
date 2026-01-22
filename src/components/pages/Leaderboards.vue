<script setup>
	
</script>

<script lang="js">
export default {
	data() {
		return {
			difficulties: [],
			countries: []
		}
	},
	async mounted() {
		async function fetchFromApi(targetUrl, whereToOutput) {
			try {
				const response = await fetch(targetUrl);
				if (!response.ok) {
					throw new Error("Response status:",response.status);
				}
				whereToOutput = await response.json();
				console.debug("Fetched",targetUrl);
				console.debug(whereToOutput);
			}
			catch (error) {
				console.error(`An error has occured trying to fetch "${targetUrl}":\n${error}`);
			}
		}
		
		fetchFromApi("https://leltargame.tryasp.net/api/v1/Difficulties",this.difficulties);
		fetchFromApi("https://leltargame.tryasp.net/api/v1/Countries",this.countries);
	}
}
</script>

<template>
	<div class="container-xxl">
		<div class="d-flex align-items-center" style="margin-top:20px;">
			<div class="flex-fill"><h1 class="mb-0">Leaderboards</h1></div>
			<div class="d-flex gap-1 text-end">
				<div class="btn-group dropdown" id="filter-by">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Filter by
					</button>
					<ul class="dropdown-menu dropdown-menu-end">
						<li><h6 class="dropdown-header">Difficulty</h6></li>
						<li v-for="d in difficulties" :key="d.id"><button class="dropdown-item">{{ d.difficultyName }}</button></li>
						<li><hr class="dropdown-divider" /></li>
						<li><h6 class="dropdown-header">Country</h6></li>
						<li v-for="c in countries" :key="c.id"><button class="dropdown-item">{{ c.name }}</button></li>
					</ul>
				</div>
				<div class="btn-group dropdown" id="order-by">
					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Order by
					</button>
					<ul class="dropdown-menu dropdown-menu-end">
						<li><button class="dropdown-item active">Score and Difficulty</button></li>
						<li><button class="dropdown-item">Only by Score</button></li>
					</ul>
				</div>
			</div>
		</div>
		<hr />
		
		<div class="alert alert-info" id="lb-req-notice">
			<div class="d-flex align-items-center">
				<div class="flex-fill">ℹ️ Only scores above <strong>50,000</strong> and <strong>Easy</strong> difficulty can appear on the leaderboards!</div>
				<div>
					<button type="button" class="btn-close" aria-label="Close" onclick="closeReqNotice()"></button>
				</div>
			</div>
		</div>
		<div class="table-responsive-lg">
			<table class="table table-striped table-sm caption-top">
				<caption><em>The leaderboards have not been implemented yet, but here's what you can look forward to in the meantime...</em></caption>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Username / Player</th>
						<th scope="col">Score</th>
						<th scope="col">Difficulty</th>
						<th scope="col">Achieved</th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<tr>
						<th scope="row">1</th>
						<td>Ellie9192</td>
						<td>1,232,600</td>
						<td>Lunatic</td>
						<td>January 21st, 2026 @ 16:03:32</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>xXx_DemonSlayer124_xXx</td>
						<td>986,450</td>
						<td>Lunatic</td>
						<td>January 14th, 2026 @ 18:21:44</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>test_account</td>
						<td>625,500</td>
						<td>Hard</td>
						<td>November 18th, 2025 @ 13:56:01</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>gamerboy87</td>
						<td>502,850</td>
						<td>Normal</td>
						<td>December 10th, 2025 @ 12:00:09</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped>
h1 {margin-top:0;}
</style>