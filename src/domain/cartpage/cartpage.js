import {Cart} from '../../services/cart/cart';
import { useEffect, useState } from 'react';
import { CartItem } from './widgets/cartitem/cartitem';
import { getHandysById } from './functions/getHandysById';
import './cartpage.styles.css';
import { getTotal } from './functions/getTotal';
import { submitCart } from './functions/submitCart';

export const CartPage = () => {

    const [cart, setCart] = useState(Cart.instance.items);
    
    useEffect(() => {
        const ids = Cart.instance.getItems();
        if(ids.length === 0) {
            return;
        }

        getHandysById(ids, setCart);
    }, [setCart]);

    return (
        <div className="cart-page">
            <div className="left-column">
                <h1>Warenkorb</h1>
                <div className="cart">
                    { 
                        cart.length === 0? 
                        <p>Der Warenkorb ist leer</p>:
                        <>
                            {cart.map((item) => (
                                <CartItem key={item} item={item} />
                            ))}
                            <div className="buttons">
                                <p className="total">Gesamt: <b>{getTotal(cart)},00€</b></p>
                                
                            </div>
                        </>
                    }
                </div>
            </div>
            <div>
                <h1>Checkout</h1>
                <div>
                    <div id="checkout-form" >
                        <input placeholder='Name' type="text" name="name" id="name" />
                        <input placeholder='Email' type="email" name="email" id="email" /> 
                        <input placeholder='Anschrift' type="text" name="address" id="address" />
                        
                        <button type="submit" className="button filled"
                            onClick={() => submitCart(cart)}
                        >Kostenpflichtig erwerben</button>
                    </div>
                </div>
            </div>
        </div>
    )
}