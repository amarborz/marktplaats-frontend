import React from 'react'
import shoppingCart from '../../utils/images/shoppingCart.png'

import { Card } from 'react-bootstrap'

const ProductPurchase = ({ product }) => {
	const addToCart = () => {
		fetch(`$api/item/add_to_cart/${product.id}/1`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Quantity: 1,
			}),
		})
	}

	return (
		<Card style={{ maxWidth: '20rem' }} className="border-0 p-1">
			<div style={{ display: 'flex' }}>
				<div style={{ width: '100%' }}></div>
				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '10%' }}>
						<Card.Title style={{ fontSize: '1.5rem' }}></Card.Title>
					</div>
					<div style={{ width: '50%' }}>
						<Card.Text style={{ color: 'red' }}></Card.Text>
						<button
							id="addToCart"
							onClick={addToCart}
							style={{
								display: 'flex',
								alignItems: 'center',
								backgroundColor: 'rgb(255,255,0)',
								border: '2px solid black',
							}}
						>
							<div style={{ fontSize: '5rem' }}>+</div>
							<div style={{ width: '5rem' }}>
								<Card.Img src={shoppingCart} />
							</div>
						</button>
					</div>
				</Card.Body>
			</div>
		</Card>
	)
}

export default ProductPurchase
