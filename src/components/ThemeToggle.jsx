'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaSun } from 'react-icons/fa6'; // Sun icon
import { IoMoonSharp } from 'react-icons/io5'; // Moon icon
import Image from 'next/image';

export default function ThemeToggler({ size }) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	});

	// Placeholder to load toggler
	if (!mounted)
		return (
			<Image
				src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
				width={size || 26}
				height={size || 26}
				sizes={`${size}x${size}`}
				alt="Loading Light/Dark Toggle"
				priority={false}
				title="Loading Light/Dark Toggle"
			/>
		);

	return (
		<button
			onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
		>
			{theme === 'dark' ? <FaSun size={size} /> : <IoMoonSharp size={size} />}
		</button>
	);
}

