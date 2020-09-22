import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import logo from "../../assets/images/logo.png";

import Styles from "./styles";

const Header = () => {
  const classes = Styles();
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>
      <Link className={classes.cart} to="/cart">
        <FaShoppingCart className={classes.svg} size="40" />
        <label className={classes.cartText}>Carrinho</label>
      </Link>
    </nav>
  );
};

export default Header;
