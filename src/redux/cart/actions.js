import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({ // Recebendo o produto que queremos add
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload) => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseProductQuantity = (payload) => ({
  type: CartActionTypes.DECREA_PRODUCT_QUANTITY,
  payload,
});