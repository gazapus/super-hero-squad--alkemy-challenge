import pathnames from '../utils/pathnames';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import TextBanner from '../components/TextBanner';
import Footer from '../components/Footer';
import BackgroundHome from '../components/BackgroundHome';
import React from 'react';

function Home() {
    return (
        <div className="container-fluid p-0">
            <BackgroundHome />
            <div className="d-flex flex-column w-100 justify-content-center align-items-center" style={{minHeight: '100vh', position: 'relative'}}>
                <TextBanner size="lg" neonEffect>SUPER HERO SQUAD</TextBanner>
                <div className="mt-5 mb-3">
                    <Link to={pathnames.login}>
                        <Button>Start</Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;