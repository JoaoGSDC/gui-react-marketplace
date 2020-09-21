import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';

import './styles.css';

const Header = () => {
    return (
        <nav>
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
            <Link className="cart" to="/cart"><FaShoppingCart size="40" /><label className="cart-text">Carrinho</label></Link>
        </nav>
    );
}

export default Header;