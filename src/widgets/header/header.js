import { SearchField } from '../searchfield/searchfield';
import './header.css';
import '../../App.css';

const Header = () => {
    return (
        <header>
            <p>Phoneshop</p>
            <nav>
                <ul>
                    <li><a href="#home">Startseite</a></li>
                    <li><a href="#phones">Handys</a></li>
                    <li><a href="#about">Warenkorb</a></li>
                </ul>
            </nav>
            <div className='content'>
                <SearchField/>
            </div>
            
        </header>
    );
};
export default Header;