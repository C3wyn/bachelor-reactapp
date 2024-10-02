import { doc, getDoc } from "firebase/firestore";
import { database } from "../../../configuration";

export const getPhoneData = async (id, setPhoneData) => {
    const querySnapshot = await getDoc(doc(database, "smartphones", id));
    const data = querySnapshot.data();
    data.id = querySnapshot.id;
    setPhoneData(data);
    return data;
}