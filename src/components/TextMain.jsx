import '../styles/TextMain.css';

/** 
 * Text with enphasis
 * @constructor
 * @prop {chidlren} - text to show
 */
function TextMain({children}){
    return(
        <p className="textMain text-center">{children}</p>
    )
}

export default TextMain;