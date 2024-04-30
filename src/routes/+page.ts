import type { Post } from '$lib/type.js';

// const blogPostsMock = [
// 	{
// 		heading: 'Skeleton is Awesome!',
// 		subheading: 'Announcements',
// 		backgroundURI: 'https://placehold.co/2100x900.png'
// 	},
// 	{
// 		heading: 'Skeleton is Awesome!',
// 		subheading: 'Announcements',
// 		backgroundURI: 'https://placehold.co/2100x900.png'
// 	},
// 	{
// 		heading: 'Skeleton is Awesome!',
// 		subheading: 'Announcements',
// 		backgroundURI: 'https://placehold.co/2100x900.png'
// 	}
// ];
const tags = ['SvelteKit', 'Tailwind CSS', 'Skeleton UI', 'Vercel', 'GSAP'] as const;
const avatarURI = '/img/story-telling.jpg' as const;
export async function load({ fetch }) {
	const res = await fetch('/api/posts');
	const blogPosts = (await res.json()).toSorted(
		(a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	const featureFlags = {
		projectsFlag: blogPosts.length > 0,
		blogFlag: false
	};

	return {
		status: 200,
		blogPosts,
		featureFlags,
		tags,
		avatarURI
	};
}
