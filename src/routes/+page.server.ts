import BlogApi from '$lib/BlogApi.js';

const tags = ['SvelteKit', 'Tailwind CSS', 'Skeleton UI', 'Vercel'] as const;
const avatarURI = '/img/story-telling.jpg';

const { VITE_HYGRAPH_API_TOKEN: TOKEN, VITE_HYGRAPH_API_ENDPOINT: ENDPOINT } = import.meta.env;
export async function load({ fetch }) {
	const api = new BlogApi(TOKEN, ENDPOINT, fetch);
	const posts = await api.getPosts(3);

	return {
		status: 200,
		tags,
		avatarURI,
		posts
	};
}
