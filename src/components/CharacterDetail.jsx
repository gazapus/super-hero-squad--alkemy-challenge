import '../styles/CharacterDetail.css';
import TextMain from './TextMain';

function Feature({ name, value }) {
    return (
        <div className="d-flex w-100">
            <p className="text-warning text-end m-0 col-6">{name}:&nbsp;</p>
            <p className="text-light text-start m-0 col-6">{value}</p>
        </div>
    )
}

function CharacterDetail({ character, onClose }) {
    if (!character) return <></>
    return (
        <div className="character bg-dark d-flex flex-column align-items-center py-3 rounded">
            <div className="d-flex w-100 justify-content-between align-items-start">
                <span>.</span>
                <TextMain>{character.name}</TextMain>
                <button className="bg-transparent border-0" onClick={onClose}>
                    <i class="bi bi-x-square fs-3 text-danger"></i>
                </button>
            </div>
            <div className={`character__imageContainer character__imageContainer-${character.biography.alignment} rounded`}>
                <div className="character__image " style={{ backgroundImage: `url(${character.image.url})` }}></div>
            </div>
            <div style={{ width: '95%' }} className="d-flex flex-column align-items-center border rounded my-1 py-1 border-secondary">
                <p className="text-warning fs-5 m-0">Aliases:</p>
                <p className="text-light text-center m-0">{character.biography.aliases.map((x, num) => num !== 0 ? ' - ' + x : x)}</p>
                <Feature name={'Full Name'} value={character.biography['full-name']}/>
                <Feature name={'Height'} value={character.appearance.height[1]}/>
                <Feature name={'Weight'} value={character.appearance.weight[1]}/>
                <Feature name={'Eye Color'} value={character.appearance['eye-color']}/>
                <Feature name={'Hair Color'} value={character.appearance['hair-color']}/>
                <Feature name={'Work'} value={character.work.occupation}/>
            </div>
        </div>
    )
}

export default CharacterDetail;