import React from 'react'

import laptop from '../../utils/images/laptop.jpg'

import { Card } from 'react-bootstrap'

const ProductImg = ({ fotos }) => {
	return (
		<Card style={{ maxWidth: '50rem' }} className="border-0">
			<Card.Img
				variant="top"
				src={fotos?.length > 0 ? fotos[0] : laptop}
				className="bg-secondary"
			/>
		</Card>
	)
}

export default ProductImg
