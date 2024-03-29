import React, { useEffect, useState } from 'react'

import ProductCard from '../ProductCard/ProductCard'

import { CardGroup, Spinner } from 'react-bootstrap'

const HomeProducts = () => {
	const userId = localStorage.getItem('id')
	const [latestProducts, setLatestProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_PATH}api/product`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Authorization: localStorage.getItem('token'),
							userId: userId,
						},
					}
				)
				const products = await response.json()
				setLatestProducts(products.slice(-10))
			} catch (error) {
				setLatestProducts('There are no new products at the moment.')
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [userId])

	return (
		<div style={{ marginTop: '60px', textAlign: 'center' }}>
			<h4>Latest Products:</h4>
			{isLoading && <Spinner animation="border" className="mt-5" />}
			<CardGroup
				className="justify-content-center m-auto"
				style={{ maxWidth: 1200 }}
			>
				{latestProducts &&
					latestProducts.map((product) => {
						return <ProductCard data={product} key={product.id} />
					})}
			</CardGroup>
		</div>
	)
}

export default HomeProducts
