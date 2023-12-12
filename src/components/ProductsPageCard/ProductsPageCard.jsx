import React, { useState, useEffect } from 'react'

import { Card } from 'react-bootstrap'

import laptop from '../../utils/images/laptop.jpg'
import clothes from '../../utils/images/clothes.webp'
import books from '../../utils/images/books.webp'
import electronics from '../../utils/images/electronics.webp'
import shoppingCart from '../../utils/images/shoppingCart.png'

import settings from '../../Settings'
import { LinkContainer } from 'react-router-bootstrap'

const path = settings.path
const userId = settings.userId

const ProductCard = ({ product }) => {

	const [inCart, setInCart] = useState(false)
	const addToCart = () => {
		fetch(`${path}api/shoppingcart/by_user/${userId}`)
			.then((res) => { return res.json() })
			.then((data) => {
				fetch(`${path}api/item/add_to_cart/${product.id}/${data.id}`, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						"quantity": "1"
					})
				})

			})
		product.color = 'blue' 
		setInCart(true)
	}

	let img = laptop
	if (product.productType == "Electronica") {
		img = electronics
	} else if (product.productType == "Kleding") {
		img = clothes
	} else if (["boeken", "books", "Books"].includes(product.productType)) {
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
						<Card.Subtitle>
							{product.productDescription}
						</Card.Subtitle>
					</div>
					<div style={{ width: '20%' }}>
						<Card.Text style={{ color: 'red' }}>
							${product.price}
						</Card.Text>
						<button id='addToCart' onClick={addToCart}
							style={{ display: 'flex', alignItems: 'center', backgroundColor: product.color, border: '2px solid yellow', borderRadius: '20px' }}>
							<div style={{ fontSize: '3rem' }}>
								+
							</div>
							<div style={{ width: '4rem' }} v>
								<Card.Img src={shoppingCart} />
							</div>
						</button>
					</div>
				</Card.Body>
			</div >
		</Card >
	)
}

export default ProductCard
