import React from "react";

import laptop from "../../utils/images/laptop.jpg";

import { Card } from "react-bootstrap";

const ProductImg = () => {
  return (
    <Card style={{ maxWidth: "14rem" }} className="border-0">
      <Card.Img variant="top" src={laptop} className="bg-secondary" />\
    </Card>
  );
};

export default ProductImg;
