import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { database } from "../../../../../configuration";

export const getBrands = async (setBrands) => {
    const brands = [];
    const brandsCollection = collection(database, "brands");
    const order = orderBy("name", "asc");
    const brandsQuery = query(brandsCollection, order);
    const querySnapshot = await getDocs(brandsQuery);
    querySnapshot.forEach((doc) => {
        brands.push(doc.data());
    });
    setBrands(brands);
}



