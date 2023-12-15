import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import laptop from '../../utils/images/laptop.jpg'
import clothes from '../../utils/images/clothes.webp'
import books from '../../utils/images/books.webp'
import electronics from '../../utils/images/electronics.webp'

const OrderCard = ({ orderedItem }) => {
    let item = orderedItem
    console.log(item)
    let img = laptop
	if (item.productType === "Electronica") {
		img = electronics
	} else if (item.productType === "Kleding") {
		img = clothes
	} else if (["boeken", "books", "Books"].includes(item.productType)) {
		img = books
	}

    return (
        <Card style={{ maxWidth: '50rem' }} className="border-0 p-4">
            <div style={{ display: 'flex' }}>
				<div style={{ width: '40%' }}>
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
					<div style={{ width: '20%' }}>
						<Card.Text style={{ color: 'red' }}>
							${item.price}
						</Card.Text>
					</div>
				</Card.Body>
			</div >
        </Card>
    )
}

export default OrderCard