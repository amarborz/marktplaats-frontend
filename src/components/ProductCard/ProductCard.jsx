import React from 'react'

import { Card } from 'react-bootstrap'

import laptop from '../../utils/images/laptop.jpg'

const ProductCard = ({ data }) => {
	return (
		<Card
			style={{ maxWidth: '180px', minWidth: '180px' }}
			className="border-0 m-3"
		>
			<Card.Img variant="top" src={laptop} className="bg-secondary" />
			<Card.Body className="p-1">
				<Card.Subtitle>{data.productName}</Card.Subtitle>
				<Card.Text>${data.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ProductCard
