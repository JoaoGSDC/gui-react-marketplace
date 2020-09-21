import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;

  onClick: any;
}

const Product = (props: IProduct) => {
  return (
    <div className="product">
      <div className="card">
        <Link to={`/details/${props.id}`}>
          <img className="img-size" src={props.image} />
        </Link>
        <Link className="text-link" to={`/details/${props.id}`}>
          <label className="product-text">{props.name}</label>
        </Link>
        <label className="product-text">
          R$ {props.price.toFixed(2).toString().replace(".", ",")}
        </label>
        <button onClick={props.onClick}>Comprar</button>
      </div>
    </div>
  );
};

export default Product;
