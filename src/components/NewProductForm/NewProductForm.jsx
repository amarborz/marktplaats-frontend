import React, { useState } from 'react'

import UploadImages from '../UploadImages/UploadImages'

import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap'

const NewProductForm = () => {
	let userId = localStorage.getItem('id')

	const [product, setProduct] = useState({
		productName: '',
		price: '',
		productDescription: '',
		size: '',
		weight: '',
		productType: '',
		foto: [],
		// productDetails: [{ propertyName: 'Brand', propertyValue: 'Samsung' }],
	})

	const [files, setFiles] = useState(new Array(10).fill(null))
	const [uploadedUrls, setUploadedUrls] = useState([])

	const [submitStatus, setSubmitStatus] = useState({
		submitted: false,
		success: false,
		message: '',
	})

	const handleFileChange = (event, index) => {
		const newFiles = [...files]
		console.log(event.target.value)
		newFiles[index] = event.target.value
		setUploadedUrls([...uploadedUrls, event.target.value])
		setFiles(newFiles)
		console.log(files)
	}

	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value })
	}

	const handleSubmit = async () => {
		window.scrollTo(0, 0)
		setSubmitStatus({ ...submitStatus, submitted: true })

		setTimeout(() => {
			setSubmitStatus({ ...submitStatus, submitted: false })
		}, 8000)

		console.log('Product Details:', product)
		const readyProduct = { ...product, foto: uploadedUrls }
		console.log(readyProduct)

		try {
			const response = await fetch(
				`${process.env.REACT_APP_PATH}api/product/user/${userId}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: localStorage.getItem('token'),
						userId: userId,
					},
					body: JSON.stringify(readyProduct),
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

	const handleSubmitAll = async (e) => {
		e.preventDefault()
		console.log(files)
		handleSubmit()
	}

	// const renderAdditionalInput = () => {
	// 	switch (product.productType) {
	// 		case 'electronics':
	// 			return (
	// 				<Form.Group>
	// 					<Form.Label>Brand</Form.Label>
	// 					<Form.Control
	// 						type="text"
	// 						name="Brand"
	// 						value={
	// 							product.productDetails.find(
	// 								(detail) => detail.propertyName === 'Brand'
	// 							)?.propertyValue || ''
	// 						}
	// 						// onChange={handleDetailChange}
	// 					/>
	// 				</Form.Group>
	// 			)
	// 		case 'books':
	// 			return (
	// 				<Form.Group>
	// 					<Form.Label>Condition</Form.Label>
	// 					<Form.Control
	// 						type="text"
	// 						name="Condition"
	// 						value={
	// 							product.productDetails.find(
	// 								(detail) => detail.propertyName === 'Condition'
	// 							)?.propertyValue || ''
	// 						}
	// 						// onChange={handleDetailChange}
	// 					/>
	// 				</Form.Group>
	// 			)
	// 		// Add cases for other product types as needed
	// 		default:
	// 			return null
	// 	}
	// }

	return (
		<Container className="mt-5">
			<h1>Add New Product</h1>
			{submitStatus.submitted && !submitStatus.success && (
				<Container className="d-flex justify-content-center">
					<Spinner animation="border" className="mt-5 text-center" />
				</Container>
			)}
			{submitStatus.success && (
				<Alert variant={submitStatus.success ? 'success' : 'danger'}>
					{submitStatus.message}
				</Alert>
			)}
			<Form onSubmit={handleSubmitAll}>
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
						<option value="furniture">Furniture</option>
						<option value="sport">Sport</option>
						<option value="games">Games</option>
					</Form.Control>
				</Form.Group>
				{/* {renderAdditionalInput()} */}
				<Form.Group>
					<UploadImages
						files={files}
						handleFileChange={handleFileChange}
						uploadedUrls={uploadedUrls}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="mb-5">
					Add Product
				</Button>
			</Form>
		</Container>
	)
}

export default NewProductForm
