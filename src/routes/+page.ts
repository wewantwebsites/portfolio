const avatarURI =
	'https://vurjyxyenyiktfbofpzm.supabase.co/storage/v1/object/public/wewantwebsites_public/img/_73b5b146-8133-4d8f-9a2f-ae894da6619f.jpeg';
const blogPosts = [
	{
		heading: 'Skeleton is Awesome!',
		subheading: 'Announcements',
		backgroundURI: 'https://placehold.co/2100x900.png'
	},
	{
		heading: 'Skeleton is Awesome!',
		subheading: 'Announcements',
		backgroundURI: 'https://placehold.co/2100x900.png'
	},
	{
		heading: 'Skeleton is Awesome!',
		subheading: 'Announcements',
		backgroundURI: 'https://placehold.co/2100x900.png'
	}
];
const projectsFlag = false;
const blogFlag = false;
const tags = ['SvelteKit', 'Tailwind CSS', 'Skeleton UI'];
const featureFlags = {
	projectsFlag,
	blogFlag
};

export function load() {
	return {
		status: 200,
		blogPosts,
		featureFlags,
		tags,
		avatarURI
	};
}
