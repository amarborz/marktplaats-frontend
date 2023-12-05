import React from "react";

import { Card } from "react-bootstrap";

const ProductSummary = () => {
  return (
    <Card style={{ maxWidth: "50rem" }} className="border-0">
      <Card.Body className="p-5">
        <Card.Subtitle>
          <b>
            Lenovo Ideapad Gaming 3 15.6" FHD Laptop R5-7535HS RTX 2050 8GB RAM
            512GB SSD
          </b>
        </Card.Subtitle>
        <br></br>
        <Card.Text>
          The Lenovo Ideapad Gaming 3 15.6" FHD Laptop with the AMD Ryzen 5
          7535HS processor, NVIDIA GeForce RTX 2050 graphics, 8GB RAM, and a
          generous 512GB SSD offers a compelling package for gamers and users
          seeking a powerful and versatile laptop. The combination of a
          high-resolution display, potent graphics card, and ample storage make
          it suitable for gaming, content creation, and productivity tasks. It
          represents a balanced choice for those looking for a capable and
          affordable gaming laptop.
        </Card.Text>
        <Card.Text>$489.99</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductSummary;
