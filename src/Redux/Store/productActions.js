import { actionTypes } from "../ActionTypes/ActionTypes";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};
