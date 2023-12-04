import React from "react";

import { Card } from "react-bootstrap";

const ProductSummary = () => {
  return (
    <Card style={{ maxWidth: "14rem" }} className="border-0">
      <Card.Body className="p-5">
        <Card.Subtitle>
          Lenovo Ideapad Gaming 3 15.6" FHD Laptop R5-7535HS RTX 2050 8GB RAM
          512GB SSD
        </Card.Subtitle>
        <Card.Text> Dit is een voorbeeld</Card.Text>
        <Card.Text>$489.99</Card.Text>
      </Card.Body>
    </Card>
  );
};

ProductSummary;
