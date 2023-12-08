import React from 'react'
import ShoppingCart from '../components/ShoppingCartList/ShoppingCartList'
import Checkout from '../components/Checkout/Checkout'

const ShoppingCartPage = () => {
	return <div style={{ backgroundColor: "rgb(245,245,245,1)" }} className='p-5'>
		<div style={{ display: 'flex' }}>
			<div style={{ width: '10%' }}></div>
			<div style={{ width: '70%' }}>
				<ShoppingCart />
			</div>
			<div style={{ width: '20%' }}>
				<Checkout />
			</div>
		</div>
	</div>
}

export default ShoppingCartPage
