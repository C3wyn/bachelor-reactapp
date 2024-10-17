import { addDoc, collection, query } from "firebase/firestore";
import { database } from "../../../configuration";
import { Cart } from "../../../services/cart/cart";

export const submitCart = async (cart) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    
    const ref = collection(database, "orders");
    const querySnapshot = await addDoc(ref, {
        name: name,
        email: email,
        address: address,
        items: cart
    });
    Cart.instance.clear();
    alert('Danke für die Bestellung');
    window.location.href = '/';
      
}