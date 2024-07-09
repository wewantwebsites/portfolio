import {
	NavLink,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
	isRouteErrorResponse
} from '@remix-run/react';
import './tailwind.css';

export default function App() {
	return <Outlet />;
}

const routes = [
	{ path: '/', name: 'Home' },
	{ path: '/about', name: 'About' },
	{ path: '/blog', name: 'Blog' }
];
export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

function Header() {
	return (
		<header className="bg-primary text-white">
			<nav className="p-2 lg:p-4">
				<ul className="mx-auto w-[min-content] flex align-center gap-4">
					{routes.map(({ path, name }) => (
						<NavLink
							key={path}
							to={path}
							className={({ isActive }) => (isActive ? 'text-yellow-500 underline' : '')}
						>
							{name}
						</NavLink>
					))}
				</ul>
			</nav>
		</header>
	);
}
