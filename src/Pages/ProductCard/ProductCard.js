import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../../Redux/Store/productActions";
import { AiFillDelete } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900">
      {pathname.includes("cart") && (
        <div className="indicator top-2 left-60">
          <span className="indicator-item badge w-6 h-6 bg-indigo-500">
            {product.quantity}
          </span>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, i) => {
            return (
              <li className="text-sm " key={i}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            className="bg-red-500 rounded-full py-1 px-3 flex w-full text-white text-bold justify-between items-center "
            onClick={() => dispatch(removeFromCart(product))}
          >
            <p className="font-semibold">Remove From Cart</p>
            <AiFillDelete size={25}></AiFillDelete>
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
