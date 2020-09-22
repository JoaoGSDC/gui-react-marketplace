import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import Product from "../../components/Product";

import Styles from "./styles";

import { FaSearch } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import ninjaImg from "../../assets/images/ninja.png";

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
  description: string;
}

const Home = () => {
  const classes = Styles();

  const productsCart: IProduct[] = useSelector((state) => state.data);
  const dispatch: any = useDispatch();

  const history = useHistory();

  const url: string = "http://localhost:3001/products";

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProductsValue();
  }, []);

  function setProductsValue(): void {
    axios.get<IProduct[]>(url).then((res) => {
      setProducts(res.data);
    });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const searchUrl: string =
      isNaN(Number(event.target.value)) || event.target.value === ""
        ? `${url}?q=${event.target.value}`
        : `${url}?id=${event.target.value}`;

    axios.get<IProduct[]>(searchUrl).then((res) => {
      setProducts(res.data);
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
    <div className={classes.home}>
      <div className={classes.imgs}>
        <img className={classes.imgsNinja} src={ninjaImg} alt="ninja" />
        <img className={classes.imgsLogo} src={logo} alt="logo" />
      </div>

      <div className={classes.searchContainer}>
        <input
          type="text"
          className={classes.inputWidth}
          placeholder="Pesquisar..."
          onChange={handleInputChange}
        />
        <FaSearch size="40" />
      </div>

      <div className={classes.productsContainer}>
        {products.map((product: IProduct) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onClick={() => addProductToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
