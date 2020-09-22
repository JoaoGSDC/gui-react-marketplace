import React from "react";
import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";

import Styles from "./styles";
import ListCart from "./components/ListCart";

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
        <ListCart product={product} products={products} />
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
