'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggle';

export default function Navigation() {
	return (
		<nav className="flex justify-center text-lg text-gray-800 mt-7 mb-7 dark:text-neutral-300">
			<ul className="flex items-center justify-center gap-5">
				<li className={usePathname() == '/' ? 'text-blue-400' : ''}>
					<Link id="layoutLink" href="/">
						Home
					</Link>
				</li>

				<li className={usePathname() == '/about' ? 'text-blue-400' : ''}>
					<Link id="layoutLink" href="/about">
						About
					</Link>
				</li>

				{/* Toggle light/dark mode */}
				<div className="pr-10 pl-10">
					<ThemeToggler></ThemeToggler>
				</div>

				<li className={usePathname() == '/skill' ? 'text-blue-400' : ''}>
					<Link id="layoutLink" href="/skill">
						Skills
					</Link>
				</li>

				<li className={usePathname() == '/projects' ? 'text-blue-400' : ''}>
					<Link id="layoutLink" href="/projects">
						Projects
					</Link>
				</li>
			</ul>
		</nav>
	);
}

