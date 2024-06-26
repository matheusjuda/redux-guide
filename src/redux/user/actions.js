import UserActionTypes from "./action-types";

export const loginUser = (payload) => ({ //Boa pratica Escrever funções em um arquivo separado 
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
