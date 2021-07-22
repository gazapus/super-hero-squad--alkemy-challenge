import './Home.css'
import pathnames from '../utils/pathnames';
import {Link} from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';
import Button from '../components/Button';
import TextBanner from '../components/TextBanner';
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
        <div className="container-fluid p-0">
            <LoadingPage loaded={loadFinished} />
            <HomeBackground />
            <div className="home d-flex flex-column w-100 justify-content-center align-items-center">
                <TextBanner size="lg" neonEffect>SUPER HERO SQUAD</TextBanner>
                <div className="mt-5 mb-3">
                    <Link to={pathnames.login}>
                        <Button>ACCEDER</Button>
                    </Link>
                </div>
            </div>
            <Footer visible={loadFinished} />
        </div>
    )
}

export default Home;