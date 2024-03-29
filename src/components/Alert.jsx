import ReactDom from "react-dom";
import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/Alert.css';

/** 
 * Represents a function that calls an alert popup
 * @constructor
 * @prop {string} message - message to show
 * @prop {string} status - alert level. Can be: default, danger or success
 */
function Alert({ message, status }) {

    React.useEffect(() => {
        const originURL = window.location.href;
        function checkURL() {
            if (originURL !== window.location.href) {
                clearInterval(interval)
                handleClose();
            }
        }
        let interval = setInterval(checkURL , 1000)
        return () => {
            clearInterval(interval)
        }
    }, []);

    function handleClose() {
        ReactDom.unmountComponentAtNode(document.getElementById('alert'));
    }

    return (
        <div className="position-fixed top-0 pt-2 _alertContainer" style={{ paddingRight: '0.5em', right: 0 }}>
            <div className={`_alert pt-0 px-2 d-flex flex-column _alert-${status} w-100`}>
                <div className="d-flex justify-content-end">
                    <button className="border-0 p-0 m-0 bg-transparent" onClick={handleClose}>
                        <i className="bi bi-x-square-fill fs-5"></i>
                    </button>
                </div>
                <p className="text-center px-2">{message}</p>
            </div>
        </div>
    )
}

/** 
 * Function that calls the Alert component
 * @constructor
 * @prop {string} message - message to show
 * @prop {string} status - alert level. Can be: default, danger or success
 */
function launchAlert(message, status) {
    ReactDom.unmountComponentAtNode(document.getElementById('alert'));
    ReactDom.render(<Alert message={message} status={status} />, document.getElementById('alert'));
}

export default launchAlert;