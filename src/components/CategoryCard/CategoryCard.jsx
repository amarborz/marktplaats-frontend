import React from 'react'

import { Card } from 'react-bootstrap'

const CategoryCard = ({ data }) => {
	return (
		<Card
			style={{ maxWidth: '180px', minWidth: '180px' }}
			className="border-0 m-3"
		>
			<Card.Img variant="top" src={data.image} className="bg-secondary" />
			<Card.Body className="p-1">
				<Card.Subtitle>{data.name}</Card.Subtitle>
			</Card.Body>
		</Card>
	)
}

export default CategoryCard
