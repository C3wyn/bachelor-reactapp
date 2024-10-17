import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../../configuration";

export const getHandysById = async (ids, setPhones) => {
    console.log(ids);
    const querySnapshot = await getDocs(query(collection(database, "smartphones"), where("__name__", "in", ids)));
    
    const data = [];

    querySnapshot.forEach((doc) => {
        const phone = doc.data();
        phone.id = doc.id;
        data.push(phone);
    });
    setPhones(data);
    return data;
};