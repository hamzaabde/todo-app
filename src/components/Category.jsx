export default function ({ tabs, active, changeActive }) {
	return (
		<div className="flex flex-row flex-nowrap self-stretch items-stretch justify-evenly font-semibold border-b-2 border-blue-500 mt-12">
			{tabs &&
				tabs.map((tab, index) => {
					return (
						<button
							key={index}
							onClick={() => changeActive(index)}
							className={`${
								index === active ? 'bg-blue-50' : null
							} transition py-2 w-24 text-sm font-semibold text-[#333333] text-center mb-1 rounded-md`}
						>
							{tab}
						</button>
					)
				})}
		</div>
	)
}
