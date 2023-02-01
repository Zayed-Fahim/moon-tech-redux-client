import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {cart?.cart
        .sort((a, b) => a.id - b.id)
        .map((product, i) => (
          <ProductCard key={i} product={product}></ProductCard>
        ))}
    </div>
  );
};

export default Cart;
