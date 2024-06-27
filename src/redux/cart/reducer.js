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

    // Removendo produto
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state, //Pegando todos os produtos q tem o id diferente doque estamos recebendo 
        products: state.products.filter(product => product.id != action.payload)
      };

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state, // verificar se o id do produto atual é igual do produto que estamos recebendo vamos aumentar a quantidade dele
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product)
      };

    case CartActionTypes.DECREA_PRODUCT_QUANTITY:
      return {
        ...state, // verificar se o id do produto atual é igual do produto que estamos recebendo vamos diminuir a quantidade dele
        products: state.products
          .map(product =>
            product.id === action.payload // payload é o id do produto
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ).filter((product) => product.quantity > 0), //Deixar somente os produtos que for maior que 0
      };

    default:
      return state; //sempre por fim retornar ao state
  }
}

export default cartReducer