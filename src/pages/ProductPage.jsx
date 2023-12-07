import React from 'react'
import { useParams } from 'react-router-dom'

// Details about 1 product

const ProductPage = () => {
	const { productId } = useParams();
	console.log(productId)
	return <div>ProductPage: {productId}</div>
}

export default ProductPage
