import React from 'react'

import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FaTrashCan } from 'react-icons/fa6'

import noImage from '../../utils/images/noimage.jpg'

const AccountPageCard = ({ product, userId, filterById }) => {
	const deleteProduct = (id, name) => {
		fetch(`${process.env.REACT_APP_PATH}api/product/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
				userId: userId,
			},
		})
		filterById(id)
		alert(`deleted ${name} successfully`)
	}

	return (
		<Card
			style={{ width: '50rem' }}
			className="border-start-0 border-end-0 border-bottom-0 rounded-0 p-4"
		>
			<div style={{ display: 'flex' }}>
				<div style={{ width: '30%', cursor: 'pointer' }}>
					<LinkContainer
						to={`/product/${product.id}`}
						style={{ cursor: 'pointer', width: 250 }}
					>
						<Card.Img
							variant="top"
							src={product.foto?.length > 0 ? product.foto[0] : noImage}
							className="bg-secondary"
						/>
					</LinkContainer>
				</div>
				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '50%' }}>
						<Card.Title style={{ fontSize: '1.5rem' }} className="ms-4 mb-4">
							{product.productName}
						</Card.Title>
						<Card.Subtitle className="ms-4">
							{product.productDescription.length > 100
								? product.productDescription.slice(0, 100) + '...'
								: product.productDescription}
						</Card.Subtitle>
					</div>
					<div style={{ width: '20%', justifyContent: 'center' }}>
						<Card.Text style={{ color: 'red', fontWeight: 700, fontSize: 20 }}>
							${product.price}
						</Card.Text>

						<button
							id="addToCart"
							title={
								product.color === 'grey'
									? 'Already added to your shopping cart'
									: 'Add to your shopping cart'
							}
							onClick={() => deleteProduct(product.id, product.productName)}
							style={{
								display: 'flex',
								alignItems: 'center',
								backgroundColor: 'red',
								border: '2px solid black',
								borderRadius: '10px',
							}}
							disabled={product.color === 'grey'}
						>
							<div
								style={{ width: '2rem', color: 'black', fontSize: '1.5rem' }}
							>
								<FaTrashCan />
							</div>
						</button>
					</div>
				</Card.Body>
			</div>
		</Card>
	)
}

export default AccountPageCard
