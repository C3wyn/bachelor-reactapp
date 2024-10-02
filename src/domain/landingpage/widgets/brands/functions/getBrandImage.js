import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../../../configuration";

export const getBrandLogo = async (imageName, setImageUrl) => {
    const reference = ref(storage, `logos/${imageName}`);
    const url = await getDownloadURL(reference);
    setImageUrl(url);
};

