import {Cart} from '../../services/cart/cart';
import { useState } from 'react';

export const CartPage = () => {

    const [cart, setCart] = useState(Cart.instance.items);
    console.log(Cart.instance.items);
    return (
        <div className="cart-page">
            <h1>Warenkorb</h1>

            <div className="cart">
                {cart.map((item) => (
                    <div className="cart-item">
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}