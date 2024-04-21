import type { Post } from '$lib/type';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const hasSearchParams = [...url.searchParams.keys()].length > 0;

	if (!hasSearchParams) {
		const blogs = await getAllPosts();
		return json(blogs);
	}

	const slug = url.searchParams.get('slug');
	if (!slug) {
		return error(400, 'Bad request');
	}

	const blog = await getBlogPost(slug);
	return json(blog);
};

async function getBlogPost(slug: string): Promise<Post> {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	const file = paths[`/src/posts/${slug}.md`];
	if (!file) {
		return error(404, 'Not found');
	}
	const { metadata } = file as { metadata: Post };

	return metadata;
}

async function getAllPosts(): Promise<Post[]> {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	const posts = Object.entries(paths).map(([path, file]) => {
		const { metadata } = file as { metadata: Post };
		const slug = path.split('/').pop()!.replace('.md', '');

		return { ...metadata, slug };
	});

	return posts;
}
