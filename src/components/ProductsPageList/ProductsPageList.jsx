import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ProductsPageCard from '../ProductsPageCard/ProductsPageCard';

import settings from '../../Settings'

const path = settings.path
const userId = settings.userId

const ProductList = ({searchName}) => {
  const [products, setProducts] = useState([]);
  console.log("searching for1: ", searchName)
  console.log("searching for2: ", searchName)
  console.log(`${path}api${searchName}`)

  useEffect(() => {
    // Fetch user's shopping cart data
    fetch(`${path}api/shoppingcart/by_user/${userId}`)
      .then((res) => res.json())
      .then((shoppingCartData) => {

        // Fetch item data
        fetch(`${path}api/item/by_shopping_cart/${shoppingCartData.id}`)
          .then((res) => res.json())
          .then((itemData) => {
            console.log(`${path}api${searchName}`)
            // Fetch products data
            fetch(`${path}api${searchName}`)
              .then((res) => res.json())
              .then((productData) => {
                const updatedProducts = productData.map((product) => {
                  let color = 'rgb(255, 255, 0)'
                  for (let i = 0; i < itemData.length; i++) {
                    
                    if (itemData[i].productId === product.id) {
                      color = 'blue'
                    }
                  }
                  return { ...product, color };
                });

                setProducts(updatedProducts);
              })

          });
      });
  }, );

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div>
        {products.map((product) => (

          <ProductsPageCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
