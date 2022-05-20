import TaskRow from './TaskRow'
import Task from './TaskRow'

export default function () {
	return (
		<div className="py-4 px-20">
			<div className="border-t-2 border-t-blue-500 flex flex-col">
				<TaskRow />
			</div>
		</div>
	)
}
