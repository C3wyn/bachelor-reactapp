import './searchfield.styles.css';

export const SearchField = () => {
    return (
        <div id='searchfield'>
            <span class="material-icons">search</span>
            <input type="text" placeholder="Suchen"/>
        </div>
    );
}