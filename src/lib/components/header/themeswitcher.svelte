<script lang="ts">
	import { browser } from '$app/environment';

	import { Switch } from '$lib/components/ui/switch';

	let currentTheme: boolean | undefined = undefined;
	export const button_name: string = '';

	browser &&
		(() => {
			currentTheme = localStorage.theme == 'dark' ? false : true;
			// const setTheme = (newTheme: string) => {
			// 	document.documentElement.className = currentTheme  = newTheme;
			// };

			window
				.matchMedia('(prefers-color-scheme: dark)')
				// .addEventListener('change', (e) => setTheme(e.matches ? 'dark' : 'light'));
				.addEventListener(
					'change',
					() => (document.documentElement.className = currentTheme ? 'dark' : 'light')
				);
			// window.addEventListener('storage', (e) => e.key === 'theme' && setTheme(e.newValue || ''));
			window.addEventListener(
				'storage',
				(e) =>
					e.key === 'theme' &&
					(document.documentElement.className = currentTheme ? 'dark' : 'light')
			);

			// const handleGlobalClick = (event: MouseEvent) =>
			// 	(dropdownOpened =
			// 		dropdownOpened && !!(event.target as HTMLElement).closest('.dropdown-button-menu-theme'));
			//
			// document.addEventListener('click', handleGlobalClick);
			//
			// return () => {
			// 	document.removeEventListener('click', handleGlobalClick);
			// };
		})();
</script>

<Switch
	bind:checked={currentTheme}
	on:click={() => {
		localStorage.theme = document.documentElement.className = currentTheme ? 'dark' : 'light';
		console.log(currentTheme);
	}}
/>

<!-- <button -->
<!-- 	class="group inline-flex rounded-full border-[3px] border-zinc-300 p-[0.3rem] dark:border-zinc-700" -->
<!-- 	on:click={() => { -->
<!-- 		localStorage.theme = -->
<!-- 			currentTheme = -->
<!-- 			document.documentElement.className = -->
<!-- 				currentTheme == 'dark' ? 'light' : 'dark'; -->
<!-- 	}} -->
<!-- > -->
<!-- 	<div -->
<!-- 		aria-label="set theme to light" -->
<!-- 		class="inline-flex w-[100%] items-center justify-between rounded-full bg-zinc-300 p-3 text-left text-[1.1rem] capitalize tracking-wide dark:bg-background/30" -->
<!-- 	> -->
<!-- 		<svg -->
<!-- 			xmlns="http://www.w3.org/2000/svg" -->
<!-- 			width="1em" -->
<!-- 			height="1em" -->
<!-- 			viewBox="0 0 32 32" -->
<!-- 			class="flex items-center justify-center stroke-foreground" -->
<!-- 			><path -->
<!-- 				fill="none" -->
<!-- 				stroke-linecap="round" -->
<!-- 				stroke-linejoin="round" -->
<!-- 				stroke-width="2" -->
<!-- 				d="M16 6V3M8.929 8.929L6.808 6.808M6 16H3m13 13v-3m9.192-.808l-2.121-2.12M29 16h-3M8.929 23.071l-2.121 2.121M25.192 6.808l-2.12 2.121M22 16a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z" -->
<!-- 			/></svg -->
<!-- 		> -->
<!-- 	</div> -->
<!-- 	<div -->
<!-- 		aria-label="set theme to dark" -->
<!-- 		class="bg-background_dark/50 bg-background_light inline-flex w-[100%] items-center justify-between rounded-full p-3 text-left text-[1.1rem] capitalize tracking-wide dark:bg-zinc-700" -->
<!-- 	> -->
<!-- 		<svg -->
<!-- 			xmlns="http://www.w3.org/2000/svg" -->
<!-- 			width="1em" -->
<!-- 			height="1em" -->
<!-- 			viewBox="0 0 24 24" -->
<!-- 			class="flex items-center justify-center fill-foreground" -->
<!-- 			><path -->
<!-- 				fill-rule="evenodd" -->
<!-- 				fill="currentTheme" -->
<!-- 				d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z" -->
<!-- 				clip-rule="evenodd" -->
<!-- 			/></svg -->
<!-- 		> -->
<!-- 	</div> -->
<!-- </button> -->
