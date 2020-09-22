import { createStore } from "redux";

const INITIAL_STATE = {
  data: [],
};

const cart = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, data: [...state.data, action.product] };

    case "DELETE_PRODUCT":
      return {
        ...state,
        data: state.data.filter(
          (item: any, index: number) => index !== action.product
        ),
      };

    case "UPDATE_AMOUNT_PRODUCT":
      state.data.map((item: any) => {
        if (item.id === action.product.id) {
          item = action.product;
        }
      });

      return { ...state, data: state.data };

    case "CLEAR_CART":
      state.data = [];
      return { ...state, data: state.data };

    default:
      return state;
  }
};

const store = createStore(cart);

export default store;
