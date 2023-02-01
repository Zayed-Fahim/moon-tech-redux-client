import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  const state = useSelector((state) => state);
  console.log(state);
  let content;
  if (products.length === 0) {
    content = (
      <h1 className="lg:text-3xl font-bold lg:absolute lg:container lg:left-[40%]">
        Ops!Noting to show here.
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products && products.length ? (
        <>
          {products.map((product, i) => (
            <ProductCard product={product} key={i}></ProductCard>
          ))}
        </>
      ) : (
        <>{content}</>
      )}
    </div>
  );
};

export default Home;
