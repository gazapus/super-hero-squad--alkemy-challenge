import ReactDom from "react-dom";
import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/Alert.css';

function Alert({ message, status }) {

    function handleClose() {
        ReactDom.unmountComponentAtNode(document.getElementById('alert'));
    }

    return (
        <div className="position-fixed top-0 w-100 d-flex justify-content-center justify-content-sm-end pt-2 " style={{ paddingRight: '0.5em' }}>
            <div className={`_alert pt-0 px-2 d-flex flex-column col-11 col-sm-8 col-md-6 col-lg-5 _alert-${status}`}>
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
    ReactDom.render(<Alert message={message} status={status} />, document.getElementById('alert'));
}

export default launchAlert;