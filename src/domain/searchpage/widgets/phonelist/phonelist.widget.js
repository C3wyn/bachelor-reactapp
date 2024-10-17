import { useEffect, useState } from "react";
import { getPhonesByBrand } from "../../functions/getPhonesByBrand";
import { useSearchParams } from "react-router-dom";
import { PhoneCard } from "../../../../widgets/phonecard/phonecard";
import './phonelist.styles.css';

export const PhoneList = (props) => {
    const { brand } = props;

    const [phones, setPhones] = useState([]);
    
    useEffect(() => {
        getPhonesByBrand(brand, setPhones);
    }, [setPhones]);
    return (
        <div className="phone-list">
            {phones.map((phone) => (
                <PhoneCard phone={phone} />
            ))}
        </div>
    );
}