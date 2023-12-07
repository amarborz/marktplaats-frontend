import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductSummary from "../components/CardComponents/ProductSummary";
import ProductImg from "../components/CardComponents/ProductImg";
import ProductDetails from "../components/CardComponents/ProductDetails";
import ProductPurchase from "../components/CardComponents/ProductPurchase";

// Details about 1 product

const ProductPage = () => {
  return (
    <Container>
      <h1 className="my-4">Productdetails</h1>
      <Row>
        <Col lg={4}>
          <ProductImg />
        </Col>
        <Col lg={4}>
          <ProductSummary />
        </Col>
        <Col lg={4}>
          <ProductPurchase />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ProductDetails />
        </Col>
      </Row>
    </Container>
  );
};
export default ProductPage;
