import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT: // fazendo o payload do produto clicado
      return {
        ...state,
        products: [...state.products, action.payload], // Sempre retornar um objeto
      };

    default:
      return state; //sempre por fim retornar ao state
  }
}

export default cartReducer