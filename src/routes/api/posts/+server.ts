import type { Post } from '$lib/type';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

type Paths = Record<string, { metadata: Post }>;

export const GET: RequestHandler = async ({ url }) => {
	console.group('GET /api/posts');
	let paths: Paths;
	try {
		paths = import.meta.glob('/src/posts/*.md', { eager: true });
		if (!paths) {
			throw new Error('No posts found');
		}
	} catch (err) {
		console.error(err);
		return error(500, String(err));
	}
	const hasSearchParams = [...url.searchParams.keys()].length > 0;
	const slug = url.searchParams.get('slug');

	if (!hasSearchParams) {
		console.log('No search params provided');
		console.log('Fetching all posts');
		const blogs = await getAllPosts(paths);
		console.log('All posts fetched', blogs);
		console.groupEnd();
		return json(blogs);
	}

	if (!slug) {
		console.error('No slug provided');
		console.groupEnd();
		return error(400, 'Bad request');
	}
	console.log(`Fetching post with slug: ${slug}`);
	const blog = await getBlogPost(paths, slug);
	console.log('Post fetched', blog);
	console.groupEnd();
	return json(blog);
};

async function getBlogPost(paths: Paths, slug: string): Promise<Post> {
	const file = paths[`/src/posts/${slug}.md`];
	if (!file) {
		return error(404, 'Not found');
	}
	const { metadata } = file as { metadata: Post };

	return metadata;
}

async function getAllPosts(paths: Paths): Promise<Post[]> {
	const posts = Object.entries(paths).map(([path, file]) => {
		const { metadata } = file as { metadata: Post };
		const slug = path.split('/').pop()!.replace('.md', '');

		return { ...metadata, slug };
	});

	return posts;
}
