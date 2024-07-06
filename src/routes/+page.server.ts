import BlogApi from '$lib/BlogApi.js';

const tags = ['SvelteKit', 'Tailwind CSS', 'Skeleton UI', 'Vercel'] as const;
const avatarURI = '/img/story-telling.jpg';

const { VITE_HYGRAPH_API_TOKEN: TOKEN, VITE_HYGRAPH_API_ENDPOINT: ENDPOINT } = import.meta.env;
export async function load({ fetch }) {
	const api = new BlogApi(TOKEN, ENDPOINT, fetch);
	try {
		const posts = await api.getPosts(3);

		return {
			status: 200,
			tags,
			avatarURI,
			posts
		};
	} catch (err) {
		return {
			status: 500,
			error: 'There was an error retrieving the posts',
			tags,
			avatarURI,
			posts: []
		};
	}
}
