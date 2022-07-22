import { localdata,savedata } from "../../utils/localStorage";
import {
  ADD_TO_CART,
  DEC_QTY,
  GET_CART_DATA,
  INC_QTY,
  REM_ALL,
  REM_ONE,
} from "./CartActions";

export const initstate = {
  cartdata: localdata("cart")||[]
};
export const cartReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_CART_DATA: {
      return state;
    }
    case INC_QTY: {
      return {
        ...state,
        cartdata: state.cartdata.filter((elem) =>
          elem.id === payload ? elem.qty++ : elem.qty
        ),
      };
    }
    case DEC_QTY: {
      return {
        ...state,
        cartdata: state.cartdata.filter((elem) =>
          elem.id === payload ? elem.qty-- : elem.qty
        ),
      };
    }
    case REM_ONE: {
      return {
        ...state,
        cartdata: state.cartdata.filter((elem) => elem.id !== payload),
      };
    }
    case REM_ALL: {
      return {
        ...state,
        cartdata: [],
      };
    }
    case ADD_TO_CART: {
      const updateCart = [...state.cartdata,payload];
      savedata("cart",updateCart)
      return {
        ...state,
        cartdata: updateCart,
      };
    }
    default:
      return state;
  }
};