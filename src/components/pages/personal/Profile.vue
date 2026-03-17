<script setup lang="js">
import { ref, toRaw } from "vue";
import monthsJson from "/months.json?url";

const props = defineProps({
	loggedIn: Boolean,
	user: String,
	userId: Number
}), 
base = `/${import.meta.env.VITE_BASE_ROUTE}/`,
apiUrl = import.meta.env.VITE_API_URL,

profile = ref([]),
countries = ref([]),
monthsNames = ref([]),
responseNum = ref(0),
doneFetching = ref(false)

if (!props.loggedIn) console.info("You are not logged in!");

async function fetchFromApi(target, output) {
	try {
		const response = await fetch(target, {
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
		}).then((r) => {
			responseNum.value = r.status;
			return r.json();
		});
		if (responseNum.value === 200) {
			console.debug("Fetched",target);
			output.push(response);
			output = toRaw(output).flat()
			console.debug(output);
		}
	} catch (e) {
		console.error(`An error has occured trying to fetch "${target}":\n`,e);
	}
}

function ordinalSuffix(i) {
	let j = i % 10, k = i % 100;
	if (j === 1 && k !== 11) {
		return `${i}st`;
	}
	if (j === 2 && k !== 12) {
		return `${i}nd`;
	}
	if (j === 3 && k !== 13) {
		return `${i}rd`;
	}
	return `${i}th`;
}

function newDate(d) { return new Date(d) }

try {
	fetchFromApi(monthsJson, monthsNames.value);
	fetchFromApi(`${apiUrl}dummy/countries`, countries.value);
	fetchFromApi(`${apiUrl}accMgmt/view/${props.userId}`, profile.value);
} catch (e) {
	console.error(e);
} finally {
	doneFetching.value = true;
}
</script>

<template>
	<div class="container-xxl" v-if="props.loggedIn">
		<h1>
			<i class="bi bi-person-circle" />
			<span>{{ props.user }}</span>
			<span v-if="doneFetching" class="text-secondary my-auto align-items-center ms-2" style="cursor:default;"
				:title="countries.flat().find(c => c.id == profile[0].countryID).name">
					{{ countries.flat().find(c => c.id == profile[0].countryID).flag }}
			</span>
			<span v-else class="my-auto align-items-center placeholder-glow placeholder placeholder-lg rounded" style="width:48px;" />
			<span v-if="doneFetching">
				<span v-if="profile[0].role === 'Admin'" class="badge rounded-pill text-bg-danger">Admin</span>
				<span v-else-if="profile[0].role === 'Moderator'" class="badge rounded-pill text-bg-primary">Moderator</span>
				<span v-else-if="profile[0].role === 'Banned'" class="badge rounded-pill text-danger border border-danger">Banned</span>
			</span>
		</h1>
		<ul>
			<li>
				<span style="cursor:default;">ID: </span>
				<span>{{ props.userId }}</span></li>
			<li>
				<span>Member since: </span>
				<span v-if="!doneFetching" class="placeholder-wave placeholder placeholder-lg rounded" style="width:300px;" />
				<span v-else>
					{{ monthsNames.flat()[newDate(profile[0].createdAt).getMonth()].name }}
					{{ ordinalSuffix(newDate(profile[0].createdAt).getDay()) }},
					{{ newDate(profile[0].createdAt).getFullYear() }}
				</span>
			</li>
		</ul>
		<hr />
		<p>Nothing to see here though...</p>
	</div>
	<div class="container-xxl text-center" v-else>
		<h1 class="d-block">You are not logged in!</h1>
		<p class="text-center">Please log in or register first to view this page!</p>
		<div class="mb-4">
			<router-link class="btn btn-lg btn-outline-secondary" role="button"
				:href="base + 'login'">Login</router-link>
			<router-link class="btn btn-lg btn-outline-success ms-2" role="button"
				:href="base + 'register'">Register</router-link>
		</div>
		<a href="javascript:history.back()" class="text-secondary fst-italic" role="button">...or just go back</a>
	</div>
</template>