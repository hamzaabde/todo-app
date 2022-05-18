import { useState } from 'react'

import Container from '../components/Container'
import Input from '../components/FormInput'
import Btn from '../components/FormBtn'

export default function () {
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatedPassword, setRepeatedPassword] = useState('')

	return (
		<Container>
			<div className="flex flex-col gap-y-8 items-center h-full justify-center">
				<div className="bg-blue-50 shadow-xl ring-2 ring-blue-100/70  w-1/2 max-w-sm px-6 pb-10  rounded-md">
					<h1 className="text-2xl text-blue-900 font-bold mt-5 mb-4 text-center">
						Create account
					</h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="flex flex-col gap-y-4">
							<div className="flex gap-x-2">
								<Input
									label="Firstname"
									type="text"
									placeholder="firstname"
									value={firstname}
									setValue={setFirstname}
								/>
								<Input
									label="Lastname"
									type="text"
									placeholder="lastname"
									value={lastname}
									setValue={setLastname}
								/>
							</div>
							<Input
								type="text"
								label="Username"
								placeholder="username (i.e Hamsa)"
								value={username}
								setValue={setUsername}
							/>
							<div className="flex gap-x-2">
								<Input
									type="password"
									label="Password"
									placeholder="password"
									value={password}
									setValue={setPassword}
								/>
								<Input
									type="password"
									label="Repeat password"
									placeholder="password"
									value={repeatedPassword}
									setValue={setRepeatedPassword}
								/>
							</div>
							<Btn label="Create" />
						</div>
					</form>
				</div>
			</div>
		</Container>
	)
}
