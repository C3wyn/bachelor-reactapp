import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { database } from "../../../configuration";

export const getPhonesByBrand = (brand, setPhones) => {
    if(!brand) {

    }

    const querySnapshot = getDocs(query(collection(database, "smartphones"), brand? where("brand", "==", brand): []));
    querySnapshot.then((querySnapshot) => {
        const phones = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            phones.push(data);
        });
        setPhones(phones);
    });
}