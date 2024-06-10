import BlogApi from '$lib/BlogApi.js';
import type { Post } from '$lib/type.js';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';

type Params = Post & { content: ConstructorOfATypedSvelteComponent };

const postGlob = import.meta.glob('/src/posts/*.md');
const fetchMap: Record<string, Params> = {};
export async function load({ params, fetch }) {
	try {
		if (params?.slug) {
			const cached = fetchMap[params.slug];
			if (cached) {
				return {
					status: 304,
					...cached
				};
			}

			const { slug } = params;
			const { VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT } = import.meta.env;
			const api = new BlogApi(VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT, fetch);
			const post = await api.getPost(slug);
			console.log('post: ', post);
			const compiled = await compile(post.content);
			if (compiled) {
				fetchMap[params.slug] = {
					...post,
					content: compiled.code
				};
				return {
					...post,
					content: compiled.code
				};
			}

			// // Load the post content from the file system
			// const path = `/src/posts/${params.slug}.md`;
			// const file = (await postGlob[path]()) as { default: ConstructorOfATypedSvelteComponent };
			// const res = await fetch('/api/posts?slug=' + params.slug);
			// const data: Post = await res.json();

			// fetchMap[params.slug] = {
			// 	...data,
			// 	content: file.default
			// };

			// return {
			// 	...data,
			// 	content: fetchMap[params.slug].content
			// };
		}
	} catch {
		console.error('Could not find post ' + params.slug);
		return error(404, 'Could not find post ' + params.slug);
	}
}
