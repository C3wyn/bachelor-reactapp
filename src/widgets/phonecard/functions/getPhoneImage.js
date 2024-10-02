import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../configuration";

export const getPhoneImage = async (imageName, setImageUrl) => {
    const reference = ref(storage, `phones/${imageName}.png`);
    const url = await getDownloadURL(reference);
    setImageUrl(url);
}