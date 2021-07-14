import '../styles/HomeTeam.css';
import pathnames from '../utils/pathnames';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';
import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundImage from '../images/dots.png';

function HomeTeam() {

    React.useEffect(() => {
    }, [])

    return (
        <div className="container-fluid p-0 homeTeam">
            <div className="homeTeam__sub d-flex flex-column w-100 h-100"
                style={{ backgroundImage: `url(${BackgroundImage})` }} >
                <Navbar />
            </div>
            <Footer />

        </div>
    )
}

export default HomeTeam;