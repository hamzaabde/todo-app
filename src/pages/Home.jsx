import { useReducer, useState } from 'react'

import Container from '../components/Container'
import Tabs from '../components/Category'
import AddTodo from '../components/AddTodo'
import TaskList from '../components/TaskList'
// import Header from '../components/Header'
// import AddTask from '../components/AddTaskBtn'
// import Tasks from '../components/TaskTable'

const uid = (length = 8) => {
	const CHAR_RNGE = [33, 122]
	const RNGE_EXCP = [
		34, 36, 37, 38, 39, 40, 41, 44, 45, 60, 61, 62, 63, 64, 91, 93, 94, 96,
	]

	const RANGE = []

	for (let i = Math.min(...CHAR_RNGE); i <= Math.max(...CHAR_RNGE); i++) {
		if (!RNGE_EXCP.includes(i)) RANGE.push(String.fromCharCode(i))
	}

	const random = () => {
		return Math.floor(Math.random() * RANGE.length)
	}

	let str = ''

	for (let i = 0; i < length; i++) {
		str += RANGE[random()]
	}

	return str
}

console.log(uid())

const TABS = ['All', 'Active', 'Completed']

const TASKS = [
	{ details: 'Go to the gym', done: false },
	{ details: 'Do coding challenges', done: false },
	{ details: 'Read express docs', done: true },
	{ details: 'Call Musa', done: true },
	{ details: 'Call Hamsa', done: false },
]

const taskStateReducer = (state, action) => {
	switch (action.type) {
		case 'MARK_DONE':
			return [
				...state.map((task) => {
					if (task.id === action.payload) task.done = true
					return task
				}),
			]
		case 'MARK_NOT_DONE':
			return [
				...state.map((task) => {
					if (task.id === action.payload) task.done = false
					return task
				}),
			]
		case 'ADD_TASK':
			if (action.payload !== '')
				return [...state, { id: uid(), details: action.payload, done: false }]
			return state
		case 'REMOVE_TASK':
			return [...state.filter((task) => task.id !== action.payload)]
		case 'REMOVE_ALL_TASKS':
			return [...state.filter((task) => !task.done)]
		default:
			throw new Error('Unspecified action type in task reducer')
	}
}

export default function () {
	const [tasks, dispatch] = useReducer(taskStateReducer, [
		...TASKS.map((_) => ({ ..._, id: uid() })),
	])
	const [activeTab, setActiveTab] = useState(0)

	return (
		<Container>
			{/* <Header />
			<AddTask />
			<Tasks /> */}
			<div className="flex flex-col items-center max-w-screen-sm mx-auto">
				<h1 className="font-raleway text-[#333333] text-4xl mt-8">#todo</h1>
				<Tabs tabs={TABS} active={activeTab} changeActive={setActiveTab} />
				<AddTodo dispatch={dispatch} />
				<TaskList tab={activeTab} tasks={tasks} dispatch={dispatch} />
			</div>
		</Container>
	)
}
