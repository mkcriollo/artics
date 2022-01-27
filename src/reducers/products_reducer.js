import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

/* 
TO-DO:
- figure out what the actions are doing
- after step 1 figure out how to change initial state to reflect that action
*/

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return;
    case SIDEBAR_CLOSE:
      return;
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      return;
    case GET_SINGLE_PRODUCT_BEGIN:
      return;
    case GET_SINGLE_PRODUCT_SUCCESS:
      return;
    case GET_SINGLE_PRODUCT_ERROR:
      return;
    default:
      // return state
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
