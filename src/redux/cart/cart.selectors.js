export const selectProductsCout = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
};

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity, //pegando o preço e multiplicando pela quantidade e adicionar no total
    0
  );
};

//Se um dado e variado de outro dado deve ser feito em um outro arquivo iniciando o nome da função com select https://redux.js.org/usage/deriving-data-selectors