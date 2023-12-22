import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ProductsPageCard from '../ProductsPageCard/ProductsPageCard'

const ProductsPageList = ({ searchName }) => {
	const userId = localStorage.getItem("id")
	const [products, setProducts] = useState([])

	useEffect(() => {
		console.log(userId)
		// Fetch user's shopping cart data
		console.log(localStorage.getItem("token"))
		fetch(`${process.env.REACT_APP_PATH}api/shoppingcart/by_user/${userId}`, {
			method: "GET",
			headers: {
			'Content-Type': 'application/json',
			'Authorization': localStorage.getItem("token"),
			'userId': userId,
			}
		})
			.then((res) => res.json())
			.then((shoppingCartData) => {
				// Fetch item data
				fetch(`${process.env.REACT_APP_PATH}api/item/by_shopping_cart/${shoppingCartData.id}`, {
					method: "GET",
					headers: {
						'Content-Type': 'application/json',
						'Authorization': localStorage.getItem("token"),
						'userId': userId,
						}
				})
					.then((res) => res.json())
					.then((itemData) => {
						// Fetch products data
						fetch(`${process.env.REACT_APP_PATH}api${searchName}`, {
							method: "GET",
							headers: {
								'Content-Type': 'application/json',
								'Authorization': localStorage.getItem("token"),
								'userId': userId,
								}
						})
							.then((res) => res.json())
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
							})
					})
			})
	}, [searchName])

	return (
		<Container className="d-flex align-items-center justify-content-center">
			<div>
				{products.map((product) => (
					<ProductsPageCard key={product.id} product={product} />
				))}
			</div>
		</Container>
	)
}

export default ProductsPageList
