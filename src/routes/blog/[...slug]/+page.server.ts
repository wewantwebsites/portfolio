import BlogApi from '$lib/BlogApi.js';
import type { Post } from '$lib/type.js';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';

type Params = Post & { content: ConstructorOfATypedSvelteComponent };

const { VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT } = import.meta.env;
const fetchMap: Record<string, Params> = {};
export async function load({ params: { slug }, fetch }) {
	try {
		if (slug) {
			const cached = fetchMap[slug];
			if (cached) {
				return {
					status: 304,
					...cached
				};
			}

			const api = new BlogApi(VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT, fetch);
			const post = await api.getPost(slug);
			const compiled = await compile(post.content);
			if (!compiled) {
				return error(500, 'Could not compile post ' + slug);
			}
			fetchMap[slug] = {
				...post,
				keywords: post.tags.join(', '),
				content: compiled.code
			};

			return fetchMap[slug];
		}
	} catch {
		console.error('Could not find post ' + slug);
		return error(404, 'Could not find post ' + slug);
	}
}
