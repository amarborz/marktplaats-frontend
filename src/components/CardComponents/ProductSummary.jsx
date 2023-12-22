import React from 'react'

import { Card } from 'react-bootstrap'

const ProductSummary = ({ product }) => {
	return (
		<Card style={{ maxWidth: '50rem' }} className="border-1">
			<Card.Body className="p-5">
				<Card.Subtitle>{product.productName}</Card.Subtitle>
				<br></br>
				<Card.Text>{product.productDescription}</Card.Text>
				<Card.Text>${product.price}</Card.Text>
				{product.propertyName.map((name, index) => {
					return (
						<div key={index}>
							{console.log(name)}
							<Card.Text>
								{name}: {product.propertyValue[index]}
							</Card.Text>
						</div>
					)
				})}
			</Card.Body>
		</Card>
	)
}

export default ProductSummary
