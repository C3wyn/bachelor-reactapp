import { Cart } from "../../../services/cart/cart";

export const removePhoneFromCart = (id) => {
    console.log(id);
    Cart.instance.removeItem(id);
    window.location.reload();
}