import '../styles/TextBanner.css';
import React from 'react';

/** 
 * Big text
 * @constructor
 * @prop {string} size - can be sm lg or md
 * @prop {boolean} neonEffect - shadow effect of text
 * @prop {chidlren} - text to show
 */
function TextBanner({ children, size = "md", neonEffect = false }) {
    const [classSize, setClassSize] = React.useState("md");

    React.useEffect(() => {
        switch (size) {
            case "sm": setClassSize("textBanner-sm"); break;
            case "md": setClassSize("textBanner-md"); break;
            case "lg": setClassSize("textBanner-lg"); break;
            default: setClassSize("textBanner-md"); break;
        }
    }, [size])

    return (
        <h1
            className={`textBanner text-center p-1 m-0 ${classSize} ${neonEffect ? "textBanner-neon": ""}`}
        >
            {children}
        </h1>
    )
}

export default TextBanner;