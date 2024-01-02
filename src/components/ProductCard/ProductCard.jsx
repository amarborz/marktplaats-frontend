import React from 'react'

import { Card } from 'react-bootstrap'

import noImage from '../../utils/images/noimage.jpg'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ data }) => {
	const navigate = useNavigate()
	const handleClick = () => navigate(`/product/${data.id}`)

	return (
		<Card
			style={{ maxWidth: '180px', minWidth: '180px' }}
			className="border-0 m-3"
		>
			<Card.Img
				variant="top"
				src={data.foto[0] ? data.foto[0] : noImage}
				className="bg-secondary cursor-pointer"
				style={{ cursor: 'pointer' }}
				onClick={handleClick}
			/>
			<Card.Body className="p-1">
				<Card.Subtitle>{data.productName}</Card.Subtitle>
				<Card.Text>${data.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ProductCard
