import '../styles/StatusBar.css';

/** 
 * Status bar of a character's ability
 * @constructor
 * @prop {string} name - ability name
 * @prop {number} state - value ability state
 * @prop {number} max - max posible ability value
 * @prop {boolean} small - small bar ?
 */
function StatusBar({ name = "", state = 0, max = 100, small }) {
    return (
        <div className="statusBar d-flex flex-column w-100 px-1 my-2">
            <p className={`statusBar__name p-0 m-0 text-start text-light ${small ? 'statusBar__name-small' : ''} `}>{name}</p>
            <div className={`statusBar__bar d-flex align-items-center ${small ? 'statusBar__bar-small' : ''}`}>
                <span
                    className={`statusBar__bar-line ${small ? 'statusBar__bar-line-small' : ''}`}
                    style={{ width: `${state * 100 / max}%` }}>
                </span>
                <span className={`statusBar__bar-state text-light ${small ? 'statusBar__bar-state-small' : ''}`}>
                    {isNaN(state) ? '?' : state}
                </span>
            </div>
        </div>
    )
}

export default StatusBar;