import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import OrderCard from '../OrderCard/OrderCard'

const OrderList = () => {
	const [orderedItems, setOrderedItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const userId = localStorage.getItem('id')

	useEffect(() => {
		// Fetch user's order data
		fetch(`${process.env.REACT_APP_PATH}api/order/by_user/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
				userId: userId,
			},
		})
			.then((res) => res.json())
			.then((orderData) => {
				// Initialize an array to accumulate ordered items
				const accumulatedItems = []

				// Fetch item data for each order concurrently
				const fetchItemPromises = orderData.map((order) =>
					fetch(`${process.env.REACT_APP_PATH}api/item/by_order/${order.id}`, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Authorization: localStorage.getItem('token'),
							userId: userId,
						},
					}).then((res) => res.json())
				)

				// Resolve promises
				Promise.all(fetchItemPromises)
					.then((itemsData) => {
						itemsData.forEach((itemData, index) => {
							// Map each item and add order information
							const updatedItems = itemData.map((item) => ({
								...item,
								paymentDate: orderData[index].paymentDate,
								status: orderData[index].status,
								totalPayment: orderData[index].totalPayment,
								deliveryAddress: orderData[index].deliveryAddress,
								orderId: orderData[index].id,
							}))

							accumulatedItems.push(...updatedItems)
						})
						setOrderedItems(accumulatedItems)
						setIsLoading(false)
					})
					.catch((error) => {
						console.error('Error fetching item data:', error)
					})
			})
			.catch((error) => {
				console.error('Error fetching order data:', error)
			})
	}, [userId])

	return (
		<Container className="d-flex align-items-center justify-content-center mt-5">
			{isLoading && <Spinner animation="border" role="status"></Spinner>}
			{!isLoading && orderedItems.length === 0 && <h2>You have no orders.</h2>}
			<Row className="mt-5">
				{orderedItems.map((orderedItem, index) => (
					<Col key={orderedItem.itemId} xs={12}>
						<div style={{ marginBottom: '20px' }}>
							<Row>
								<Col xs={12}>
									{(index === 0 ||
										orderedItem.orderId !==
											orderedItems[index - 1].orderId) && (
										<div>
											<b>Order ID:</b> {orderedItem.orderId} <br />
											<b>Status:</b> {orderedItem.status} <br />
											<b>Total payment amount:</b> ${orderedItem.totalPayment}{' '}
											<br />
											<b>Shipped to:</b> {orderedItem.deliveryAddress} <br />
											<hr />
										</div>
									)}
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={6}>
									<OrderCard orderedItem={orderedItem} />
								</Col>
							</Row>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default OrderList
