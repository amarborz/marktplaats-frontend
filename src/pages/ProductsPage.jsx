import React from 'react'
import { useParams } from 'react-router-dom'
import ProductsPageList from '../components/ProductsPageList/ProductsPageList'
// Browse multiple products

const ProductsPage = () => {
	let { url } = useParams()
	url = url === undefined ? '/product' : `/product/search_name/${url}`

	return (
		<div style={{ marginTop: 100 }} className="">
			<ProductsPageList searchName={url} />
		</div>
	)
}

export default ProductsPage
