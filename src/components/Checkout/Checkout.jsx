import React, { useState, useEffect } from 'react';
import settings from '../../Settings'
import { LinkContainer } from 'react-router-bootstrap'

const path = settings.path
const userId = settings.userId

const Checkout = () => {

    const products = [
        {
            name: "sokken",
            quantity: 3,
            price: 10
        },
        {
            name: "tv",
            quantity: 5,
            price: 500
        },
    ]
    let totalAmount = products.reduce((amount, product) => {
        return amount + product.quantity
    }, 0)

    let totalPrice = products.reduce((price, product) => {
        return price + (product.quantity * product.price)
    }, 0)

    return <div className='p-5'>
        <div>
            Items: {totalAmount}
        </div>
        <div>
            Items: {totalPrice}
        </div>
        <div>
            Delivery costs: {totalPrice >= 20 ? 0 : 3.50}
        </div>
        <LinkContainer to='/payment'>
            <button style={{backgroundColor: 'blue'}}>
                Checkout
            </button>
        </LinkContainer>
    </div>
}

export default Checkout
