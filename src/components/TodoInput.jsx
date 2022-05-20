export default function ({ todo, setTodo }) {
	return (
		<div className="grow">
			<input
				className="w-full h-full rounded-lg"
				type="text"
				value={todo}
				placeholder="add details"
				onChange={(e) => setTodo(e.target.value)}
			/>
		</div>
	)
}
