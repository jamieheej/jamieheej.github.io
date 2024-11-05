import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Set fallback to index.html to handle client-side routing
			fallback: 'index.html',
			// Set strict mode to false to ignore prerendering warnings
			strict: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/jamieheej.github.io' : ''
		}
	}
};

export default config;
