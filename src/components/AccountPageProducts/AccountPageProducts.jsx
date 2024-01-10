import React, { useState, useEffect } from 'react'

import AccountPageCard from '../AccountPageCard/AccountPageCard'

import { Container, Spinner } from 'react-bootstrap'

const AccountPageProducts = () => {
	const userId = localStorage.getItem('id')
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch(`${process.env.REACT_APP_PATH}api/product/by_user/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
				userId: userId,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setProducts(data)
				setLoading(false)
			})
	}, [userId])

	const filterById = (id) => {
		const filteredProducts = products.filter((product) => product.id !== id)
		setProducts(filteredProducts)
	}

	return (
		<Container className="d-flex align-items-center justify-content-center">
			{loading && <Spinner animation="border" role="status"></Spinner>}
			{!loading && products.length === 0 && <h2>There are no products.</h2>}
			<div>
				{!loading && products.length > 0 && (
					<h2 className="text-center">Your Products:</h2>
				)}
				{products.map((product) => (
					<AccountPageCard
						key={product.id}
						product={product}
						userId={userId}
						filterById={filterById}
					/>
				))}
				{/* {!isLoading && loadMoreButton} */}
			</div>
		</Container>
	)
}

export default AccountPageProducts
