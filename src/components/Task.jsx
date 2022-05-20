import { useState } from 'react'

export default function ({ tab, task, dispatch }) {
	return (
		<div className="flex flex-nowrap items-center gap-x-2">
			<input
				className="rounded-md w-6 h-6"
				checked={task.done}
				onChange={() => {
					if (task.done) dispatch({ type: 'MARK_NOT_DONE', payload: task.id })
					if (!task.done) dispatch({ type: 'MARK_DONE', payload: task.id })
				}}
				type="checkbox"
			/>
			<p
				className={`${
					task.done ? 'line-through' : null
				} grow decoration-2 decoration-red-500 text-lg font-[500] text-black`}
			>
				{task.details}
			</p>
			<button
				className={`${
					tab !== 2 ? 'invisible' : ''
				} mr-4 self-end text-sm w-5 h-5 rounded-md font-bold text-white bg-red-500`}
				onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
			>
				X
			</button>
		</div>
	)
}
