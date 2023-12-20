<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductSummary from "../components/CardComponents/ProductSummary";
import ProductImg from "../components/CardComponents/ProductImg";
import ProductPurchase from "../components/CardComponents/ProductPurchase";
import ProductDetails from "../components/CardComponents/ProductDetails";
=======
import React from 'react'
import { useParams } from 'react-router-dom'
>>>>>>> main

// Details about 1 product

const ProductPage = () => {
<<<<<<< HEAD
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(product);
=======
	const { productId } = useParams();
	console.log(productId)
	return <div>ProductPage: {productId}</div>
}
>>>>>>> main

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://marktplaatsbackend.azurewebsites.net/api/product/1`
        );
        const productResponse = await response.json();
        setProduct(productResponse);
      } catch (error) {
        setProduct("Product is not available.");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Productdetails</h1>
      <Row>
        <Col lg={4}>
          <ProductImg />
        </Col>
        <Col lg={4}>{product && <ProductSummary product={product} />}</Col>
        <Col lg={4}>
          <ProductPurchase />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>{product && <ProductDetails product={product} />}</Col>
      </Row>
    </Container>
  );
};
export default ProductPage;
