import React, { useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import './styles.css';

interface IProduct {
    id: number;
    name: string;
    price: number;
    amount: number;
    description: string;
    image: string;
};

const Cart = () => {
    const products = useSelector(state => state.data);
    const dispatch: any = useDispatch();

    const [amountProduct, setAmountProduct] = useState<number>(0);

    let productAmount: number = 0;

    function getProductsList(): any {
        if (products.length === 0) {
            return <label className="text-cart"><FaShoppingCart size="40" />Nenhum produto adicionado ao carrinho.</label>
        } else {
            return products.map((product: IProduct) => 
                <div className="product-item" key={product.id}>
                    <label className="container-img">
                        <img className="product-img" src={product.image} />
                        <div className="container-fields">
                            <label className="product-name">
                                {product.name}
                                <label onClick={() => deleteProductFromCart(product)}><FaTrash size="16" /></label>
                            </label>
                            <input className="amount-input" type="number" onChange={handleInputChange} />
                        </div>
                    </label>
                    <label>R$ {product.price.toFixed(2).toString().replace(".", ",")}</label>
                </div>
            );
        }
    }

    function deleteProductFromCart(product: IProduct): void {
        let i = products.indexOf(product);

        products.splice(i, 1);
        dispatch({ type: 'DELETE_PRODUCT', i });
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        const productAmountChange: Object = {
            amount: Number(event.target.value),
            // index: products.findIndex((p: IProduct) => p.id === product.id),
            index: 0,
        }

        console.log(productAmountChange);
        dispatch({ type: 'UPDATE_AMOUNT_PRODUCT', productAmountChange });
    }

    return (
        <> <div className="card-cart">{getProductsList()}</div> </>
    );
}

export default Cart;