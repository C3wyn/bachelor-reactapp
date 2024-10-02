import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { database } from "../../../../../configuration";

export const getTenCheapestPhones = async (setPhones) => {
    const phones = [];
    const querySnapshot = await getDocs(query(collection(database, "smartphones"), orderBy("price", "asc"), limit(10)));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        phones.push(data);
    });
    setPhones(phones);
};