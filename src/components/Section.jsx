export default function Section({ title, children }) {
	return (
		<div className="w-5/12 p-3 rounded-lg mb-5 tablet:w-full">
			<h1 className="text-xl mb-5 font-bold text-center">{title}</h1>
			{children}
		</div>
	);
}

