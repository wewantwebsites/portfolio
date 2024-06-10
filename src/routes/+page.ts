import type { Post } from '$lib/type.js';
const tags = ['SvelteKit', 'Tailwind CSS', 'Skeleton UI', 'Vercel'] as const;
const avatarURI = '/img/story-telling.jpg' as const;
import BlogApi from '$lib/BlogApi.js';

const TOKEN =
	'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTczNTc2NzAsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsdWQxejF1bTAwMDAwOGlmNnBtOTd2NmkvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtdXMtZWFzdC0xLXNoYXJlZC11c2VhMS0wMi5oeWdyYXBoLmNvbS8iLCJzdWIiOiIyZTM0ODQ1MC0zYTg5LTRmNGMtOGU3OS1kYzViNWU2OWRhMmIiLCJqdGkiOiJjbHd4eWV6MzgxeHBqMDdqdzBxOWkzajRxIn0.GF8Ih32JwUSo_jsRWlkGHX1OC7f4RGarT4YUw-kQJKms5H2bJx3of20WHFaE32FllB6rWgcrYHmQ71QYIRnio4391p0qtHzq1QxVTT8SOtkJIzGnTFpnIVXyRy26MrC22b5AtcKkIopO_wMzYgOl3pz87yqR33WDt5JK_GQWzQCX8HKoEtMkwY_9SZVX5kIwDJXvJap3O3wBG8AB6Elbo5SxJo-3lWXQ6JCnkmUqVdxlCMr_J9BlgqAM5ITyPtSP3ZiWPCgM_2IA8n-8C1YUiXSjBdr0DoTQ389C1oivUQaqG8xoRENlUdZJdiqkYCVfps0tgl234fu7IHbZTvTaieIE4Z_IdKj63p3CdZtcZM8pJzctGOkYWE4VlPjqf4HlMIo08sp61bssf-M0sYkPzKYfo08MeebCAK68P9hgyMrDzoTih9rV9mdwfh-DJPMzoEEZft4c0OMpDCdAw858rjTyQ_Clyw0vnuQSjrWzjAeR6-1DqNicoyNXUsdPOxBrQRw4haSvmfNbOWRLH-1dTil4MkBOzNeCADrOY6Wh25OgLo9NCDVGlfktdf7kc1FVMDEVcNG2iyIqBkLFAlpttG3zVYDcknCZdRYcHlfOUqz794vWYMlK71AzUp12_tHgYTe_A8cQNd35_ogJtFkRlcYhuIEoORJTQvCrI6WAkBA';
const ENDPOINT =
	'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clud1z1um000008if6pm97v6i/master';

export async function load({ fetch }) {
	const api = new BlogApi(TOKEN, ENDPOINT, fetch);
	const posts = await api.getPosts(3);
	console.log('posts: ', posts);
	// TODO: remove lines 17-20 and adjust return
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
		avatarURI,
		posts
	};
}
