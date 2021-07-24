import '../styles/Modal.css';
import { useState } from 'react';
/** 
 * Represents an modal that cover all the screen
 * @constructor
 * @prop {boolean} open - if the modal is visible it is true. Defaul: false
 * @prop {function} onClose - function that is called when modal is closed
 * @prop {children} children - modal content
 */
function Modal({ open = false, onClose, children }) {
    const [insideTheModal, setInsideTheModal] = useState(false);

    function closeModal() {
        if (!insideTheModal) {
            onClose();
        }
    }

    if (open) {
        return (
            <div className="Modal" onClick={closeModal}>
                <div
                    className="Modal__content"
                    onClick={closeModal}
                    onMouseEnter={() => setInsideTheModal(true)}
                    onMouseLeave={() => setInsideTheModal(false)}
                >
                    {children}
                </div>
            </div>
        )
    } else {
        return (<span></span>)
    }
}

export default Modal;