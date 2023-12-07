import React from "react";
import design from "../../utils/images/design.png";
import display from "../../utils/images/Display.jpg";
import additional from "../../utils/images/Additional.png";
import battery from "../../utils/images/Battery.jpg";
import graphics from "../../utils/images/graphics.png";
import memory from "../../utils/images/Memory.png";
import operatingsystem from "../../utils/images/Operating System.png";
import storage from "../../utils/images/Storage.png";
import wifi from "../../utils/images/Wifi.png";
import processor from "../../utils/images/Processor.jpg";

import { Card } from "react-bootstrap";

const ProductDetails = () => {
  return (
    <Card style={{ maxWidth: "80rem" }} className="border-0">
      <Card.Body className="p">
        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={display} className="bg-secondary" />
          <b>Display: </b> The laptop features a 15.6-inch Full HD display,
          ensuring a crisp and vibrant visual experience. The high resolution of
          the display is ideal for gaming, multimedia consumption, and
          productivity tasks.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={processor} className="bg-secondary" />
          <b>Processor: </b>
          Powered by the AMD Ryzen 5 7535HS processor, the Ideapad Gaming 3
          delivers a balance of performance and efficiency. The Ryzen 5 series
          is known for its multitasking capabilities and smooth handling of
          demanding applications.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={graphics} className="bg-secondary" />
          <b>Graphics: </b>
          Equipped with the NVIDIA GeForce RTX 2050 graphics card, the laptop
          provides excellent graphics performance for gaming and content
          creation. The RTX series is renowned for its real-time ray tracing
          capabilities, enhancing visual realism in supported games and
          applications.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={memory} className="bg-secondary" />
          <b>Memory (RAM): </b>
          The laptop comes with 8GB of RAM, allowing for efficient multitasking
          and smooth operation of applications. While 8GB is suitable for many
          tasks, users who engage in heavy multitasking or resource-intensive
          applications may consider upgrading the RAM for even better
          performance.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={storage} className="bg-secondary" />
          <b>Storage: </b>
          The Ideapad Gaming 3 boasts a spacious 512GB SSD, providing fast data
          access and quick system boot times. The SSD not only enhances overall
          system responsiveness but also offers ample storage space for games,
          software, and multimedia files.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={design} className="bg-secondary" />
          <b>Design: </b>
          The laptop features a sleek and gamer-centric design, with attention
          to cooling for optimal performance during extended gaming sessions.
          The 15.6-inch form factor strikes a balance between portability and a
          sufficiently large display for an immersive gaming experience.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={wifi} className="bg-secondary" />
          <b>Connectivity: </b>
          Multiple connectivity options include USB ports, HDMI, and audio jacks
          for versatile connectivity with peripherals and external devices. The
          laptop is likely equipped with Wi-Fi and Bluetooth capabilities for
          wireless connectivity.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img
            variant="top"
            src={operatingsystem}
            className="bg-secondary"
          />
          <b>Operating System: </b>
          The laptop is expected to run on the Windows operating system,
          providing a familiar and user-friendly interface for a wide range of
          applications.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={battery} className="bg-secondary" />
          <b>Battery Life: </b>
          Battery life can vary, but gaming laptops typically have moderate
          battery life due to the demands of high-performance components. Users
          can expect a few hours of usage for standard tasks and less for
          gaming.
        </Card.Text>

        <Card.Text style={{ border: "1px solid #000" }}>
          <Card.Img variant="top" src={additional} className="bg-secondary" />
          <b>Additional Features: </b>
          Backlit keyboard: The laptop may feature a backlit keyboard for
          improved visibility in low-light environments. Webcam: A built-in
          webcam is likely present for video conferencing and online
          communication.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
