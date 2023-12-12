import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';
import Checkout from '../Checkout/Checkout'

import settings from '../../Settings'

const path = settings.path
const userId = settings.userId

const ShoppingCartList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [resetCosts, setResetCosts] = useState([true])

  const resetCheckout = () => {
    setResetCosts(resetCosts == true ? false : true);
  }

  useEffect(() => {
    // Fetch user's shopping cart data
    console.log("Fetching shopping cart data...");
    fetch(`${path}api/shoppingcart/by_user/${userId}`)
      .then((res) => res.json())
      .then((shoppingCartData) => {

        // Fetch item data
        fetch(`${path}api/item/by_shopping_cart/${shoppingCartData.id}`)
          .then((res) => res.json())
          .then((itemData) => {
            setCartItems(itemData);
          });
      });
  }, [resetCosts]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '10%' }}></div>
      <div style={{ width: '70%' }}>
        <Container className="d-flex align-items-center justify-content-center">
          <div>
            {cartItems.map((item) => (
              <ShoppingCartCard key={item.id} item={item} resetCheckout={resetCheckout}/>
            ))}
          </div>
        </Container>
      </div>
      <div style={{ width: '20%' }}>
        <Checkout cartItems={cartItems} />
      </div>
    </div>
  );
};

export default ShoppingCartList;
