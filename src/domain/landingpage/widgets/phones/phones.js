import { useState, useEffect } from "react";
import { getTenCheapestPhones } from "./functions/getTenCheapestPhones";
import { PhoneCard } from "../../../../widgets/phonecard/phonecard";
import "./phones.styles.css";
import "../../../../styles/texts.css";
export const Phones = () => {

    const [phones, setPhones] = useState([]);

    //Use Effect to get the phones
    useEffect(() => {
        getTenCheapestPhones(setPhones);
    }, [setPhones]);

    return (
        <div className="phones">
            <h1 className="title-medium">Beste Preise</h1>
            <ul id="ten-cheapest-phones" className="">
                {phones.map((phone) => (
                    <li><PhoneCard key={phone.id} phone={phone} /></li>
                ))}
            </ul>
        </div>
    );
}