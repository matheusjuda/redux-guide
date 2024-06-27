const CartActionTypes = {
  ADD_PRODUCT: 'cart/addProduct',// quando for despachada qeremos adicionar um produto ao cart reducer
  REMOVE_PRODUCT: "cart/removeProduct", // Remover produto do carrinho
  INCREASE_PRODUCT_QUANTITY: "cart/increaseProductQuantity", // somar mais um produto
  DECREA_PRODUCT_QUANTITY: "cart/decreaseProductQuantity" //Diminuir um produto 
};

export default CartActionTypes;