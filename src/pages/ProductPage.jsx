import React, { useEffect, useState } from 'react'

import ProductSummary from '../components/CardComponents/ProductSummary'
import ProductImg from '../components/CardComponents/ProductImg'
import ProductDetails from '../components/CardComponents/ProductDetails'

import { useParams } from 'react-router'
import { Container, Spinner } from 'react-bootstrap'

// Details about 1 product

const ProductPage = () => {
	const userId = localStorage.getItem('id')
	let { productId } = useParams()
	const [product, setProduct] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_PATH}api/product/${productId}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Authorization: localStorage.getItem('token'),
							userId: userId,
						},
					}
				)
				const productResponse = await response.json()
				setProduct(productResponse)
			} catch (error) {
				setProduct('Product is not available.')
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [productId, userId])

	return (
		<div style={{ marginTop: 100 }}>
			{isLoading && (
				<Container className="d-flex justify-content-center">
					<Spinner
						className="text-center"
						animation="border"
						role="status"
					></Spinner>
				</Container>
			)}
			{!isLoading && product === null && (
				<h2 className="text-center">Can't find the product.</h2>
			)}
			<div
				style={{
					marginTop: 100,
					display: 'flex',
					justifyContent: 'center',
					gap: '3rem',
					flexWrap: 'wrap',
				}}
			>
				{product && <ProductImg fotos={product?.foto} />}
				{product && <ProductSummary product={product} />}
			</div>
			{product && <ProductDetails product={product} />}
		</div>
		// <Container style={{ marginTop: 100 }}>
		// 	<h1 className="my-5">Productdetails</h1>
		// 	<Row>
		// 		<Col lg={4}>
		// 			<ProductImg fotos={product?.foto} />
		// 		</Col>
		// 		<Col lg={4}>{product && <ProductSummary product={product} />}</Col>
		// 		<Col lg={4}>
		// 			<ProductPurchase />
		// 		</Col>
		// 	</Row>
		// 	<Row>
		// 		<Col lg={12}>{product && <ProductDetails product={product} />}</Col>
		// 	</Row>
		// </Container>
	)
}
export default ProductPage
