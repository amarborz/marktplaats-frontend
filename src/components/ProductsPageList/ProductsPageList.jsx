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
		// console.log(userId)
		// Fetch user's shopping cart data
		// console.log(localStorage.getItem("token"))
		// console.log("Trying to access shopping cart data")
		fetch(`${process.env.REACT_APP_PATH}api/shoppingcart/by_user/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
				userId: userId,
			},
		})
			.then((res) => {
				// console.log("res1: ", res)
				// if (!res.ok) {
				// 	throw new Error("response was not ok")
				// }
				return res.json()
			})
			.then((shoppingCartData) => {
				// Fetch item data
				// console.log(shoppingCartData)
				fetch(
					`${process.env.REACT_APP_PATH}api/item/by_shopping_cart/${shoppingCartData.id}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Authorization: localStorage.getItem('token'),
							userId: userId,
						},
					}
				)
					.then((res) => {
						// console.log("res2: ", res)
						return res.json()
					})
					.then((itemData) => {
						// Fetch products data
						fetch(`${process.env.REACT_APP_PATH}api${searchName}`, {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
								Authorization: localStorage.getItem('token'),
								userId: userId,
							},
						})
							.then((res) => {
								// console.log(res)
								return res.json()
							})
							.then((productData) => {
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
								setIsLoading(false)
								// console.log("loggedIn set to true: ", loggedIn)
							})
					})
			})
			.catch((error) => {
				console.log('catching the error')
				fetch(`${process.env.REACT_APP_PATH}api${searchName}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						// 'Authorization': localStorage.getItem("token"),
						// 'userId': userId,
					},
				})
					.then((res) => res.json())
					.then((productData) => {
						setProducts(productData)
						setLoggedIn(false)
					})
			})
		console.log('loggedIn: ', loggedIn)
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
