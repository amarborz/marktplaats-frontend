import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductsPageList/ProductsPageList'
// Browse multiple products

const ProductsPage = () => {
	let { url } = useParams();
	url = url === undefined ? '/product' : `/product/search_name/${url}`
	return <div style={{backgroundColor: "rgb(245,245,245,1)"}} className='p-5'>
		<ProductList searchName={url} />
	</div>
}

export default ProductsPage
