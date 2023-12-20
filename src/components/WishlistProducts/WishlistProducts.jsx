import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import ProductsPageCard from '../ProductsPageCard/ProductsPageCard'

const WishlistProducts = () => {
	const [wishlist, setWishlist] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// Fetch wishlist from local storage
		const storedWishlist = JSON.parse(localStorage.getItem('myWishlist')) || []
		setWishlist(storedWishlist)
		setIsLoading(false)
	}, [])

	return (
		<Container
			style={{ marginTop: '100px' }}
			className="d-flex justify-content-center align-items-center"
		>
			{isLoading && <Spinner animation="border" role="status"></Spinner>}
			{!isLoading && wishlist.length === 0 && (
				<h3>You have no products in your wishlist.</h3>
			)}
			<div>
				{!isLoading &&
					wishlist.length > 0 &&
					wishlist.map((product) => (
						<ProductsPageCard key={product.id} product={product} />
					))}
			</div>
		</Container>
	)
}

export default WishlistProducts
