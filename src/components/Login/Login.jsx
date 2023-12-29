import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	const handleChangeEmail = (e) => {
		setEmail(e.target.value)
	}

	const handleChangePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const loginRequest = {
			email: email,
			password: password,
		}

		console.log(loginRequest)
		fetch(`${process.env.REACT_APP_PATH}auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginRequest),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				if (data.success) {
					// Save token and user details in localStorage
					localStorage.setItem('token', data.token)
					localStorage.setItem('name', data.name)
					localStorage.setItem('id', data.id)
					console.log('Opgeslagen in local storage')
					console.log(data.token)
					navigate(`/`)
				}
			})
			.catch((error) => {
				console.error('Error:', error)
				console.log('logging in as user1')
				localStorage.setItem('id', 1)
				navigate(`/`)
			})
	}

	return (
		<Container>
			<div className="mt5">Login</div>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Enter email"
						name="email"
						value={email}
						onChange={handleChangeEmail}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Enter password"
						name="password"
						value={password}
						onChange={handleChangePassword}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="mt-4">
					Login
				</Button>
			</Form>
		</Container>
	)
}

export default Login
