import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';
import Checkout from '../Checkout/Checkout'

const ShoppingCartList = () => {
  const userId = localStorage.getItem("id")
  const [cartItems, setCartItems] = useState([]);
  const [resetCount, setResetCount] = useState(0);

  const resetCheckout = () => {
    
    setResetCount((prevCount) => prevCount + 1);
    console.log("in resetCheckout....")
  }

  useEffect(() => {
    // Fetch user's shopping cart data
    console.log("Fetching shopping cart data...");
    fetch(`${process.env.REACT_APP_PATH}api/shoppingcart/by_user/${userId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token"),
        'userId': userId,
        }
    })
      .then((res) => res.json())
      .then((shoppingCartData) => {

        // Fetch item data
        fetch(`${process.env.REACT_APP_PATH}api/item/by_shopping_cart/${shoppingCartData.id}`, {
					method: "GET",
					headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token"),
            'userId': userId,
            }
				})
          .then((res) => res.json())
          .then((itemData) => {
            setCartItems(itemData);
          });
      });
  }, [resetCount, userId]);

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
