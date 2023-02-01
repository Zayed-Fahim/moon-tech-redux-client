import { actionTypes } from "../../ActionTypes/ActionTypes";

const initialState = {
  cart: [],
};
const productReducer = (state = initialState, action) => {
  const selectedItem = state.cart.find(
    (product) => product.id === action.payload.id
  );
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (selectedItem) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedItem.id
        );
        selectedItem.quantity = selectedItem.quantity + 1;
        return {
          ...state,
          cart: [...newCart, selectedItem],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      if (selectedItem.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedItem.id
        );
        selectedItem.quantity = selectedItem.quantity - 1;
        return {
          ...state,
          cart: [...newCart, selectedItem],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default productReducer;
