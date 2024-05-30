import Link from 'next/link';

export default function AboutPage() {
	const linkStyle = 'text-blue-700 underline dark:text-blue-400';

	return (
		<div>
			{/* Header */}
			<h1 className="text-5xl font-bold">Brief Introduction</h1>
			<hr className="border-gray-600 mt-10 mb-10" />
			{/* Paragraph */}
			<article className="text-lg mb-12">
				<p className="text-xl mb-10">
					Hello, I'm{' '}
					<span className="text-blue-700 dark:text-blue-400">
						Albert Foeng
					</span>
				</p>

				{/* Brief introduction of myself */}
				<p>
					I've always been interested in computers and programming. I
					started programming around June of 2023 with Javascript as my
					first programming language. <br />
					<br />
					At September 2023 I've stumbled upon{' '}
					<Link
						className={linkStyle}
						href="https://www.theodinproject.com/"
					>
						Odin Project
					</Link>{' '}
					where I learn HTML, CSS, Javascript fundamentals and Node <br />
					<br />
					I've made some projects that i post on my{' '}
					<Link className={linkStyle} href="https://github.com/gobGrobw">
						Github
					</Link>
					<br />I am also interested in C# and currently learning more
					about this amazing language!
				</p>
			</article>
		</div>
	);
}

