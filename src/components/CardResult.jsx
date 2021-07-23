import '../styles/CardResult.css';
import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

function CardResult({ name, image, handleClick, selected = false, isGood = true }) {
    const cardRef = React.useRef();
    const [cardWidth, setCardWidth] = React.useState(0);
    const [addVisible, setAddVisible] = React.useState(false);

    React.useEffect(() => {
        function changeWidth() {
            if (cardRef) {
                let width = cardRef.current.getBoundingClientRect().right - cardRef.current.getBoundingClientRect().left;
                setCardWidth(width);
            }
        }
        window.addEventListener('resize', changeWidth);
        changeWidth();
        return () => window.removeEventListener('resize', changeWidth);
    }, [cardRef]);

    React.useEffect(() => {
        function showAddButton() {
            setAddVisible(true);
        }
        function hideAddButton() {
            setAddVisible(false);
        }
        cardRef.current.addEventListener('mouseenter', showAddButton);
        cardRef.current.addEventListener('mouseleave', hideAddButton);
    }, []);

    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-1 p-md-2">
            <button className={`cardResult d-flex flex-column align-items-center border px-0 py-3 w-100 border-dark bg-semidark
                ${isGood ? 'cardResult-good' : 'cardResult-bad'}`}
                ref={cardRef} disabled={selected} onClick={handleClick}
                data-bs-toggle="tooltip" data-bs-placement="top" title="Add to my team"
            >
                <div className={`cardResult__image border border-dark rounded-circle w-75 d-flex justify-content-center align-items-center`}
                    style={{ height: `${cardWidth * 0.75}px`, backgroundImage: "url('" + image + "')" }}>
                    {
                        selected ? <i className=" cardResult__icon bi bi-check-lg text-warning"></i> :
                            addVisible ? <i className=" cardResult__icon bi bi-plus-lg text-warning"></i> : ''
                    }
                </div>
                <span className="cardResult__name my-2 text-light w-75 d-flex align-items-center justify-content-center">{name}</span>
            </button>

        </div>
    )
}

export default CardResult;