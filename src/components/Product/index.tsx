import React from "react";
import { Link } from "react-router-dom";

import Styles from './styles';

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  amount?: number;
  description?: string;

  onClick: any;
}

const Product = (props: IProduct) => {
  const classes = Styles();

  return (
    <div className={classes.product}>
      <div className={classes.card}>
        <Link to={`/details/${props.id}`}>
          <img className={classes.imgSize} src={props.image} alt="product" />
        </Link>
        <Link className={classes.textLink} to={`/details/${props.id}`}>
          <label className={classes.productText}>{props.name}</label>
        </Link>
        <label className={classes.productText}>
          R$ {props.price.toFixed(2).toString().replace(".", ",")}
        </label>
        <button onClick={props.onClick}>Comprar</button>
      </div>
    </div>
  );
};

export default Product;
