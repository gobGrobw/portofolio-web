export default function Header({ title }) {
	return (
		<div>
			<h1 className="text-5xl font-bold tablet:text-center">{title}</h1>
			<hr className="border-gray-600 mt-10 mb-10" />
		</div>
	);
}

