import React from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import laptop from '../../utils/images/laptop.jpg'

const ProductCard = () => {
	return (
		// <CardGroup>
		<Card style={{ maxWidth: '14rem' }} className="border-0">
			<Card.Img variant="top" src={laptop} className="bg-secondary" />
			<Card.Body className="p-1">
				<Card.Subtitle>
					Lenovo Ideapad Gaming 3 15.6" FHD Laptop R5-7535HS RTX 2050 8GB RAM
					512GB SSD
				</Card.Subtitle>
				<Card.Text>$489.99</Card.Text>
			</Card.Body>
		</Card>
		// </CardGroup>
	)
}

export default ProductCard
