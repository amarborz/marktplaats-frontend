import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap'

const Checkout = ({cartItems}) => {
    console.log(cartItems)

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
      const newTotalAmount = cartItems.reduce((amount, product) => amount + product.quantity, 0);
      const newTotalPrice = cartItems.reduce((price, product) => price + product.quantity * product.price, 0);
  
      setTotalAmount(newTotalAmount);
      setTotalPrice(newTotalPrice);
    }, [cartItems]);

    return <div className='p-5'>
        <div>
            Number of items: {totalAmount}
        </div>
        <div>
            Price of items: {totalPrice}
        </div>
        <div>
            Delivery costs: {totalPrice >= 20 ? 0 : 3.50}
        </div>
        <LinkContainer to='/payment'>
            <button style={{ backgroundColor: 'blue' }}>
                Checkout
            </button>
        </LinkContainer>
    </div>
}

export default Checkout
