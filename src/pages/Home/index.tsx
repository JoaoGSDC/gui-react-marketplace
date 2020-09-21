import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Product from "../../components/Product";

import "./styles.css";

import { FaSearch } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import ninjaImg from "../../assets/images/ninja.png";

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Home = () => {
  const productsCart: IProduct[] = useSelector((state) => state.data);
  const dispatch: any = useDispatch();

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
      isNaN(Number(event.target.value)) || event.target.value === ''
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

    dispatch({ type: "ADD_PRODUCT", product });
  }

  return (
    <div className="home">
      <div className="imgs">
        <img className="imgs-ninja" src={ninjaImg} alt="ninja" />
        <img className="imgs-logo" src={logo} alt="logo" />
      </div>

      <div className="search-container">
        <input
          type="text"
          className="input-width"
          placeholder="Pesquisar..."
          onChange={handleInputChange}
        />
        <FaSearch size="40" />
      </div>

      <div className="products-container">
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
