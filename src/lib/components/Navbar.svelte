<script lang="ts">
	import type { Page } from '@sveltejs/kit';
	import type { Unsubscriber } from 'svelte/store';
	import { drawerItems } from '../models/DrawerItem';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import { PathComponent } from '../models/PathComponent';
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(configurePathOnMount);

	export let login: boolean;

	let unsubscriber: Unsubscriber;

	let path: Array<PathComponent> = [];

	function configurePathOnMount() {
		var pathname = $page.url.pathname;
		let pathComponent = PathComponent.fromRoute(pathname);
		path.push(pathComponent);
		path = path;
		unsubscriber = page.subscribe((val) => refreshPath(val));
	}

	function refreshPath(pageData: Page<Record<string, string>>) {
		var pathname = pageData.url.pathname;
		if (pathname === '/') {
			path = [PathComponent.fromRoute('')];
			return;
		}
		if (pathname === '/login') {
			path = [PathComponent.fromRoute('login')];
			return;
		}
		var alterPaths: Array<string> = [];
		pathname.split('/').forEach((val: string) => {
			console.log(val);
			alterPaths.push(val);
		});
		path.length = 0;
		alterPaths.forEach((val: string) => path.push(PathComponent.fromRoute(val)));
		path = path;
	}

	onDestroy(() => (unsubscriber != undefined ? unsubscriber() : null));
</script>

<!-- bg-primary text-bg-primary -->
<div class="navbar">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label for="div-dropdown" tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each drawerItems as item}
					{#if item.route === 'DropDown' && item.subItems != null}
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<li tabindex={item.id}>
							<a href="/" class="justify-between">
								{item.title}
								<svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
								>
							</a>
							<ul class="rounded-box bg-blue-300 text-black">
								{#each item.subItems as subItem}
									<li>
										<a href={subItem.route}>{subItem.title}</a>
									</li>
								{/each}
							</ul>
						</li>
					{:else}
						<li>
							<a href={item.route} class="p-2">{item.title}</a>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
		<div class="img">
			<img src="/logos/logo.png" alt="TravNbrg's Logo" width="24" height="24" />
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl">TravNbrg</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<div class="flex-none hidden lg:flex gap-1">
			{#each drawerItems as item}
				{#if item.route === 'DropDown' && item.subItems != null}
					<div class="dropdown dropdown-end dropdown-hover">
						<button class="btn rounded-btn btn-ghost">{item.title}</button>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex={item.id}
							class="p-2 shadow menu dropdown-content bg-neutral text-neutral-content rounded-box w-52"
						>
							{#each item.subItems as subItem}
								<li>
									<a href={subItem.route} class="hover:bg-primary">{subItem.title}</a>
								</li>
							{/each}
						</ul>
					</div>
				{:else}
					<a href={item.route} class="btn btn-ghost">{item.title}</a>
				{/if}
			{/each}
		</div>
	</div>
	<div class="navbar-end">
		<ThemeSwitch />
		{#if login}
			<button class="btn-primary p-2 rounded-btn lg:animate-bounce"
				><a href="/settings" class="text-primary-content">Settings</a></button
			>
		{:else}
			<button class="btn-primary p-2 rounded-btn lg:animate-bounce"
				><a href="/login" class="text-primary-content">Login/Signup</a></button
			>
		{/if}
	</div>
</div>

<div class="text-sm breadcrumbs pl-6">
	<ul>
		{#each path as pathComponent, i}
			{#if path.length == i}
				<li>{pathComponent.title}</li>
			{:else}
				<li><a href={pathComponent.route}>{pathComponent.title}</a></li>
			{/if}
		{/each}
	</ul>
</div>
