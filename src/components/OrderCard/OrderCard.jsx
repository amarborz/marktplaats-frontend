import React from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import noImage from '../../utils/images/noimage.jpg'

const OrderCard = ({ orderedItem }) => {
	let item = orderedItem

	return (
		<Card style={{ maxWidth: '60rem' }} className="border-0 p-4">
			<div style={{ display: 'flex' }}>
				<div style={{ width: '30%' }}>
					<LinkContainer to={`/product/${item.productId}`}>
						<Card.Img variant="top" src={item.foto?.length > 0 ? item.foto[0] : noImage} className="bg-secondary" />
					</LinkContainer>
				</div>
				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '40%' }}>
						<Card.Title style={{ fontSize: '1.5rem' }}>
							{item.productName}
						</Card.Title>
						<Card.Subtitle>
							{item.productDescription.length > 100
							? item.productDescription.slice(0, 100) + '...'
							: item.productDescription}
							</Card.Subtitle>
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
