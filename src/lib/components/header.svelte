<script>
	import { page } from '$app/stores';

	import Themeswitch from './header/themeswitcher.svelte';
</script>

<div
	class="bg-background_dark/25 sticky top-0 z-[9999] inline-flex h-[3rem] w-[100%] items-center justify-between p-[clamp(1.5rem,1.5rem+3vw,3rem)] px-[3rem] text-foreground saturate-150 backdrop-blur-[10px]"
>
	<a href="/" class="group inline-flex items-center gap-3">
		<div
			class="h-10 w-10 {$page.url.pathname === '/'
				? 'bg-foreground/[.85]'
				: 'bg-foreground/70'} rounded-[10rem] transition-[background] duration-[0.25s] ease-in-out motion-safe:group-hover:bg-foreground"
		/>
		<b
			class="text-[clamp(0.7rem,_1vw+0.7rem,_1.5rem)] tracking-widest transition-[color] duration-[0.25s] ease-in-out motion-safe:group-hover:text-foreground {$page
				.url.pathname === '/'
				? 'text-foreground/[.85]'
				: 'text-foreground/70'}">/ async</b
		></a
	>
	<!-- <Links {links} /> -->

	<section class="z-[10000] inline-flex items-center gap-2">
		<Themeswitch />
	</section>
</div>
