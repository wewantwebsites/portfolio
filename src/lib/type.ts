export type Author = {
	name: string;
	imgSrc: string;
	imgAlt: string;
};

export type BlogCardProps = {
	heading?: string;
	subheading?: string;
	description?: string;
	imgSrc?: string;
	imgAlt?: string;
	target?: string;
	publishDate?: string;
	author?: Author;
};