import './divider.styles.css';

export const Divider = (props) => {

    const { text } = props;

    return (
        <div className="divider">
            <p className="title-small">{text}</p>
        </div>
    )
}