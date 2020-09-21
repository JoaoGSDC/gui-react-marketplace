import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import axios from "axios";

import "./styles.css";

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Details = () => {
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

    dispatch({ type: "ADD_PRODUCT", product });

    history.push("/cart");
  }

  return (
    <div className="details">
      {product.map((product: IProduct) => (
        <>
          <div className="name-product-mobile">
            <label>{product.name}</label>
          </div>
          <div className="container-details">
            <div className="container-img-details">
              <img className="img-height" src={product.image} alt="produto" />
            </div>
            <div className="container-description">
              <div className="name-product">
                <label>{product.name}</label>
              </div>
              <div className="container-price">
                <label className="price">
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
