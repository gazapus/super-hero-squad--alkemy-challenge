import '../styles/HeroCard.css';
import StatusBar from '../components/StatusBar';
import React, { useEffect } from 'react';

function HeroCard({ name, powerstats, image }) {

    return (
        <button className="p-0 p-sm-1 col-6 col-lg-4 bg-transparent border-0">
            <div className="heroCard d-flex flex-column p-1">
                <div className="heroCard__image d-flex justify-content-center align-items-end" style={{ backgroundImage: "url('" + image + "')" }} >
                    <span className="text-light text-center p-1 heroCard__name">{name}</span>
                </div>
                <div className="heroCard__details ">
                    <StatusBar name="intelligence" state={powerstats.intelligence} max={100} small />
                    <StatusBar name="strength" state={powerstats.strength} max={100} small />
                    <StatusBar name="speed" state={powerstats.speed} max={100} small />
                    <StatusBar name="durability" state={powerstats.durability} max={100} small />
                    <StatusBar name="power" state={powerstats.power} max={100} small />
                    <StatusBar name="combat" state={powerstats.combat} max={100} small />
                </div>
            </div>
        </button>
    )
}

export default HeroCard;