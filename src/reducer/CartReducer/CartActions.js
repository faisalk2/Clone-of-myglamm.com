export const GET_CART_DATA = "GET_CART_DATA";
export const INC_QTY = "INC_QTY";
export const DEC_QTY = "DEC_QTY";
export const REM_ONE = "REM_ONE";
export const REM_ALL = "REM_ALL";
export const ADD_TO_CART = "ADD_TO_CART";

export const getCartData = (cartData) => {
  const payload = JSON.parse(localStorage.getItem(cartData));
  return {
    type: GET_CART_DATA,
    payload,
  };
};

export const IncQty = (payload) => {
  return {
    type: INC_QTY,
    payload,
  };
};

export const DecQty = (payload) => {
  return {
    type: DEC_QTY,
    payload,
  };
};

export const RemoveOne = (payload) => {
  return {
    type: REM_ONE,
    payload,
  };
};

export const RemoveAll = (payload) => {
  return {
    type: REM_ALL,
    payload,
  };
};

export const addToCart =(payload)=>{
  return {
    type: ADD_TO_CART,
    payload,
  };
}
