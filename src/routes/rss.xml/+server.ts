import { dev } from '$app/environment';
import type { Post } from '$lib/type.js';
const config = {
	title: 'SvelteKit Blog',
	description: 'A blog built with SvelteKit'
};

export async function GET({ fetch }) {
	const res = await fetch('api/posts');
	const posts = (await res.json()) as Post[];

	const headers = { 'Content-Type': 'application/rss+xml' };
	const url = 'https://cg4-dev.vercel.app';
	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${url}</link>
				<atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${url}/${post.slug}</link>
							<guid isPermaLink="true">${url}/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
