import { addDoc, Firestore } from "firebase/firestore"
import { database } from "../../../configuration"

export const buyCart = () => {
    const querySnapshot = addDoc(collection(database, "cart"), {
        items: Cart.instance.getItems(),
        
    });
}