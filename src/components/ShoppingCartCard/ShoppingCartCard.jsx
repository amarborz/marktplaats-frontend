import React, { useState } from 'react'

import { Card } from 'react-bootstrap'

import laptop from '../../utils/images/laptop.jpg'
import clothes from '../../utils/images/clothes.webp'
import books from '../../utils/images/books.webp'
import electronics from '../../utils/images/electronics.webp'
import noImage from '../../utils/images/noimage.jpg'

import { LinkContainer } from 'react-router-bootstrap'
import { FaTrashCan } from 'react-icons/fa6'

const ShoppingCartCard = ({ item, resetCheckout }) => {
	const userId = localStorage.getItem('id')
	const [quantity, setQuantity] = useState(item.quantity)
	console.log(item)

	const deleteItem = (itemId) => {
		fetch(`${process.env.REACT_APP_PATH}api/item/${itemId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
				userId: userId,
			},
		}).then(() => {
			console.log('Deleting item: ', itemId)
			// setIsDeleted(true)
			resetCheckout()
		})
	}
	const changeQuantity = (newQuantity, itemId) => {
		setQuantity(newQuantity)
		fetch(`${process.env.REACT_APP_PATH}api/item/${itemId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
				userId: userId,
			},
			body: JSON.stringify({
				quantity: newQuantity,
			}),
		})
		resetCheckout()
	}

	let img = laptop
	if (item.productType === 'Electronica') {
		img = electronics
	} else if (item.productType === 'Kleding') {
		img = clothes
	} else if (['boeken', 'books', 'Books'].includes(item.productType)) {
		img = books
	}
	return (
		<Card
			style={{ maxWidth: '60rem' }}
			className="border-start-0 border-end-0 border-bottom-0 rounded-0 p-4"
		>
			<div style={{ display: 'flex' }}>
				<div style={{ width: '30%' }}>
					<LinkContainer
						to={`/product/${item.productId}`}
						style={{ cursor: 'pointer', width: 250 }}
					>
						<Card.Img
							variant="top"
							src={item.fotos?.length > 0 ? item.fotos[0] : noImage}
							className="bg-secondary"
						/>
					</LinkContainer>
				</div>

				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '40%' }}>
						<Card.Title style={{ fontSize: '1.5rem' }} className="ms-4 mb-4">
							{item.productName}
						</Card.Title>
						<Card.Subtitle className="ms-4">
							{item.productDescription.length > 100
								? item.productDescription.slice(0, 100) + '...'
								: item.productDescription}
						</Card.Subtitle>
					</div>
					<div style={{ width: '30%' }}>
						<Card.Text style={{ color: 'red', fontWeight: 700, fontSize: 20 }}>
							${item.price}
						</Card.Text>
						<div
							style={{ display: 'flex', alignItems: 'center', width: '60%' }}
						>
							<div>
								<select
									id="addToCart"
									onChange={(e) => {
										changeQuantity(e.target.value, item.itemId)
									}}
									style={{
										// display: 'flex',
										// alignItems: 'center',
										border: '2px solid black',
										borderRadius: '5px',
										padding: '2px',
									}}
									value={item.quantity}
								>
									{[...Array(100).keys()].map((num) => (
										<option key={num + 1} value={num + 1}>
											{num + 1}
										</option>
									))}
								</select>
							</div>
							<div>
								<FaTrashCan
									onClick={() => {
										deleteItem(item.itemId)
									}}
									style={{ cursor: 'pointer', marginLeft: 15, fontSize: 25 }}
								/>
								{/* <Card.Img
									src={trash_bin}
									onClick={() => {
										deleteItem(item.itemId)
									}}
									style={{ cursor: 'pointer' }}
								></Card.Img> */}
							</div>
						</div>
					</div>
				</Card.Body>
			</div>
		</Card>
	)
}

export default ShoppingCartCard
