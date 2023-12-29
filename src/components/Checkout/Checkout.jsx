import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Checkout = ({ cartItems }) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalAmount = cartItems.reduce((amount, product) => amount + product.quantity, 0);
        const newTotalPrice = cartItems.reduce((price, product) => price + product.quantity * product.price, 0);

        setTotalAmount(newTotalAmount);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    return <div className="sticky-top" style={{ top: '100px' }}>
        <div>
            Number of items: {totalAmount}
        </div>
        <div>
            Price of items: {totalPrice}
        </div>
        <div>
            Delivery costs: {totalPrice >= 20 ? 0 : 3.50}
        </div>
        <div>
            Final costs: {totalPrice + (totalPrice >= 20 ? 0 : 3.50)}
        </div>
        <Link to={`/payment?totalPrice=${totalPrice}`}>
            <button style={{ backgroundColor: 'blue' }}>
                Checkout
            </button>
        </Link>
    </div>
}

export default Checkout
