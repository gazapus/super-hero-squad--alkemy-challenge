import '../styles/Button.css';

function Button({ handleClick, children }) {
    return (
        <button className="main__button" onClick={handleClick}>{children}</button>
    )
}

export default Button;