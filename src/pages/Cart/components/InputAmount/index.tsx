import React from "react";

import InputNumber from "react-input-number";
import Styles from "./styles";

interface IProduct {
  id?: number;
  name?: string;
  price?: number;
  amount: number;
  description?: string;
  image?: string;
}

interface INumber {
  product: IProduct;
  onClickAdd: any;
  onClickReduce: any;
}
/* onClick={() => countAmountProduct("Reduce", product)}
        onClick={() => countAmountProduct("Add", product)} */
const InputAmount = (props: INumber) => {
  const classes = Styles();
  return (
    <>
      <button
        type="button"
        className={classes.inputNumberButtons}
        onClick={props.onClickReduce}
      >
        -
      </button>
      <InputNumber
        className={classes.inputNumber}
        min={1}
        max={30}
        step={1}
        value={props.product.amount}
        readOnly
      />
      <button
        type="button"
        className={classes.inputNumberButtons}
        onClick={props.onClickAdd}
      >
        +
      </button>
    </>
  );
};

export default InputAmount;
