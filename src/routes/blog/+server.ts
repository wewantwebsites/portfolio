import { redirect } from '@sveltejs/kit';

export const GET = async () => {
	redirect(302, '/blog/launching-a-portfolio');
};
