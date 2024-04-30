export const prerender = true;

import { redirect } from '@sveltejs/kit';

export const load = async () => {
	redirect(302, '/blog/launching-a-portfolio');
};
