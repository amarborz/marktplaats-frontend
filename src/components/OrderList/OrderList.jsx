import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';

import settings from '../../Settings'

const path = settings.path
const userId = settings.userId

const OrderList = () => {
    const [orderedItems, setOrderedItems] = useState([]);

    useEffect(() => {
        // Fetch user's order data
        fetch(`${path}api/order/by_user/${userId}`)
            .then((res) => res.json())
            .then((orderData) => {
                orderData.map((order) => {
                    
                    // Fetch item data
                    fetch(`${path}api/item/by_order/${order.id}`)
                        .then((res) => res.json())
                        .then((itemData) => {
                            
                            const updatedItems = itemData.map((item) => {
                                
                                return {
                                    ...item,
                                paymentDate: order.paymentDate,
                                status: order.status,
                                totalPayment: order.totalPayment,
                                deliveryAddress: order.deliveryAddress,
                                orderId: order.orderId
                                }
                            })
                            setOrderedItems(updatedItems)
                        });
                })

            });
    }, []);

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div>
                {orderedItems.map((orderedItem) => (
                    <OrderCard key={orderedItem.itemId} orderedItem={orderedItem} />
                ))}
            </div>
        </Container>
    );
}

export default OrderList;