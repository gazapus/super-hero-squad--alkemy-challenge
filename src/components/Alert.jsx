import ReactDom from "react-dom";
import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/Alert.css';

function Alert({ message, status }) {

    React.useEffect(() => {
        const originURL = window.location.href;
        setInterval(() => {
            if(originURL !== window.location.href) {
                handleClose();
            }
        }, 1000)
    }, [window.location.href]);

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

function launchAlert(message, status) {
    ReactDom.unmountComponentAtNode(document.getElementById('alert'));
    ReactDom.render(<Alert message={message} status={status} />, document.getElementById('alert'));
}

export default launchAlert;