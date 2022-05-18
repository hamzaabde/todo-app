import { useState } from 'react'

import Container from '../components/Container'
import Input from '../components/FormInput'
import Btn from '../components/FormBtn'

export default function () {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	return (
		<Container>
			<div className="flex flex-col gap-y-8 items-center h-full justify-center">
				<div className="bg-blue-50 shadow-xl ring-2 ring-blue-100/70  w-1/2 max-w-sm px-6 pb-10  rounded-md">
					<h1 className="text-2xl text-blue-900 font-bold mt-5 mb-4 text-center">
						Sign in
					</h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="flex flex-col gap-y-4">
							<Input
								type="text"
								label="Username"
								placeholder="username (i.e Hamsa)"
								value={username}
								setValue={setUsername}
							/>
							<Input
								type="password"
								label="Password"
								placeholder="password"
								value={password}
								setValue={setPassword}
							/>
							<Btn label="Signin" />
						</div>
					</form>
				</div>
			</div>
		</Container>
	)
}
