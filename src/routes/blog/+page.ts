import type { Post } from '$lib/types';

export const load = async ({ fetch }) => {
	const blogs = await fetch('/api/posts');
	const blogPosts = (await blogs.json()).toSorted(
		(a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
	return {
		blogPosts
	};
};

