import './LoadingPage.css';
import Shield from '../images/shield.png'
import React from 'react';

function LoadingPage({loaded = false}) {
    const [hiden, setHiden] = React.useState(false);

    React.useEffect(() => {
        if(loaded) {
            setTimeout(() => {
                setHiden(true);
            }, 1400);   // cierra la vista de carga en 1.5 seg.
        } else {
            setHiden(false);
        }
    }, [loaded])

    if(hiden) return <></>
    
    return (
        <div className={`loadingPage ${loaded ? 'closing' : ''}`}>
            <div className="loader">
                <img src={Shield} className="loader__image" alt="" />
                <p className="loader__text">Cargando</p>
            </div>
        </div>
    )
}

export default LoadingPage;