import Link from 'next/link';
import ThemeWrapper from '@/components/ThemeWrapper';
import ThemeToggler from '@/components/ThemeToggle';
import './globals.css';

export const metadata = {
	title: 'Portofolio',
	description: 'Portofolio made using Next JS',
	icons: {
		icon: '/favicon.png',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeWrapper>
					<section className="flex justify-between items-center">
						{/* Logo */}
						<img
							className="bg-neutral-800 h-10 p-1 dark:bg-transparent"
							src="/favicon.png"
							alt="Icon"
						/>

						{/* Navigation link */}
						<nav className="flex justify-center gap-2 text-lg text-gray-800 mt-7 mb-7 dark:text-neutral-300">
							<Link href="/">Home</Link>
							<Link href="/about">About</Link>
							<Link href="/projects">Projects</Link>
							<Link href="/contact">Contact me</Link>
						</nav>

						{/* Light/dark mode button */}
						<ThemeToggler></ThemeToggler>
					</section>

					<main className="mt-16 dark:text-neutral-300">{children}</main>
				</ThemeWrapper>
			</body>
		</html>
	);
}

