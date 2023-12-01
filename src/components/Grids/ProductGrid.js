import React from "react";
import LaptopsBtn from "../Buttons/Laptops button";

function ProductGrid() {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.product}>{afbeelding}</div>
      <div className={classes.product}>
        <LaptopsBtn txt={btnTitle}></LaptopsBtn>
      </div>
    </div>
  );
}

export default ProductGrid;
