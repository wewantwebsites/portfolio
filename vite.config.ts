import { sentrySvelteKit } from "@sentry/sveltekit";
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "we-want-web-llc",
            project: "portfolio"
        }
    }), sveltekit(), purgeCss({
        safelist: {
            // any selectors that begin with "hljs-" will not be purged
            greedy: [/^hljs-/]
        }
    })]
});