import '../styles/Button.css';

function Button({ handleClick = () => { }, children, disabled = false, type="button" }) {
    return (
        <button className="main__button" onClick={handleClick} disabled={disabled} type={type}>{children}</button>
    )
}

export default Button;