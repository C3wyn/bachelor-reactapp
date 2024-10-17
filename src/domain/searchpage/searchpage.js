import { useSearchParams } from "react-router-dom";
import { PhoneList } from "./widgets/phonelist/phonelist.widget";

export const SearchPage = () => {
    const [params] = useSearchParams();
    const brand = params.get("brand");

    return (
        <div className="search-page">
            <h1>Suche</h1>
            <PhoneList brand={brand}/>
        </div>
    );
}