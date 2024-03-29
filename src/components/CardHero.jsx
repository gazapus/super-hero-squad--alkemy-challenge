import '../styles/CardHero.css';
import StatusBar from './StatusBar';
import React from 'react';

/** 
 * Card Hero that contains name, image and more info 
 * @constructor
 * @prop {string} name - character name
 * @prop {array} powerstats - object array of character powerstats
 * @prop {string} image - character image url
 * @prop {function} onRemove - function to call when the close button is pressed
 * @prop {boolean} isGood - character alignament
 * @prop {function} handleClick - function to call when the card is pressed
 */
function HeroCard({ name, powerstats, image, onRemove, isGood, handleClick}) {

    return (
        <div className="p-0 p-sm-1 col-6 col-lg-4 border-0" >
            <button className={`heroCard d-flex flex-column p-1 col-12 bg-transparent`} onClick={handleClick}>
                <div className="heroCard__image d-flex justify-content-center align-items-end" style={{ backgroundImage: "url('" + image + "')" }} >
                    <span className={`text-light text-center p-1 heroCard__name ${isGood ? 'heroCard__name-good' : 'heroCard__name-bad'}`}>{name}</span>
                </div>
                <div className="heroCard__details w-100 ">
                    <StatusBar name="intelligence" state={powerstats.intelligence} max={100} small />
                    <StatusBar name="strength" state={powerstats.strength} max={100} small />
                    <StatusBar name="speed" state={powerstats.speed} max={100} small />
                    <StatusBar name="durability" state={powerstats.durability} max={100} small />
                    <StatusBar name="power" state={powerstats.power} max={100} small />
                    <StatusBar name="combat" state={powerstats.combat} max={100} small />
                </div>
            </button>
            <div className="d-flex justify-content-end ">
                <div className="heroCard__closeSide "></div>
                <button className="heroCard__closeButton col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 p-0 border-0" 
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove" onClick={onRemove}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
        </div>
    )
}

export default HeroCard;