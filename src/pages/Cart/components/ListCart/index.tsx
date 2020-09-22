import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

import InputAmount from "../InputAmount";

import Styles from "../../styles";

interface IProduct {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;
  image: string;
}

interface IListCart {
  product: IProduct;
  products: IProduct[];
}

const ListCart = (props: IListCart) => {
  const classes = Styles();

  const dispatch: any = useDispatch();
  const [amountProduct, setAmountProduct] = useState<number>(1);

  function deleteProductFromCart(product: IProduct): void {
    let i = props.products.indexOf(product);

    props.products.splice(i, 1);
    dispatch({ type: "DELETE_PRODUCT", i });
  }

  function countAmountProduct(action: string, product: IProduct): void {
    let amountValue: number = product.amount;

    const amount = {
      Add() {
        return amountValue >= 30 ? amountValue : amountValue + 1;
      },

      Reduce() {
        return amountValue <= 1 ? amountValue : amountValue - 1;
      },
    };

    product.amount = amount[action]();
    dispatch({ type: "UPDATE_AMOUNT_PRODUCT", product });

    setAmountProduct(product.amount);
  }

  return (
    <div className={classes.productItem} key={props.product.id}>
      <label className={classes.containerImg}>
        <img
          className={classes.productImg}
          src={props.product.image}
          alt="product"
        />
        <div className={classes.containerFields}>
          <label className={classes.productName}>
            {props.product.name}
            <label onClick={() => deleteProductFromCart(props.product)}>
              <FaTrash className={classes.svg} size="16" />
            </label>
          </label>
          <div>
            <InputAmount
              product={props.product}
              onClickAdd={() => countAmountProduct("Add", props.product)}
              onClickReduce={() => countAmountProduct("Reduce", props.product)}
            />
          </div>
        </div>
      </label>
      <label className={classes.textPrice}>
        R$ {props.product.price.toFixed(2).toString().replace(".", ",")}
      </label>
    </div>
  );
};

export default ListCart;
