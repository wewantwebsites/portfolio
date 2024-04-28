import type { Post } from '$lib/type.js';
import { error } from '@sveltejs/kit';

type Params = Post & { content: string };

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
			// Load the post content from the file system
			const path = `/src/posts/${params.slug}.md`;
			const file = (await postGlob[path]()) as { default: string };
			const res = await fetch('/api/posts?slug=' + params.slug);
			const data: Post = await res.json();

			fetchMap[params.slug] = {
				...data,
				content: file.default
			};

			return {
				...data,
				content: file.default
			};
		}
	} catch {
		console.error('Could not find post ' + params.slug);
		return error(404, 'Could not find post ' + params.slug);
	}
}
