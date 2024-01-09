import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './productsPageList.css'
import { Container, Spinner } from 'react-bootstrap'

import ProductsPageCard from '../ProductsPageCard/ProductsPageCard'

const ProductsPageList = ({ searchName }) => {
	const [products, setProducts] = useState([])
	const [loggedIn, setLoggedIn] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [limitedProducts, setLimitedProducts] = useState([])
	const [number, setNumber] = useState(10)
	const [showLoadButton, setShowLoadButton] = useState(true)

	const userId = localStorage.getItem('id')
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
								setIsLoading(false)
								// console.log("loggedIn set to true: ", loggedIn)
							})

					})
					.catch((error) => {
						setProducts(productData)
						setLoggedIn(false)
					})
			})
		console.log('loggedIn: ', loggedIn)
		setIsLoading(false)
	}, [searchName, loggedIn, userId])

	const incrementHandler = () => {
		setNumber((prevNumber) => prevNumber + 10)
	}

	const loadMoreButton = showLoadButton && (
		<button className={'loadMoreButton'} onClick={incrementHandler}>
			LOAD MORE
		</button>
	)

	useEffect(() => {
		const filteredProducts = products.filter((product) =>
			category
				? product.productType === category
				: product.productType !== category
		)
		if (filteredProducts.length > number) {
			setLimitedProducts(filteredProducts.slice(0, number))

			setShowLoadButton(true)

			return
		}
		setLimitedProducts(products)
		setShowLoadButton(false)
	}, [products, number, category])

	return (
		<Container className="d-flex align-items-center justify-content-center">
			{isLoading && <Spinner animation="border" role="status"></Spinner>}
			{!isLoading && products.length === 0 && <h3>There are no products.</h3>}
			<div>
				{limitedProducts
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
				{!isLoading && loadMoreButton}
			</div>
		</Container>
	)
}

export default ProductsPageList
