import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductDetailCard from "../components/ProductDetailCard/ProductDetailCard";

// Details about 1 product

const ProductPage = () => {
  return (
    <Container>
      <h1 className="my-4">Productdetails</h1>
      <Row>
        <Col lg={4}>
          <ProductDetailCard />
        </Col>
        <Col lg={6}>
          {/* Voeg hier andere componenten toe, zoals gerelateerde producten, reviews, etc. */}
        </Col>
      </Row>
    </Container>
  );
};
export default ProductPage;
