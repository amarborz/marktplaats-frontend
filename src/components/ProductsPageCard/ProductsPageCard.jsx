import React, { useState } from 'react'

import { Card } from 'react-bootstrap'

import noImage from '../../utils/images/noimage.jpg'

import { FaCartShopping, FaHeart } from 'react-icons/fa6'

import { LinkContainer } from 'react-router-bootstrap'

const ProductCard = ({ product, loggedIn }) => {
	console.log(product)
	const userId = localStorage.getItem('id')
	const [inCart, setInCart] = useState(false)
	console.log(inCart)

	const addToCart = () => {
		console.log('loggedIn: ', loggedIn)
		if (loggedIn) {
			fetch(`${process.env.REACT_APP_PATH}api/shoppingcart/by_user/${userId}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('token'),
					userId: userId,
				},
			})
				.then((res) => {
					return res.json()
				})
				.then((data) => {
					fetch(
						`${process.env.REACT_APP_PATH}api/item/add_to_cart/${product.id}/${data.id}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								Authorization: localStorage.getItem('token'),
								userId: userId,
							},
							body: JSON.stringify({
								quantity: '1',
							}),
						}
					)
				})
			product.color = 'grey'
			setInCart(true)
		}
	}

	const saveToLocalStorage = (product) => {
		const storageKey = 'myWishlist'

		const existingData = JSON.parse(localStorage.getItem(storageKey)) || []

		const newProductId = product.id
		const alreadyInList = existingData.some((item) => item.id === newProductId)

		if (!alreadyInList) existingData.push(product)

		localStorage.setItem(storageKey, JSON.stringify(existingData))
	}

	return (
		<Card
			style={{ width: '50rem' }}
			className="border-start-0 border-end-0 border-bottom-0 rounded-0 p-4"
		>
			<div style={{ display: 'flex' }}>
				<div style={{ width: '30%', cursor: 'pointer' }}>
					<LinkContainer
						to={`/product/${product.id}`}
						style={{ cursor: 'pointer', width: 250 }}
					>
						<Card.Img
							variant="top"
							src={product.foto?.length > 0 ? product.foto[0] : noImage}
							className="bg-secondary"
						/>
					</LinkContainer>
				</div>
				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '50%' }}>
						<Card.Title style={{ fontSize: '1.5rem' }} className="ms-4 mb-4">
							{product.productName}
						</Card.Title>
						<Card.Subtitle className="ms-4">
							{product.productDescription.length > 100
								? product.productDescription.slice(0, 100) + '...'
								: product.productDescription}
						</Card.Subtitle>
					</div>
					<div style={{ width: '20%', justifyContent: 'center' }}>
						<Card.Text style={{ color: 'red', fontWeight: 700, fontSize: 20 }}>
							${product.price}
						</Card.Text>
						{userId && (
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
						)}
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
