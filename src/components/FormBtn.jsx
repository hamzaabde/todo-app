export default function ({ label }) {
	return (
		<div className="mt-4">
			<button className="bg-blue-400 text-sm font-semibold rounded-md text-white py-2 px-8 hover:bg-blue-400/90  transition-all w-full">
				{label}
			</button>
		</div>
	)
}
