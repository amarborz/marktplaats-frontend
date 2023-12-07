import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';

import settings from '../../Settings'

const path = settings.path
const userId = settings.userId

const ShoppingCartList = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch user's shopping cart data
    fetch(`${path}api/shoppingcart/by_user/${userId}`)
      .then((res) => res.json())
      .then((shoppingCartData) => {

        // Fetch item data
        fetch(`${path}api/item/by_shopping_cart/${shoppingCartData.id}`)
          .then((res) => res.json())
          .then((itemData) => {
            setCartItems(itemData)
          });
      });
  }, []);

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div>
        {cartItems.map((item) => (
          <ShoppingCartCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default ShoppingCartList;
