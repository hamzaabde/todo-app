import { useState } from 'react'

import AddBtn from './AddTodoBtn'
import Input from './TodoInput'

export default function ({ dispatch }) {
	const [todo, setTodo] = useState('')

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				dispatch({ type: 'ADD_TASK', payload: todo })
				setTodo('')
			}}
			className="flex flex-row flex-nowrap items-stretch gap-x-7 self-stretch mt-5"
		>
			<Input todo={todo} setTodo={setTodo} />
			<AddBtn />
		</form>
	)
}
