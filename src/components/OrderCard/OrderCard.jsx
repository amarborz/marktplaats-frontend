import React from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import laptop from '../../utils/images/laptop.jpg'
import clothes from '../../utils/images/clothes.jpg'
import books from '../../utils/images/books.webp'
import electronics from '../../utils/images/electronics.png'

const OrderCard = ({ orderedItem }) => {
	let item = orderedItem
	let img =
		item.productType === 'Electronica'
			? electronics
			: item.productType === 'Kleding'
			? clothes
			: ['boeken', 'books', 'Books'].includes(item.productType)
			? books
			: laptop

	return (
		<Card style={{ maxWidth: '40rem' }} className="border-0 p-4">
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
						<Card.Subtitle>{item.productDescription}</Card.Subtitle>
					</div>
					<div style={{ width: '20%' }}>
						<Card.Text style={{ color: 'red' }}>Price: ${item.price}</Card.Text>
						<Card.Text style={{ color: 'blue' }}>
							Amount: {item.quantity}
						</Card.Text>
					</div>
				</Card.Body>
			</div>
		</Card>
	)
}

export default OrderCard
