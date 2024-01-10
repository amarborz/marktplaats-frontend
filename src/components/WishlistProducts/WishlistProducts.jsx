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
		<Container className="d-flex justify-content-center align-items-center">
			{isLoading && <Spinner animation="border" role="status"></Spinner>}
			{!isLoading && wishlist.length === 0 && (
				<h2>You have no products in your wishlist.</h2>
			)}
			{!isLoading && wishlist.length > 0 && (
				<div style={{ width: '50rem' }}>
					<h2 className="text-center">Your Wishlist:</h2>
					{wishlist.map((product) => (
						<ProductsPageCard
							key={product.id}
							product={product}
							setWishlist={setWishlist}
						/>
					))}
				</div>
			)}
		</Container>
	)
}

export default WishlistProducts
