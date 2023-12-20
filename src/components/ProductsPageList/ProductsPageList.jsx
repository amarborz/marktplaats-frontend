import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ProductsPageCard from '../ProductsPageCard/ProductsPageCard'

import settings from '../../Settings'

const path = settings.path
const userId = settings.userId

const ProductList = ({ searchName }) => {
	const [products, setProducts] = useState([])
	console.log(`${path}api${searchName}`)
	console.log(products)

	useEffect(() => {
		// Fetch user's shopping cart data
		fetch(`${path}api/shoppingcart/by_user/${userId}`)
			.then((res) => res.json())
			.then((shoppingCartData) => {
				// Fetch item data
				fetch(`${path}api/item/by_shopping_cart/${shoppingCartData.id}`)
					.then((res) => res.json())
					.then((itemData) => {
						// Fetch products data
						fetch(`${path}api${searchName}`)
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

export default ProductList
