import BlogApi from '$lib/BlogApi';

const { VITE_HYGRAPH_API_TOKEN: TOKEN, VITE_HYGRAPH_API_ENDPOINT: ENDPOINT } = import.meta.env;
export const load = async ({ fetch }) => {
	const api = new BlogApi(TOKEN, ENDPOINT, fetch);
	const posts = await api.getPosts(3);

	return {
		blogPosts: posts
	};
};
