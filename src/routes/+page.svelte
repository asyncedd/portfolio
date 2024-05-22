<script lang="ts">
	import GridAndDotBackgrounds from '$lib/components/ui/GridAndDotBackground/GridAndDotBackgrounds.svelte';
</script>

<article
	class="m-auto flex flex-col items-center justify-center text-left"
	style="min-height: calc(100svh - clamp(3rem,3rem + 3vw, 5.5rem) * 2);"
>
	<GridAndDotBackgrounds>
		<div class="relative">
			<h2
				class="text-foreground_dark/85 font-['Josefin Sans Variable'] break-words text-[clamp(1.8rem,1.8rem+1vw,3.3rem)] uppercase"
			>
				<b
					>hi, i'm <span
						class="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-teal-400 dark:via-blue-400 dark:to-purple-400"
						>asyncedd.</span
					></b
				>
			</h2>
			<p class="text-foreground_dark/80 text-[clamp(1.3rem,1.3rem+1vw,1.6rem)] tracking-wider">
				Minimalism, simplicity & elegance
			</p>
			<div class="flex w-full">
				<a
					href="https://github.com/asyncedd"
					aria-label="My GitHub profile"
					target="_blank"
					class="fill-foreground_dark opacity-[0.7] transition-[opacity] duration-[0.3s] ease-in-out hover:opacity-[1]"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-github"
						><path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
					>
				</a>
			</div>
		</div>
	</GridAndDotBackgrounds>
</article>
