import { useEffect, useState } from 'react';
import './cartitem.styles.css';
import { getPhoneImage } from '../../../../widgets/phonecard/functions/getPhoneImage';
import { removePhoneFromCart } from '../../functions/removePhoneFromCart';
export const CartItem = (props) => {
    const { item } = props;
    const [image, setImage] = useState(item.image);



    useEffect(() => {
        getPhoneImage(image, setImage).catch((err) => console.log(err));
    }, [image, setImage]);

    return (
        <div className="cart-item">
            <div className="first-row">
                <img src={image} alt={item.codename} />
                <div>
                    <p className="body-small thin-text">{item.brand}</p>
                    <p className="title-small">{item.model}</p>
                    <p className='body-medium'>{item.codename}</p>
                </div>
            </div>
            
            <div className="second-row">
                <p className="body-medium">{item.price},00€</p>
                <p className="close" onClick={() => removePhoneFromCart(item.id)}>X</p>
            </div>
        </div>
    )
}