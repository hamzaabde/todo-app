export default function ({ type, placeholder, label, value, setValue }) {
	return (
		<div className="flex-col flex gap-y-1">
			<label
				htmlFor={label + type}
				className="ml-2 font-semibold self-start cursor-pointer text-blue-900"
			>
				{label}
			</label>
			<input
				type={type}
				id={label + type}
				placeholder={placeholder}
				className="rounded-md p-2 text-sm transition placeholder:text-blue-700/60 font-semibold text-blue-800 border-blue-100 border-1 focus:border-blue-100 focus:ring-1  focus:ring-blue-400  outline-0 w-full"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	)
}
