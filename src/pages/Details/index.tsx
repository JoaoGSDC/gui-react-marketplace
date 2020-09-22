import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Styles from "./styles";

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
  description: string;
}

const Details = () => {
  const classes = Styles();

  const productsCart: IProduct[] = useSelector((state) => state.data);
  const dispatch: any = useDispatch();

  const history = useHistory();

  const [product, setProduct] = useState<IProduct[]>([]);

  const url: string = "http://localhost:3001/products";

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct(): void {
    const idProduct: number = Number(
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ]
    );
    const searchUrl: string = `${url}?id=${idProduct}`;

    axios.get<IProduct[]>(searchUrl).then((res) => {
      setProduct(res.data);
    });
  }

  function addProductToCart(product: IProduct): void {
    if (productsCart.find((p) => p.id === product.id)) {
      return;
    }

    product.amount = 1;
    dispatch({ type: "ADD_PRODUCT", product });

    history.push("/cart");
  }

  return (
    <div className={classes.details}>
      {product.map((product: IProduct) => (
        <>
          <div className={classes.nameProductMobile}>
            <label>{product.name}</label>
          </div>
          <div className={classes.containerDetails}>
            <div className={classes.containerImgDetails}>
              <img
                className={classes.imgHeight}
                src={product.image}
                alt="produto"
              />
            </div>
            <div className={classes.containerDescription}>
              <div className={classes.nameProduct}>
                <label>{product.name}</label>
              </div>
              <div className={classes.containerPrice}>
                <label className={classes.price}>
                  R$ {product.price.toFixed(2).toString().replace(".", ",")}
                </label>
                <button type="button" onClick={() => addProductToCart(product)}>
                  Comprar
                </button>
              </div>
              <label>{product.description}</label>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Details;
