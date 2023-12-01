import ListGroup from "react-bootstrap/ListGroup";

function HorizontalResponsiveExample() {
  return (
    <>
      {["sm", "md", "lg", "xl", "xxl"].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
          <ListGroup.Item>Product image</ListGroup.Item>
          <ListGroup.Item>Product eigenschappen</ListGroup.Item>
          <ListGroup.Item>Prijs {breakpoint}</ListGroup.Item>
          <ListGroup.Item>Winkelwagen functie</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default HorizontalResponsiveExample;
