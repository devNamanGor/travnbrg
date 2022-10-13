<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Nullable } from '$lib/models/CustomTypes';
	import '../app.postcss';
	import { App } from '$lib/firebase/app';

	import { onMount } from 'svelte';

	import type { User } from 'firebase/auth';
	import { onAuthStateChanged, getAuth } from 'firebase/auth';

	onMount(onInitialize);

	let login: boolean = false;

	function onInitialize() {
		console.log(`login: ${login}`);
		let auth = getAuth(App);
		onAuthStateChanged(auth, userAuthObserver, onErrorOccurred);
	}

	function userAuthObserver(user: Nullable<User>) {
		console.log(user);
		if (user) {
			login = true;
		} else {
			// login = false;
		}
		console.log(`login: ${login}`);
	}

	function onErrorOccurred(error: Error) {
		console.log(error);
	}
</script>

<Navbar {login} />

<slot />

<div class="toast toast-end" id="toasts" />

<Footer />
