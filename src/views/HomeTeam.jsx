import '../styles/HomeTeam.css';
import pathnames from '../utils/pathnames';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';
import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundImage from '../images/dots.png';
import heroes from './rr';
import HeroCard from '../components/HeroCard';
import StatsSection from '../components/StatsSection';
import SearchSection from '../components/SearchSection';
import TextBanner from "../components/TextBanner";

function HomeTeam() {
    const [team, setTeam] = React.useState(heroes);

    return (
        <div className="container-fluid p-0 homeTeam">
            <div className="homeTeam__sub d-flex flex-column w-100 h-100" style={{ backgroundImage: `url(${BackgroundImage})` }} >
                <Navbar />
                <div className="container">
                    <div className="m-4">
                        <TextBanner size="sm">My Team</TextBanner>
                    </div>
                    <div className="h-100 w-100 d-flex flex-column flex-md-row p-2  bg-semidark">
                        <section className="col-12 col-md-4">
                            <StatsSection team={team} />
                        </section>
                        <section className="col-12 col-md-8 d-flex flex-wrap p-0 p-sm-2">
                            <div className="w-100 d-flex justify-content-between p-1">
                                <span className="text-warning fs-4">
                                    {team.length === 6 ? 'Full Team' : team.length + "/6"}
                                </span>
                                <a href="#search"><i class="bi bi-search text-light fs-5"></i></a>
                            </div>
                            {team.map(x => <HeroCard name={x.name} powerstats={x.powerstats} image={x.image.url} key={x.name} />)}
                        </section>
                    </div>
                    <div className="my-3 py-3 bg-semidark" id="search">
                        <SearchSection />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeTeam;