import BlogApi from '$lib/BlogApi.js';
import type { Post } from '$lib/type.js';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';

type Params = Post & { content: ConstructorOfATypedSvelteComponent };

const { VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT } = import.meta.env;
export async function load({ params: { slug }, fetch }) {
	if (slug === 'undefined') {
		return error(500, 'Bad Request');
	}
	try {
		if (slug) {
			const api = new BlogApi(VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT, fetch);
			const post: Post = await api.getPost(slug);
			let compiled;
			if (post.content) {
				compiled = await compile(post.content);
			}
			if (!compiled.code) {
				return error(500, 'Could not compile post ' + slug);
			}

			return {
				...post,
				keywords: post?.tags.join(', '),
				content: compiled.code
			} satisfies Params;
		}
	} catch (err) {
		console.error('There was an error\n:', err);
		console.error('Could not find post ' + slug);
		return error(404, 'Could not find post ' + slug);
	}
}
