import BlogApi from '$lib/BlogApi.js';
import type { Post } from '$lib/type.js';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';

type Params = Post & { content: ConstructorOfATypedSvelteComponent };

const { VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT } = import.meta.env;
export async function load({ params: { slug }, fetch }) {
	if (slug === 'undefined' || !slug) {
		return error(404, 'Not Found');
	}
	try {
		if (slug) {
			const api = new BlogApi(VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT, fetch);
			const post: Post = await api.getPost(slug);
			if (!post?.content) {
				return error(500, 'The retrieved post was empty');
			}

			const compiled = await compile(post.content);
			if (!compiled?.code) {
				return error(500, 'Could not compile post');
			}

			return {
				...post,
				keywords: post?.tags.join(', '),
				content: compiled.code
			} satisfies Params;
		}
	} catch (err) {
		console.error('There was an error\n:', err);
		return error(500, 'There was an internal error. It was probably something <em>you</em> did.');
	}
}
