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
      console.log(action);
      const data = state.data.forEach((item: any, index: number) => {
        if (index === action.productAmountChange.index) {
          item.amount = action.productAmountChange.amount;
        }
      });
      return { ...state, data };
    default:
      return state;
  }
};

console.log(cart);

const store = createStore(cart);

export default store;
