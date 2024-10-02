import { useEffect, useState } from "react";
import { getBrandLogo } from "../../functions/getBrandImage";
import "./logocard.styles.css";
import { onBrandCardClick } from "../functions/onBrandCardClick";
export const BrandCard = (props) => {
    const [image, setImage] = useState(props.brand.logo);

    useEffect(() => {
        getBrandLogo(image, setImage).catch((err) => console.log(err));
    }, [image, setImage]);

    return (
        <div className="brand-card" onClick={() => onBrandCardClick(props.brand)}>
            <img src={image} alt="brand"/>
            <p>{props.brand.name}</p>
        </div>
    );
}

