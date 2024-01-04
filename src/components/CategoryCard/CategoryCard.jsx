import React from 'react'

import { Card } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

const CategoryCard = ({ data }) => {
	const navigate = useNavigate()

	const handleCategoryClick = (category) => {
		let url = `/products?category=${category}`
		console.log('This is my url: ', url)
		navigate(url)
	}

	return (
		<Card
			style={{ maxWidth: '240px', minWidth: '240px' }}
			className="border-0 m-3"
		>
			<Card.Img
				variant="top"
				src={data.image}
				className="bg-secondary rounded-2"
				style={{ height: 150, objectFit: 'cover', cursor: 'pointer' }}
				onClick={() => {
					handleCategoryClick(data.name.toLowerCase())
				}}
			/>
			<Card.Body className="p-1">
				<Card.Subtitle>{data.name}</Card.Subtitle>
			</Card.Body>
		</Card>
	)
}

export default CategoryCard
