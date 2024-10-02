import { useEffect, useState } from "react";
import { getPhoneImage } from "./functions/getPhoneImage";
import "./phonecard.styles.css";
import '../../styles/texts.css';
import '../../styles/buttons.css';
import '../../styles/colors.css';

export const PhoneCard = (props) => {
    const phone = props.phone;
    const [image, setImage] = useState(phone.image);
    useEffect(() => {
        getPhoneImage(image, setImage).catch((err) => console.log(err));
    }, [image, setImage]);
    return (
        <div className="phone-card">
            <img src={image} alt={phone.codename} />
            <p className="title-small">{phone.model}</p>
            <p className="price body-small">für {phone.price},00€</p>
            <button className="button outlined" onClick={() => window.location.href = `/details/${phone.id}`}>Mehr</button>
        </div>
    );
}