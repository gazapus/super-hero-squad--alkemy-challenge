import '../styles/HomeTeam.css';
import pathnames from '../utils/pathnames';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundImage from '../images/dots.png';
import HeroCard from '../components/HeroCard';
import StatsSection from '../components/StatsSection';
import SearchSection from '../components/SearchSection';
import TextBanner from "../components/TextBanner";
import useCheckSession from "../hooks/useCheckSession";
import Provider, { useAppContext } from '../Provider';

function HomeTeam() {
    const { team, setTeam } = useAppContext();

    useCheckSession();

    function remove(indexHero) {
        var filtered = team.filter((hero, index, arr) => index !== indexHero);
        setTeam(filtered);
    }

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
                                <a href="#search"><i className="bi bi-search text-light fs-5"></i></a>
                            </div>
                            {team.map((x, num) =>
                                <HeroCard
                                    name={x.name}
                                    powerstats={x.powerstats}
                                    image={x.image.url}
                                    key={num}
                                    onRemove={() => remove(num)}
                                    isGood={x.biography.alignment === "good"}
                                />)}
                            {team.length === 0 ? 
                                <h3 className="fs-2 text-warning text-center w-100 py-3" style={{fontFamily: 'Montserrat'}}>
                                    Equipo vacío<br/>Agregué algun personaje a su equipo
                                </h3> : ''
                            }
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

export default () => <Provider><HomeTeam /></Provider>