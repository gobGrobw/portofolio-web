import Link from 'next/link';
import Header from '@/components/Header';
import ProjectSection from '@/components/ProjectSection';

export default function ProjectPage() {
	return (
		<div className="flex flex-col gap-10 mb-10">
			<Header title={'My projects'} />

			{/* Blog API */}
			<ProjectSection
				title={'Blog API'}
				imgSrc={'../BlogAPI.png'}
				liveDemo={'https://blog-client-iota-liard.vercel.app/'}
				srcCode={'https://github.com/gobGrobw/blog-client'}
			>
				A website project made using Vue and Nuxt. Fetching data from API
				using Express and Node.
			</ProjectSection>

			{/* Mock landing page */}
			<ProjectSection
				title={'Mock Landing Page'}
				imgSrc={'../DoesDelight.png'}
				liveDemo={'https://bakery-landing-page-nine.vercel.app/'}
				srcCode={'https://github.com/gobGrobw/bakery-landing-page'}
			>
				A mock of landing page website project made using Vue.
			</ProjectSection>

			<ProjectSection
				title={'Members Only'}
				imgSrc={'../Members.png'}
				liveDemo={'https://members-only-gob.glitch.me'}
				srcCode={'https://github.com/gobGrobw/members-only'}
			>
				A website with user authentication made using ExpressJS, NodeJS,
				PassportJS. Using MongoDB for the database.
			</ProjectSection>

			<ProjectSection
				title={'To-do App'}
				imgSrc={'../TodoApp.png'}
				liveDemo={'https://to-do-app-pi-eosin.vercel.app/'}
				srcCode={'https://github.com/gobGrobw/to-do-app'}
			>
				A website made using React and NextJS. With Clerk for User Authentication
				and MongoDB for the database.
			</ProjectSection>

			<div className="mt-10 text-center">
				<Link
					className="bg-slate-800 pt-1 pb-1 pl-3 pr-3 rounded-lg text-white"
					target="_blank"
					href={'https://github.com/gobGrobw/'}
				>
					More projects
				</Link>
			</div>
		</div>
	);
}

