import React, { useState } from 'react'

import { Alert, Button, Container, Form } from 'react-bootstrap'

const NewProductForm = () => {
	const [product, setProduct] = useState({
		productName: '',
		price: '',
		productDescription: '',
		size: '',
		weight: '',
		productType: '',
	})

	const [submitStatus, setSubmitStatus] = useState({
		submitted: false,
		success: false,
		message: '',
	})

	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setSubmitStatus({ ...submitStatus, submitted: true })

		setTimeout(() => {
			setSubmitStatus({ ...submitStatus, submitted: false })
		}, 5000)

		console.log('Product Details:', product)

		try {
			const response = await fetch(
				`${process.env.REACT_APP_PATH}api/product/user/1`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(product),
				}
			)

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`)
			}

			const data = await response.json()
			setSubmitStatus({
				submitted: true,
				success: true,
				message: 'Product added successfully!',
			})
			console.log('Product Added:', data)
		} catch (error) {
			setSubmitStatus({
				submitted: true,
				success: false,
				message: 'Something went wrong.',
			})
		}
	}

	return (
		<Container className="mt-5">
			<h1>Add New Product</h1>{' '}
			{submitStatus.submitted && (
				<Alert variant={submitStatus.success ? 'success' : 'danger'}>
					{submitStatus.message}
				</Alert>
			)}
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Enter product name"
						name="productName"
						value={product.productName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="Enter price"
						name="price"
						value={product.price}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						required
						as="textarea"
						rows={3}
						placeholder="Enter description"
						name="productDescription"
						value={product.productDescription}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Size</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Enter size"
						name="size"
						value={product.size}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Weight</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="Enter weight"
						name="weight"
						value={product.weight}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Type</Form.Label>
					<Form.Control
						required
						as="select"
						name="productType"
						value={product.productType}
						onChange={handleChange}
					>
						<option value="">Select Type</option>
						<option value="electronics">Electronics</option>
						<option value="clothes">Clothes</option>
						<option value="books">Books</option>
					</Form.Control>
				</Form.Group>

				<Button variant="primary" type="submit" className="mt-4">
					Add Product
				</Button>
			</Form>
		</Container>
	)
}

export default NewProductForm
