<script>
	import '../app.postcss';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	import PageTransition from './transition.svelte';

	import { ModeWatcher } from 'mode-watcher';

	export let data;
</script>

<svelte:head>
	<title>{data.url}</title>
</svelte:head>

<ModeWatcher />
<body class="bg-background font-sans text-[1rem] text-foreground">
	<div class="min-h-[100svh] max-w-[100svw]">
		<Header />
		<main class="px-[1.5rem]">
			<PageTransition url={data.url}>
				<slot />
			</PageTransition>
		</main>
	</div>
	<Footer />
</body>
