import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductsPageList/ProductsPageList'
// Browse multiple products

const ProductsPage = () => {
	let { url } = useParams();
	console.log("url before", url)
	if (url === undefined) {
		url = '/product'
	} else {
		url = `/product/url`
	}
	console.log("url after", url)
	return <div style={{backgroundColor: "rgb(245,245,245,1)"}} className='p-5'>
		<ProductList searchName={url} />
	</div>
}

export default ProductsPage
