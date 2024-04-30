import type { UUID } from 'crypto';

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

export type Post = {
	id: UUID;
	title: string;
	description: string;
	date: string;
	categories: string[];
	keywords: string[];
	slug?: string;
	imgSrc?: string;
	imgAlt?: string;
};
