import '../styles/Button.css';

function Button({ handleClick = () => { }, children, disabled = false }) {
    return (
        <button className="main__button" onClick={handleClick} disabled={disabled}>{children}</button>
    )
}

export default Button;