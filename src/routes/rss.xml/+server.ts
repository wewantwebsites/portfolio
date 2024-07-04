import type { Post } from '$lib/type.js';
import BlogApi from '$lib/BlogApi';

const config = {
	title: 'CG4 Developer Profile and Blog',
	description:
		'As a working professional developer for the past 10+ years I thouight it would be a good idea to get a profile together and maybe start to share some of the knowledge I have obtained'
};

import { VITE_HYGRAPH_API_ENDPOINT, VITE_HYGRAPH_API_TOKEN } from '$env/static/private';
export async function GET({ fetch }) {
	const api = new BlogApi(VITE_HYGRAPH_API_TOKEN, VITE_HYGRAPH_API_ENDPOINT, fetch);
	const posts = await api.getPosts(Number.MAX_SAFE_INTEGER);
	const headers = { 'Content-Type': 'application/rss+xml' };
	const url = 'https://cg4.dev';
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
