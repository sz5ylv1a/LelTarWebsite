<script setup lang="js">
import { ref, toRaw } from 'vue';
import monthsJson from '/months.json?url';

function closeReqNotice() {
	const x = document.getElementById('lb-req-notice');
	x.style.display = "none";
}

// Source - https://stackoverflow.com/a
// Posted by Elias Zamaria, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-28, License - CC BY-SA 4.0
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<script lang="js">
export default {
	data() {
		return {
			difficulties: ref([]),
			countries: ref([]),
			users: ref([]),
			leaderboardEntries: ref([]),
			
			monthsNames: ref([])
		}
	},
	async mounted() {
		const apiUrl = import.meta.env.VITE_API_URL
		async function fetchFromApi(targetUrl, whereToOutput) {
			try {
				const response = await fetch(targetUrl);
				if (!response.ok) {
					throw new Error("HTTP Error! Status:",response.status)
				}
				let dat = await response.json();
				whereToOutput.push(dat)
				console.debug("Fetched",targetUrl);
				console.debug(toRaw(whereToOutput).flat());
			}
			catch (error) {
				console.error(`An error has occured trying to fetch "${targetUrl}":\n${error}`);
			}
		}
		
		fetchFromApi(apiUrl+'Difficulties', this.difficulties);
		fetchFromApi(apiUrl+'Countries', this.countries);
		fetchFromApi(apiUrl+'Users', this.users);
		fetchFromApi(apiUrl+'Lbs', this.leaderboardEntries);
		fetchFromApi(monthsJson, this.monthsNames);
	}
}

let sortingMode = ref(0)

function updateSorting(x) {
	const opt1 = document.getElementById("ordopt-1");
	const opt2 = document.getElementById("ordopt-2");
	
	if (sortingMode !== x) {
		sortingMode = x
		switch (sortingMode) {
			case 0:	// Score and Difficulty
			opt1.classList.add("active");
			opt2.classList.remove("active");
			case 1: // Only by Score
			opt1.classList.remove("active");
			opt2.classList.add("active");
		}
	}
}

function ordinalSuffix(i) {
	let j = i % 10,
	k = i % 100;
	if (j === 1 && k !== 11) {
		return i + "st";
	}
	if (j === 2 && k !== 12) {
		return i + "nd";
	}
	if (j === 3 && k !== 13) {
		return i + "rd";
	}
	return i + "th";
}

function newDate(z) {return new Date(z)}
</script>

<template>
	<div class="container-xxl">
		<div class="d-flex align-items-center" style="margin-top:20px;">
			<div class="flex-fill"><h1 class="mb-0">Leaderboards</h1></div>
			<div class="d-flex gap-1 text-end">
				<div class="btn-group dropdown" id="filter-by">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<i class="bi bi-funnel-fill"></i> Filter by
					</button>
					<ul class="dropdown-menu dropdown-menu-end">
						<li><h6 class="dropdown-header">Difficulty</h6></li>
						<li v-for="d in toRaw(difficulties.flat())" :key="d.id"><button class="dropdown-item">{{ d.icon }} {{ d.difficultyName }}</button></li>
						<li><hr class="dropdown-divider" /></li>
						<li><h6 class="dropdown-header">Country</h6></li>
						<li v-for="c in toRaw(countries.flat())" :key="c.id"><button class="dropdown-item">{{ c.flag }} {{ c.name }}</button></li>
					</ul>
				</div>
				<div class="btn-group dropdown" id="order-by">
					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<i class="bi bi-sort-up"></i> Order by
					</button>
					<ul class="dropdown-menu dropdown-menu-end order-by-menu">
						<li><button id="ordopt-1" @click="updateSorting(1)" class="dropdown-item">Score and Difficulty</button></li>
						<li><button id="ordopt-2" @click="updateSorting(2)" class="dropdown-item">Only by Score</button></li>
					</ul>
				</div>
			</div>
		</div>
		<hr />
		
		<div class="alert alert-info alert-dismissable fade show" id="lb-req-notice" role="alert">
			<div class="d-flex align-items-center">
				<div class="flex-fill">&#x2139; Only scores above <strong>50,000</strong> and <strong>Easy</strong> difficulty can appear on the leaderboards!</div>
				<div>
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
			</div>
		</div>
		<div class="table-responsive-lg">
			<table class="table table-striped table-sm caption-top">
				<caption class="pt-0"><em>Sorting and Filtering doesn't work yet!!!</em></caption>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Username / Player</th>
						<th scope="col">Score</th>
						<th scope="col">Difficulty</th>
						<th scope="col">Achieved</th>
					</tr>
				</thead>
				<tbody class="table-group-divider" v-if="leaderboardEntries.length">
					<tr v-for="(l, i) in toRaw(leaderboardEntries.flat()).sort((a,b) => b.score - a.score)" :key="l.id">
						<th scope="row">{{ numberWithCommas(i+1) }}</th>
						<td>
							{{ toRaw(users.flat()).find(u => u.id === l.usernameID).username }}
							<span class="badge text-secondary my-auto align-items-center" v-bind:title="toRaw(countries.flat()).find(c => c.id === toRaw(users.flat()).find(u => u.id === l.usernameID).countryID).name" style="cursor:default;">
								{{ toRaw(countries.flat()).find(c => c.id === toRaw(users.flat()).find(u => u.id === l.usernameID).countryID).flag }}
							</span>
						</td>
						<td>{{ numberWithCommas(l.score) }}</td>
						<td>{{ toRaw(difficulties.flat()).find(d => d.id === l.difficultyID).difficultyName }}</td>
						<td >
							{{ toRaw(monthsNames.flat()).find(m => m.id === newDate(l.achievedAt).getMonth()+1).name }} {{ ordinalSuffix(newDate(l.achievedAt).getDate()) }}, {{ newDate(l.achievedAt).getFullYear() }} @
							{{ newDate(l.achievedAt).getHours() }}:{{ ('0'+newDate(l.achievedAt).getMinutes()).slice(-2) }}:{{ ('0'+newDate(l.achievedAt).getSeconds()).slice(-2) }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped>
h1 {margin-top:0;}
#filter-by .dropdown-menu {
	max-height: 70vh;
	overflow: scroll;
}
</style>