import React from "react";
import bandsData from "../../products/bandData.json";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const { bands } = bandsData
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {bands.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};