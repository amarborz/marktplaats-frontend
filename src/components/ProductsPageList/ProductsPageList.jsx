import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import ProductsPageCard from '../ProductsPageCard/ProductsPageCard'
import { useLocation } from 'react-router-dom'

const ProductsPageList = ({ searchName }) => {
	const userId = localStorage.getItem('id')
	const [products, setProducts] = useState([])
	const [loggedIn, setLoggedIn] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const category = searchParams.get('category')
	console.log('category: ', category)
	console.log(products)

	useEffect(() => {
		// get products
		fetch(`${process.env.REACT_APP_PATH}api${searchName}`)
			.then((res) => res.json())
			.then((productData) => {
				// get shoppingcart of user
				fetch(`${process.env.REACT_APP_PATH}api/shoppingcart/by_user/${userId}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: localStorage.getItem('token'),
						userId: userId,
					},
				})
					.then((res) => res.json())
					.then((shoppingCartData) => {
						// get items in shoppingcart
						fetch(`${process.env.REACT_APP_PATH}api/item/by_shopping_cart/${shoppingCartData.id}`, {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
								Authorization: localStorage.getItem('token'),
								userId: userId,
							},
						})
							.then((res) => res.json())
							.then((itemData) => {
								// find which products are already in the shoppingcart
								const updatedProducts = productData.map((product) => {
									let color = 'rgb(0, 183, 255)'
									for (let i = 0; i < itemData.length; i++) {
										if (itemData[i].productId === product.id) {
											color = 'grey'
										}
									}
									return { ...product, color }
								})
								setProducts(updatedProducts)
								setLoggedIn(true)
							})

					})
					.catch((error) => {
						setProducts(productData)
						setLoggedIn(false)
					})
			})

		setIsLoading(false)
	}, [searchName, loggedIn, userId])

	return (
		<Container className="d-flex align-items-center justify-content-center">
			{isLoading && <Spinner animation="border" role="status"></Spinner>}
			{!isLoading && products.length === 0 && <h3>There are no products.</h3>}
			<div>
				{products
					.filter((product) =>
						category
							? product.productType === category
							: product.productType !== category
					)
					.map((filteredProduct) => (
						<ProductsPageCard
							key={filteredProduct.id}
							product={filteredProduct}
							loggedIn={loggedIn}
						/>
					))}
			</div>
		</Container>
	)
}

export default ProductsPageList
