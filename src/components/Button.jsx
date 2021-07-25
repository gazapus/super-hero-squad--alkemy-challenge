import '../styles/Button.css';

/** 
 * Main Button
 * @constructor
 * @prop {function} handleClick - function that is called when the button is pressed
 * @prop {boolean} disabled - boolean that represents if the button is disabled
 * @prop {string} type - button type
 */
function Button({ handleClick = () => { }, children, disabled = false, type="button" }) {
    return (
        <button className="main__button" onClick={handleClick} disabled={disabled} type={type}>{children}</button>
    )
}

export default Button;