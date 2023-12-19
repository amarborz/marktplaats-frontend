import React, { useState } from 'react'

import { Card } from 'react-bootstrap'

import laptop from '../../utils/images/laptop.jpg'
import clothes from '../../utils/images/clothes.webp'
import books from '../../utils/images/books.webp'
import electronics from '../../utils/images/electronics.webp'

import { FaCartShopping, FaHeart } from 'react-icons/fa6'

import settings from '../../Settings'

import { LinkContainer } from 'react-router-bootstrap'

const path = settings.path
const userId = settings.userId

const ProductCard = ({ product }) => {
	const [inCart, setInCart] = useState(false)
	const addToCart = () => {
		fetch(`${path}api/shoppingcart/by_user/${userId}`)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				fetch(`${path}api/item/add_to_cart/${product.id}/${data.id}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						quantity: '1',
					}),
				})
			})
		product.color = 'grey'
		setInCart(true)
	}

	const saveToLocalStorage = (product) => {
		const storageKey = 'myWishlist'

		const existingData = JSON.parse(localStorage.getItem(storageKey)) || []

		const newProductId = product.id
		const alreadyInList = existingData.some((item) => item.id === newProductId)

		if (!alreadyInList) existingData.push(product)

		localStorage.setItem(storageKey, JSON.stringify(existingData))
	}

	let img = laptop
	if (product.productType === 'Electronica') {
		img = electronics
	} else if (product.productType === 'Kleding') {
		img = clothes
	} else if (['boeken', 'books', 'Books'].includes(product.productType)) {
		img = books
	}

	return (
		<Card style={{ maxWidth: '50rem' }} className="border-0 p-4">
			<div style={{ display: 'flex' }}>
				<div style={{ width: '40%' }}>
					<LinkContainer to={`/product/${product.id}`}>
						<Card.Img variant="top" src={img} className="bg-secondary" />
					</LinkContainer>
				</div>
				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '40%' }}>
						<Card.Title style={{ fontSize: '1.5rem' }}>
							{product.productName}
						</Card.Title>
						<Card.Subtitle>{product.productDescription}</Card.Subtitle>
					</div>
					<div style={{ width: '20%', justifyContent: 'center' }}>
						<Card.Text style={{ color: 'red' }}>${product.price}</Card.Text>
						<button
							id="addToCart"
							title={
								product.color === 'grey'
									? 'Already added to your shopping cart'
									: 'Add to your shopping cart'
							}
							onClick={addToCart}
							style={{
								display: 'flex',
								alignItems: 'center',
								backgroundColor: product.color,
								border: '2px solid black',
								borderRadius: '10px',
							}}
							disabled={product.color === 'grey'}
						>
							<div style={{ fontSize: '1rem' }}>+</div>
							<div
								style={{ width: '2rem', color: 'black', fontSize: '1.5rem' }}
							>
								<FaCartShopping />
							</div>
						</button>
						<button
							id="addToCart"
							title={
								product.color === 'grey'
									? 'Already added to your wishlist'
									: 'Add to your wishlist'
							}
							onClick={() => saveToLocalStorage(product)}
							style={{
								// 	display: 'flex',
								// 	alignItems: 'center',
								backgroundColor: 'white',
								border: 'none',
								margin: 'auto',
								// 	borderRadius: '10px',
							}}
							// disabled={product.color === 'grey'}
						>
							{/* <div style={{ fontSize: '1rem' }}>+</div> */}
							<div
								style={{
									width: '2rem',
									color: 'red',
									fontSize: '1.5rem',
								}}
							>
								<FaHeart />
							</div>
						</button>
					</div>
				</Card.Body>
			</div>
		</Card>
	)
}

export default ProductCard
