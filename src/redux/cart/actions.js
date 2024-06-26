import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({ // Recebendo o produto que queremos add
  type: CartActionTypes.ADD_PRODUCT,
  payload,
})