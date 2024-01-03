import React from 'react'

import { Card } from 'react-bootstrap'

import styles from './productSummary.module.css'

const ProductSummary = ({ product }) => {
	return (
		<div className={styles.textContainer}>
			<h4>{product.productName}</h4>

			<p className={styles.price}>${product.price}</p>
			{/* <div className={styles.detailsContainer}> */}
			{/* <p>{product.productDescription}</p> */}
			<h6>Category: {product.productType}</h6>
			<h6>Size: {product.size}</h6>
			<h6>Weight: {product.weight}</h6>

			{product?.propertyName.map((name, index) => (
				<h6 key={index}>
					{name}: {product.propertyValue[index]}
				</h6>
			))}
			{/* </div> */}
			<button className={styles.addButton}>ADD TO CART</button>
		</div>
	)
	// return (
	// 	<Card style={{ maxWidth: '50rem' }} className="border-1">
	// 		<Card.Body className="p-5">
	// 			<Card.Subtitle>{product.productName}</Card.Subtitle>
	// 			<br></br>
	// 			<Card.Text>{product.productDescription}</Card.Text>
	// 			<Card.Text>${product.price}</Card.Text>
	// 			{product.propertyName.map((name, index) => {
	// 				return (
	// 					<div key={index}>
	// 						{console.log(name)}
	// 						<Card.Text>
	// 							{name}: {product.propertyValue[index]}
	// 						</Card.Text>
	// 					</div>
	// 				)
	// 			})}
	// 		</Card.Body>
	// 	</Card>
	// )
}

export default ProductSummary
