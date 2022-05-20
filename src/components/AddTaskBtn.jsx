export default function () {
	return (
		<div className="flex items-center justify-center py-4 px-20">
			<button className="flex flex-col-reverse items-center leading-3 py-2 px-6 text-blue-800 bg-blue-100 rounded-md shadow-md hover:scale-105 transition-all duration-[20ms]">
				<span className="leading-tight text-xs font-semibold">New task</span>
				<span className="text-3xl font-bold">+</span>
			</button>
		</div>
	)
}
