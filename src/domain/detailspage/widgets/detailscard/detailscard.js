import './detailscard.styles.css';
export const DetailsCard = (props) => {
    return (
        <div className="details-card">
            <p className="title-small">{props.title}</p>
            <p className="title-medium">{props.text}</p>
        </div>
    )
}