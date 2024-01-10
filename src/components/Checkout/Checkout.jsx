import React, { useState, useEffect } from 'react'

import './checkout.css'

import { Link } from 'react-router-dom'

const Checkout = ({ cartItems }) => {
	const [totalAmount, setTotalAmount] = useState(0)
	const [totalPrice, setTotalPrice] = useState(0)
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
	  };

	useEffect(() => {
		const newTotalAmount = cartItems.reduce(
			(amount, product) => amount + product.quantity,
			0
		)
		const newTotalPrice = cartItems.reduce(
			(price, product) => price + product.quantity * product.price,
			0
		)

		setTotalAmount(newTotalAmount)
		setTotalPrice(newTotalPrice)
	}, [cartItems])

	return (
		<div className="sticky-top checkoutDiv" style={{ top: '100px' }}>
			<h6>Number of items: {totalAmount}</h6>
			<h6>Price of items: {totalPrice.toFixed(2)}$</h6>
			<h6>Delivery costs: {totalPrice >= 20 ? 0 : 3.5}$</h6>
			<h4 className='mt-4'>
				Final costs:{' '}
				{parseFloat(totalPrice.toFixed(2)) + (totalPrice >= 20 ? 0 : 3.5)}$
			</h4>

			<div>
				<h1>Select a Date</h1>
				<input
					type="date"
					value={selectedDate}
					onChange={handleDateChange}
				/>
				{selectedDate && (
					<p>You selected: {selectedDate}</p>
				)}
			</div>

			<Link to={`/payment?totalPrice=${totalPrice.toFixed(2)}&deliveryDate=${selectedDate}`}>
				<button className="checkoutButton">Checkout</button>
			</Link>
		</div>
	)
}

export default Checkout
