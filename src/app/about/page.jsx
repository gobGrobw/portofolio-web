import Link from 'next/link';
import Header from '@/components/Header';

export default function AboutPage() {
	const linkStyle = 'text-blue-700 underline dark:text-blue-400';

	return (
		<div>
			{/* Header */}
			<Header title={'Brief Introduction'} />
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
						target="_blank"
						className={linkStyle}
						href="https://www.theodinproject.com/"
					>
						Odin Project
					</Link>{' '}
					where I learn HTML, CSS, Javascript fundamentals and Node <br />
					<br />
					I've made some projects that i post on my{' '}
					<Link
						target="_blank
					"
						className={linkStyle}
						href="https://github.com/gobGrobw"
					>
						Github
					</Link>
					<br />I am also interested in C# and currently learning more
					about this amazing language!
				</p>
			</article>
		</div>
	);
}

