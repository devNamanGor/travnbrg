<script lang="ts">
	type Title = 'Login' | 'Sign Up';
	import { goto } from '$app/navigation';
	import type { Nullable } from '$lib/models/CustomTypes';

	import {
		getAuth,
		// signInWithEmailAndPassword,
		// createUserWithEmailAndPassword,
		// sendEmailVerification,
		onAuthStateChanged,
		signInWithPopup,
		GoogleAuthProvider
	} from 'firebase/auth';
	import type { UserCredential } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { Toast } from '$lib/models/Toast';

	import ImageSection from './ImageSection.svelte';

	let title: Title = 'Login';

	let options = ['Login', 'Sign Up'];

	let activeIndex = 0;

	const auth = getAuth();

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (auth.currentUser) {
				// goto('/');
			} else {
				console.log('====================================');
				console.log('User not logged in.');
				console.log('====================================');
			}
		});
		if (auth.currentUser) {
			goto('/');
		} else {
			console.log('====================================');
			console.log('User not logged in.');
			console.log('====================================');
		}
	});

	async function googleSignIn() {
		try {
			const provider = new GoogleAuthProvider();

			var result = await signInWithPopup(auth, provider);
			var user = result.user;
			localStorage.setItem('uid', user.uid);
			Toast.addToast(new Toast('success', 'Logged In Successfully'), 5000);
			goto('/');
		} catch (error: any) {
			Toast.addToast(new Toast('error', error.toString()), 15000);
			console.error(`Login error due to: ${error}`);
		}
	}

	/* function signUp() {
		let email = (document.getElementById('emailFF')! as Nullable<HTMLInputElement>)!.value;
		let pass = (document.getElementById('passFF') as Nullable<HTMLInputElement>)!.value;

		createUserWithEmailAndPassword(auth, email, pass)
			.then(onSignup)
			.catch(onLoginError)
			.finally(onLoginFlowComplete);
	}

	function onSignup(cred: UserCredential) {
		sendEmailVerification(cred.user).then(() => console.log('promise resolved.'));
		// Call on login internally
		onLogin(cred);
	}

	function login() {
		let email = (document.getElementById('emailFF')! as Nullable<HTMLInputElement>)!.value;
		let pass = (document.getElementById('passFF') as Nullable<HTMLInputElement>)!.value;

		signInWithEmailAndPassword(auth, email, pass)
			.then(onLogin)
			.catch(onLoginError)
			.finally(onLoginFlowComplete);
	}

	function onLogin(cred: UserCredential) {
		// Executes upon login
		const user = cred.user;
		localStorage.setItem('uid', user.uid);
		Toast.addToast(new Toast('success', 'Logged In Successfully'), 5000);
		title == 'Login' ? goto('/') : goto('/setupProfile');
	}

	function onLoginError(reason: any) {
		// Executes when there is an error in logging in.
		Toast.addToast(new Toast('error', reason), 15000);
		console.error(`Login error due to: ${reason}`);
	}

	function onLoginFlowComplete() {
		// Executes when login flow has been completed.
		console.log('Login Flow Completed');
	} */
</script>

<svelte:head>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
</svelte:head>

<div class="hero min-h-screen" style="background-image: url(images/login-page-img.jpg);">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content flex-col lg:flex-row-reverse text-neutral-content">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">{title} now!</h1>
			<p class="py-6">
				We are TravNbrg (Prounounce: Trav-nburg), a complete one-stop tourism solution. {title} to book
				trips, tickets, stays...
			</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="form-control">
					<label class="label" for="email form">
						<span class="label-text">Enter your Email</span>
					</label>
					<input
						type="text"
						placeholder="Email-password auth has been disabled for now."
						autocomplete="email"
						id="emailFF"
						class="input input-bordered"
						disabled
					/>
				</div>
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text"
							>{#if title === 'Login'} Enter your {:else} Create a Strong {/if} Password</span
						>
					</label>
					<input
						type="password"
						placeholder="Email-password auth has been disabled for now."
						id="passFF"
						class="input input-bordered"
						disabled
					/>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<button class="label-text-alt link link-hover" disabled={true} aria-disabled="true">
							<!-- on:click={() => (title == 'Login' ? (title = 'Sign Up') : (title = 'Login'))} -->
							{title == 'Login' ? 'New user? Create Account.' : 'Already a user? Login.'}
						</button>
					</label>
				</div>
				<div class="form-control mt-6">
					<button
						class="btn btn-primary btn-disabled"
						on:click={(/* ? login() : signUp() */) => title == 'Login'}
						disabled
						aria-disabled
					>
						Use Google Sign in<!-- {title} --></button
					>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" on:click={() => googleSignIn()} aria-disabled
						>Sign in With Google</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
