import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import sectionize from 'remark-sectionize';

import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [[remarkToc, { tight: true }], sectionize],
	rehypePlugins: [rehypeSlug]
};

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			strict: false,
			precompress: true,
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		}
	},
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;
