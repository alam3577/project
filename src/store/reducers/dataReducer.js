import {
  LOADING_DATA,
  LOADING_DATA_ERROR,
  LOADING_DATA_SUCCESS,
} from "../types/dataTypes";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const dataReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case LOADING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: actions.payload,
      };
    case LOADING_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
