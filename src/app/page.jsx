import Link from 'next/link';

export default function Home() {
	return (
		<div className="mt-48">
			<div className="mb-20">
				{/* Title */}
				<p className="text-3xl">Hello! I'm a</p>
				<h1 className="text-6xl mb-7 font-bold text-blue-600 drop-shadow-md dark:text-blue-400">
					Web Developer
				</h1>
				{/* Small introduction */}
				<p className="text-lg mb-10">
					I am a Junior Web Developer from Indonesia. I make website using
					frameworks such as ReactJS and NextJS
				</p>
				{/* Button that links to /about page */}
				<Link
					className="pt-2 pb-2 pl-3 pr-3 font-bold bg-blue-600 rounded-md shadow-lg dark:bg-blue-600 text-white"
					href="/about"
				>
					More about me
				</Link>
			</div>
		</div>
	);
}

