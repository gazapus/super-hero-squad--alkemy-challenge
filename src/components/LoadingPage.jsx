import '../styles/LoadingPage.css';
import Shield from '../images/shield.png'
import React from 'react';

/** 
 * Represents the loading page page 
 * @constructor
 * @prop {boolean} loaded - load page status. if the page is loaded this is true
 */
function LoadingPage({loaded = false}) {
    const [hiden, setHiden] = React.useState(false);

    React.useEffect(() => {
        if(loaded) {
            setTimeout(() => {
                setHiden(true);
            }, 1000);   // cierra la vista de carga en 1.5 seg.
        } else {
            setHiden(false);
        }
    }, [loaded])

    if(hiden) return <></>
    
    return (
        <div className={`loadingPage ${loaded ? 'closing' : ''}`}>
            <div className="loader d-flex flex-column align-items-center">
                <img src={Shield} className="loader__image" alt="" />
                <p className="loader__text m-0">Loading</p>
            </div>
        </div>
    )
}

export default LoadingPage;