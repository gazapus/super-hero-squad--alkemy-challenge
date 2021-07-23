import '../styles/DropdownButton.css';
import React from 'react';

function DropdownButton({ title, children }) {
    const buttonRef = React.useRef();
    const [open, setOpen] = React.useState(false);
    const [topPosition, setTopPosition] = React.useState(0);
    const [leftPosition, setLeftPosition] = React.useState(0);
    const [rightPosition, setRightPosition] = React.useState(0);
    const [buttomPosition, setButtomPosition] = React.useState(0);

    React.useEffect(() => {
        function handleResize() {
            setTopPosition(buttonRef.current.getBoundingClientRect().top);
            setButtomPosition(buttonRef.current.getBoundingClientRect().bottom);
            setRightPosition(buttonRef.current.getBoundingClientRect().right);
            setLeftPosition(buttonRef.current.getBoundingClientRect().left);
        }
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleResize);
        };
    }, [open])

    React.useEffect(() => {
        function handleClickOut(e) {
            if (!((e.clientX < rightPosition && e.clientX > leftPosition) && (e.clientY < buttomPosition && e.clientY > topPosition))) {
                setOpen(false)
            }
        }
        window.addEventListener("click", handleClickOut);
        return () => {
            window.removeEventListener("click", handleClickOut)
        };
    }, [buttonRef, topPosition, leftPosition, buttomPosition, rightPosition])

    return (
        <div>
            <button className="btn btn-outline-warning" ref={buttonRef} onClick={() => setOpen(!open)}>{title}</button>
            <div className={`dropdown__menu flex-column ${open ? "d-flex " : "d-none"}`}
                style={{ top: buttomPosition, left: leftPosition, minWidth: rightPosition - leftPosition }}>
                {children}
            </div>
        </div>
    )
}

export default DropdownButton;