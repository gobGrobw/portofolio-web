'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggle';
import { RiMenuFill } from 'react-icons/ri';
import { useState } from 'react';

export default function Navigation() {
	const [nav, setNav] = useState(true);
	function onClick() {
		setNav(!nav);
	}

	return (
		<nav
			className={`flex justify-center text-lg text-gray-800 mt-7 mb-7 dark:text-neutral-300 tablet:mt-0 tablet:text-neutral-300`}
		>
			<div className="opacity-0 size-0 pointer-events-none tablet:pointer-events-auto tablet:size-1 tablet:opacity-100 tablet:z-20 tablet:absolute tablet:flex tablet:gap-2 tablet:top-2 tablet:left-2">
				<button className='text-blue-700' onClick={onClick}>
					<RiMenuFill size={30} />
				</button>
				<ThemeToggler size={28} />
			</div>
			<ul
				className={`flex items-center justify-center gap-5 ${
					nav ? 'tablet:-translate-y-full' : ''
				} transition-all tablet:flex-col tablet:absolute tablet:z-10 tablet:bg-slate-900 tablet:w-full tablet:pb-3 tablet:pt-3`}
			>
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
				<div className="pr-10 pl-10 tablet:opacity-0 tablet:absolute tablet:pointer-events-none">
					<ThemeToggler size={30} />
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

