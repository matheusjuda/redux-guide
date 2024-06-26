import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {// fazendo o payload do produto clicado
    case CartActionTypes.ADD_PRODUCT:
      // Verificando se produto está no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      //Se produto estiver, aumentar sua quantidade em 1 
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product)
        }
      };

      //Se ele não estiver, adicioná-lo
      return {
        ...state, products: [...state.products, { ...action.payload, quantity: 1 }]
      };

    default:
      return state; //sempre por fim retornar ao state
  }
}

export default cartReducer