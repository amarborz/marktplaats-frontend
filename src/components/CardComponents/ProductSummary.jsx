import React from 'react'

import styles from './productSummary.module.css'

const ProductSummary = ({ product }) => {
	const userId = localStorage.getItem('id')

	const addToCart = () => {
		if (userId) {
			fetch(`${process.env.REACT_APP_PATH}api/shoppingcart/by_user/${userId}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('token'),
					userId: userId,
				},
			})
				.then((res) => {
					return res.json()
				})
				.then((data) => {
					fetch(
						`${process.env.REACT_APP_PATH}api/item/add_to_cart/${product.id}/${data.id}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								Authorization: localStorage.getItem('token'),
								userId: userId,
							},
							body: JSON.stringify({
								quantity: '1',
							}),
						}
					)
				})
			alert(`Added "${product.productName}" to cart successfully!`)
			return
		}
		alert(`Please login first.`)
	}

	return (
		<div className={styles.textContainer}>
			<h4>{product.productName}</h4>

			<p className={styles.price}>${product.price}</p>
			<h6>
				Category: {product.productType[0].toUpperCase()}
				{product.productType.slice(1)}
			</h6>
			<h6>Size: {product.size}</h6>
			<h6>Weight: {product.weight}</h6>

			{product?.propertyName.map((name, index) => (
				<h6 key={index}>
					{name}: {product.propertyValue[index]}
				</h6>
			))}
			<button className={styles.addButton} onClick={addToCart}>
				ADD TO CART
			</button>
		</div>
	)
}

export default ProductSummary
