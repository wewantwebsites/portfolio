import type { UUID } from 'crypto';

export type Author = {
	name: string;
	imgSrc: string;
	imgAlt: string;
};

export type Post = {
	id: UUID;
	title: string;
	description: string;
	date: string;
	categories: string[];
	keywords: string[];
	published: boolean;
	slug?: string;
	imgSrc?: string;
	imgAlt?: string;
};
