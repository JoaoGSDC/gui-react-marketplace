import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import InputNumber from "react-input-number";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

import Styles from "./styles";

interface IProduct {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;
  image: string;
}

const Cart = () => {
  const classes = Styles();

  const products = useSelector((state: any) => state.data);
  const dispatch: any = useDispatch();

  const [amountProduct, setAmountProduct] = useState<number>(1);

  function deleteProductFromCart(product: IProduct): void {
    let i = products.indexOf(product);

    products.splice(i, 1);
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

  function getProductsList(): any {
    if (products.length === 0) {
      return (
        <label className={classes.textCart}>
          <FaShoppingCart className={classes.svg} size="40" />
          Nenhum produto adicionado ao carrinho.
        </label>
      );
    } else {
      return products.map((product: IProduct) => (
        <div className={classes.productItem} key={product.id}>
          <label className={classes.containerImg}>
            <img
              className={classes.productImg}
              src={product.image}
              alt="product"
            />
            <div className={classes.containerFields}>
              <label className={classes.productName}>
                {product.name}
                <label onClick={() => deleteProductFromCart(product)}>
                  <FaTrash className={classes.svg} size="16" />
                </label>
              </label>
              <div>
                <button
                  type="button"
                  className={classes.inputNumberButtons}
                  onClick={() => countAmountProduct("Reduce", product)}
                >
                  -
                </button>
                <InputNumber
                  className={classes.inputNumber}
                  min={1}
                  max={30}
                  step={1}
                  value={product.amount}
                  readOnly
                />
                <button
                  type="button"
                  className={classes.inputNumberButtons}
                  onClick={() => countAmountProduct("Add", product)}
                >
                  +
                </button>
              </div>
            </div>
          </label>
          <label className={classes.textPrice}>
            R$ {product.price.toFixed(2).toString().replace(".", ",")}
          </label>
        </div>
      ));
    }
  }

  return (
    <>
      <div className={classes.cardCart}>{getProductsList()}</div>
    </>
  );
};

export default Cart;
