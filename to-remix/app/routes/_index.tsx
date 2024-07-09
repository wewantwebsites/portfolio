import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Button } from '~/components/ui/button';

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
	return json({ ok: true });
};
export default function Index() {
	const blogPosts: Array<BlogCardProps> = [];
	return (
		<div className="font-sans p-4">
			<h1 className="text-3xl">Welcome to Remix</h1>
			<Button>Click me</Button>

			{blogPosts.map((post) => (
				<BlogCard key={post.title} {...post} />
			))}
		</div>
	);
}

type BlogCardProps = {
	title: string;
	heroImageSrc: string;
	heroImageAlt: string;
	heroImageWidth: number;
	heroImageHeight: number;
	summary?: string;
};
function BlogCard(props: BlogCardProps) {
	return (
		<div className="rounded overflow-none shadow-sm p-[1px] relative bg-white transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:variant-gradient-primary-secondary hover:animate-gradient-rotate hover:cursor-pointer hover:scale-[101%] hover:shadow-lg">
			<div className="p-4 hidden md:block md:p-6 rounded bg-gradient-to-br from-surface-700 to-surface-900">
				<div className="grid gap-x-4 grid-cols-[2fr_1fr]">
					<div className="grid subgrid gap-2 text-white">
						<h3 className="text-xl font-bold">{props.title}</h3>
					</div>
					<img
						className="ml-auto"
						width={props.heroImageWidth}
						height={props.heroImageHeight}
						src={props.heroImageSrc}
						alt={props.heroImageAlt}
					/>
				</div>
			</div>

			<div
				className="block rounded md:hidden bg-cover bg-[center_top_65%] bg-no-repeat"
				style={{ backgroundImage: String(new URL(props.heroImageSrc)) }}
			>
				<div className="md:p-6 rounded p-4 w-full bg-surface-800 bg-opacity-80 hover:bg-opacity-65">
					<h3 className="h3 mb-3">{props.title}</h3>
					{props.summary && <p className="text-sm">{props.summary}</p>}
				</div>
			</div>
		</div>
	);
}
