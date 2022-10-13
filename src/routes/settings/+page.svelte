<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Nullable } from '$lib/models/CustomTypes';
	import { Toast } from '$lib/models/Toast';
	import {
		getAuth,
		linkWithPhoneNumber,
		PhoneAuthCredential,
		updatePhoneNumber,
		type User,
		RecaptchaVerifier,
		signOut
	} from 'firebase/auth';
	import { onMount } from 'svelte';

	var auth = getAuth();

	let user: User;

	let phoneNumber: Nullable<string>;

	onMount(() => {
		if (!auth.currentUser) {
			goto('/login');
			return;
		}
		user = auth.currentUser;
		phoneNumber = localStorage.getItem('phoneNo');
		var a = localStorage.getItem('age');
		age = a == null ? null : Number.parseInt(a);
	});

	// Regular expression to check if string is an Indian mobile number
	const regexExp: RegExp = /^[6-9]\d{9}$/gi;

	let age: Nullable<number>;

	function updatePhoneNum() {
		let phoneNum = (document.getElementById('phoneFF') as HTMLInputElement).value;

		if (!regexExp.test(phoneNum)) {
			Toast.addToast(new Toast('error', 'Invalid Indian Phone Number'), 7000);
			return;
		}

		localStorage.setItem('phoneNo', phoneNum);

		phoneNumber = phoneNum;

		Toast.addToast(new Toast('success', 'Phone Number updated.'), 5000);
	}

	function updateAge() {
		let a = (document.getElementById('ageFF') as HTMLInputElement).value;

		localStorage.setItem('age', a);

		age = Number.parseInt(a);

		Toast.addToast(new Toast('success', 'Age updated.'), 5000);
	}
</script>

<div class="flow-root">
	<div class="card w-2/5 bg-base-100 shadow-xl float-left glass">
		<figure class="px-10 pt-10">
			<img src={user?.photoURL ?? '/images/blank-profile-pic.png'} alt="Shoes" class="rounded-xl" />
		</figure>
		<div class="card-body items-center text-center">
			<h2 class="card-title">{user?.displayName ?? 'Loading...'}</h2>
			<p>{user?.email ?? 'Loading...'}</p>

			<!-- Phone Number -->
			<div class="form-control">
				<label class="label" for="phoneNoFormElement">
					<span class="label-text"
						>{#if user?.phoneNumber || phoneNumber}
							Your phone number:
						{:else}
							Add your phoneNumber
						{/if}</span
					>
				</label>
				{#if user?.phoneNumber || phoneNumber}
					<input
						type="text"
						placeholder="example +919552254685"
						autocomplete="tel"
						readonly={true}
						value={user?.phoneNumber ?? phoneNumber}
						id="phoneFF"
						class="input input-bordered"
					/>
				{:else}
					<input
						type="text"
						placeholder="example +919552254685"
						autocomplete="tel"
						id="phoneFF"
						class="input input-bordered"
					/>
				{/if}
				<label class="label">
					<button class="btn btn-primary" on:click={() => updatePhoneNum()}>
						Update Phone Number
					</button>
				</label>
			</div>

			<!-- Traveller Details -->
			<div class="form-control">
				<label class="label" for="ageFF">
					<span class="label-text"
						>{#if age}
							Your age:
						{:else}
							Add your Age
						{/if}</span
					>
				</label>
				<input
					type="text"
					placeholder="example +919552254685"
					autocomplete="age"
					id="ageFF"
					class="input input-bordered"
				/>
				<label class="label">
					<button class="btn btn-primary" on:click={() => updateAge()}> Update Age </button>
				</label>
			</div>

			<div class="form-control mt-6">
				<button
					class="btn btn-primary"
					on:click={() =>
						signOut(auth)
							.then(() => goto('/'))
							.catch((error) => Toast.addToast(new Toast('error', `Error: ${error}`), 7000))}
				>
					Sign out</button
				>
			</div>
		</div>
	</div>

	<div class="card w-3/5 bg-base-100 shadow-xl float-right">
		<h1 class="text-xl p-4">Your Trips</h1>
	</div>
</div>
