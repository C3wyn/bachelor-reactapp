import { useEffect, useState } from "react";
import { getPhoneImage } from "../../widgets/phonecard/functions/getPhoneImage";
import { useParams } from "react-router-dom";
import { getPhoneData } from "./functions/getPhoneData";
import './detailspage.styles.css';
import { Divider } from "./widgets/divider/divider";
import { DetailsCard } from "./widgets/detailscard/detailscard";
import { addToCart } from "./functions/addToCart";
export const DetailsPage = () => {
    const [phone, setPhone] = useState({});
    const [image, setImage] = useState();
    const { id } = useParams();
    const dimensions = `${phone.width} x ${phone.height} x ${phone.thickness}`;

    useEffect(() => {
        getPhoneData(id, setPhone).then((data) => {
            getPhoneImage(data.image, setImage);
        });

    }, [id, setPhone, setImage]);

    return (
        <div className="details-page">
            <div className="phone">
                <img src={image} alt="image" />
                <div className="content">
                    <p className="text-small text-secondary">{phone.brand}</p>
                    <p className="title-small">{phone.model}</p>
                    <p className="text-small">{phone.codename}</p>
                    <Divider />
                    <DetailsCard title="Preis" text={phone.price+",00€"} />     
                    <Divider text="Physischen Informationen" />
                    <div className="row">
                        <DetailsCard title="Maße" text={dimensions} />
                        <DetailsCard title="Gewicht" text={phone.weight} />
                    </div>
                    <Divider text="CPU"/>
                    <div className="column">
                        <DetailsCard title="CPU" text={phone.cpu} />
                        <DetailsCard title="CPU Rate" text={phone.cpu_clock}/>
                    </div>
                    
                    <Divider text="RAM"/>
                    <div className="row">
                        <DetailsCard title="RAM" text={phone.ram} />
                        <DetailsCard title="RAM Rate" text={phone.ram_capacity} />
                    </div>
                    <Divider text="Bildschirm"/>
                    <div className="column">
                        <div className="row">
                            <DetailsCard title="Diagonale" text={phone.diagonal} />
                            <DetailsCard title="Auflösung" text={phone.resolution} />
                        </div>
                        <div className="row">
                            <DetailsCard title="Bildschirm Rate" text={phone.refreshrate} />
                            <DetailsCard title="Pixel Dichte" text={phone.ppi} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="actions">
                <button className="button text">Zurück</button>
                <button className="button filled" onClick={() => addToCart(phone.id) }>Warenkorb hinzufügen</button>
            </div>
        </div>
    );
}