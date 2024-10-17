import './header.css';
import '../../App.css';

const Header = () => {
    return (
        <header>
            <p className='title-small'>Handy Shop</p>
            <nav>
                <ul>
                    <li><a className="body-medium" href="/">Startseite</a></li>
                    <li><a className="body-medium" href="/search">Handys</a></li>
                    <li><a className="body-medium" href="/cart">Warenkorb</a></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;