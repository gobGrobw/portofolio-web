import Navigation from '@/components/Navigation';
import ThemeWrapper from '@/components/ThemeWrapper';
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
					<section className="flex justify-center">
						{/* Navigation link */}
						<Navigation></Navigation>
					</section>

					<main className="mt-16 dark:text-neutral-300">{children}</main>
				</ThemeWrapper>
			</body>
		</html>
	);
}

