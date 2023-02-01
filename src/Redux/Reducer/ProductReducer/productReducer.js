import { actionTypes } from "../../ActionTypes/ActionTypes";

const initialState = {
  cart: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
export default productReducer;