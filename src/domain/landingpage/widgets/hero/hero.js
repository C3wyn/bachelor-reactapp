import '../../../../styles/buttons.css';
import './hero.css';
export const Hero = () => {
    return (
        <div className="hero">
            <div className="text">
                <h1>Pixel 4a 5G Global TD-LTE 128GB G025I</h1>
                <p>für 599€</p>
                <div className="actions">
                    <button className='button filled' onClick={() => window.location.href = '/details/STgwH8ykZat6R8qS2IvX'}>Jetzt holen!</button>
                    <button className='button outlined' onClick={() => window.location.href = '/search'}>Mehr Angebote</button>
                </div>
            </div>
            <img src='https://firebasestorage.googleapis.com/v0/b/test-282c1.appspot.com/o/static%2Fhero_phone.png?alt=media&token=6aedb1b9-ad5a-409f-8424-4d2ead5caefb'/>
        </div>
    );
}