import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ProductsPageCard from '../ProductsPageCard/ProductsPageCard';

const path = 'http://localhost:8080/'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const products = [
  //   { id: 1, name: 'Product 1', price: '$100' },
  //   { id: 2, name: 'Product 2', price: '$150' },
  //   { id: 3, name: 'Product 2', price: '$150' },
  //   { id: 4, name: 'Product 2', price: '$150' },
  //   { id: 5, name: 'Product 2', price: '$150' },
  //   { id: 6, name: 'Product 2', price: '$150' },
  // ];

  useEffect(() => {
    fetch(`${path}api/product`)
      .then((res) => {return res.json()})
      .then((data) => {
        setProducts(data)
        console.log(data)
      })
    
  }, [])

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div>
        {products.map((product) => (
          
          <ProductsPageCard key = {product.id} product = {product}/>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
