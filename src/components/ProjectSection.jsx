import Link from 'next/link';

export default function ProjectSection({
	children,
	title,
	imgSrc,
	srcCode,
	liveDemo,
}) {
	const linkStyle = 'bg-slate-800 pt-1 pb-1 pl-3 pr-3 rounded-lg text-white';
	
	return (
		<div className="grid grid-cols-2 wideTablet:grid-cols-1 place-items-center gap-2">
			{/* Image wrapper */}
			<div className="overflow-hidden">
				{/* Image */}
				<img
					className="object-cover border-slate-800 border-4 aspect-video w-80 wideTablet:w-full"
					src={imgSrc}
					alt="Project image"
				/>
			</div>

			<div className="grid w-full">
				{/* Project name */}
				<h1 className="text-2xl font-bold">{title}</h1>

				{/* Project description */}
				<p>{children}</p>

				{/* Link wrapper */}
				<div className="flex gap-3 items-center mt-3">
					<Link className={linkStyle} target="_blank" href={srcCode ?? ''}>
						Source Code
					</Link>
					<Link
						className={linkStyle}
						target="_blank"
						href={liveDemo ?? ''}
					>
						Live Demo
					</Link>
				</div>
			</div>
		</div>
	);
}

