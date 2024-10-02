import { Cart } from "../../../services/cart/cart"


export const addToCart = (id) => {
    Cart.instance.addItem(id);
    alert("Produkt zum Warenkorb hinzugefügt");
    window.location.href="/cart";
}