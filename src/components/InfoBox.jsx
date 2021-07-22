import '../styles/InfoBox.css';

function InfoBox({name, state}) {
    return(
        <div className="w-100 infoBox d-flex flex-column">
            <span className="infoBox__name">{name}</span>
            <span className="infoBox__state">{state.toFixed(1)}</span>
        </div>
    )
}

export default InfoBox;