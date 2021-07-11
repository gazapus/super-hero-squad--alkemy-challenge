import './Home.css'
import LoadingPage from '../components/LoadingPage';
import Button from '../components/Button';
import Footer from '../components/Footer';
import HomeBackground from '../components/HomeBackground';
import React, { useState } from 'react';

function Home() {
    const [loadFinished, setLoadFinished] = useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setLoadFinished(true)
        }, 3000);
    }, [])

    return (
        <div className="container-fluid home p-0">
            <LoadingPage loaded={loadFinished} />
            <HomeBackground />
            <div className="home__main d-flex flex-column w-100 justify-content-center align-items-center">
                <h1 className="home__title text-center p-1">SUPER HERO SQUAD</h1>
                <div className="mt-5 mb-3">
                    <Button handleClick={() => console.log("nada")} >ACCEDER</Button>
                </div>
            </div>
            <Footer visible={loadFinished} /> 
        </div>
    )
}

export default Home;