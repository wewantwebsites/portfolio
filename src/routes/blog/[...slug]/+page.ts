import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		if (params?.slug) {
			const file = await import(`/src/posts/${params.slug}.md`);
			const res = await fetch('/api/posts?slug=' + params.slug);
			const data = await res.json();

			return {
				...data,
				content: file.default
			};
		}
	} catch {
		return error(404, 'Could not find post ' + params.slug);
	}
}
