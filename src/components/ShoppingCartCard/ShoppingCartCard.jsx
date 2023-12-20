import React, { useState} from 'react'

import { Card } from 'react-bootstrap'

import laptop from '../../utils/images/laptop.jpg'
import clothes from '../../utils/images/clothes.webp'
import books from '../../utils/images/books.webp'
import electronics from '../../utils/images/electronics.webp'
import trash_bin from '../../utils/images/trash_bin.jpg'

import settings from '../../Settings'
import { LinkContainer } from 'react-router-bootstrap'

const path = settings.path

const ShoppingCartCard = ({ item , resetCheckout}) => {
	const [quantity, setQuantity] = useState(item.quantity);


	const deleteItem = (itemId) => {
		fetch(`${path}api/item/${itemId}`, {
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json',
			}
		}).then(() => {
			console.log("Deleting item: ", itemId)
			// setIsDeleted(true)
			resetCheckout()
		})
	}
	const changeQuantity = (newQuantity, itemId) => {
		setQuantity(newQuantity);
		fetch(`${path}api/item/${itemId}`, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"quantity": newQuantity
			})
		})
		resetCheckout()
	}

	let img = laptop
	if (item.productType === "Electronica") {
		img = electronics
	} else if (item.productType === "Kleding") {
		img = clothes
	} else if (["boeken", "books", "Books"].includes(item.productType)) {
		img = books
	}
	return (
		<Card style={{ maxWidth: '60rem' }} className="border-0 p-4">

			<div style={{ display: 'flex' }}>

				<div style={{ width: '30%' }}>
					<LinkContainer to={`/product/${item.productId}`}>
						<Card.Img variant="top" src={img} className="bg-secondary" />
					</LinkContainer>
				</div>

				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '40%' }}>
						<Card.Title style={{ fontSize: '1.5rem' }}>
							{item.productName}
						</Card.Title>
						<Card.Subtitle>
							{item.productDescription}
						</Card.Subtitle>
					</div>
					<div style={{ width: '30%' }}>
						<Card.Text style={{ color: 'red' }}>
							${item.price}
						</Card.Text>
						<div style={{ display: 'flex', alignItems: 'center', width: '60%' }}>
							<div style={{ width: '50%' }}>
								<select
									id="addToCart"
									onChange={(e) => {
										changeQuantity(e.target.value, item.itemId)
									}}
									style={{
										display: 'flex',
										alignItems: 'center',
										border: '2px solid yellow',
										borderRadius: '20px',
										padding: '5px',
									}}
									value={quantity}
								>
									{[...Array(100).keys()].map((num) => (
										<option key={num + 1} value={num + 1}>
											{num + 1}
										</option>
									))}
								</select>
							</div>
							<div>
								<Card.Img src={trash_bin} onClick={() => {
									deleteItem(item.itemId)
								}}
								></Card.Img>
							</div>
						</div>
					</div>
				</Card.Body>
			</div >
		</Card >
	)
}

export default ShoppingCartCard
