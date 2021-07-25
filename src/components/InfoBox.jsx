import '../styles/InfoBox.css';

/** 
 * Average Weight or Average Height box
 * @constructor
 * @prop {string} name - property name
 * @prop {number} state - property value
 */
function InfoBox({name, state}) {
    return(
        <div className="w-100 infoBox d-flex flex-column">
            <span className="infoBox__name">{name}</span>
            <span className="infoBox__state">{state.toFixed(1)}</span>
        </div>
    )
}

export default InfoBox;