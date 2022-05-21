import Task from './Task'

export default function ({ tab, tasks, dispatch }) {
	const filteredTasks =
		tasks &&
		tasks.filter(({ done }) => (tab === 1 ? !done : tab === 2 ? done : true))

	return (
		<div className="self-stretch flex flex-col items-stretch gap-y-2 mt-4 mb-20">
			<>
				{filteredTasks &&
					filteredTasks.map((task) => (
						<Task key={task.id} tab={tab} dispatch={dispatch} task={task} />
					))}
			</>
			{tab === 2 && filteredTasks.length ? (
				<button
					className="mt-8 px-8 py-3 rounded-md self-end font-semibold text-sm bg-red-500 text-white transition hover:bg-red-500/90"
					onClick={() => dispatch({ type: 'REMOVE_ALL_TASKS' })}
				>
					delete all
				</button>
			) : null}
		</div>
	)
}
