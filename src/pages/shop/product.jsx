import React, { useContext } from "react";

export const Product = (props) => {
  const { id, name, price, imageUrl } = props.data;

  return (
    <div className="product">
      <img src={imageUrl} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> £{price}</p>
      </div>
      <button className="addToCartBttn">
        Add To Cart
      </button>
    </div>
  );
};