import {
  GETSINGLE_DATA_FAILURE,
  GETSINGLE_DATA_REQUEST,
  GETSINGLE_DATA_SUCCESS,
  GET_BAGDATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./type";

const init = {
  data: [],
  isLoading: false,
  isError: false,
  singleData: {},
  bag: [],
};

export const appReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GETSINGLE_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GETSINGLE_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        singleData: payload,
      };
    }
    case GETSINGLE_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_BAGDATA_SUCCESS: {
      return {
        ...state,
        bag: payload,
      };
    }
    default: {
      return state;
    }
  }
};
