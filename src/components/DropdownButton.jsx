import '../styles/DropdownButton.css';
import React from 'react';

function DropdownButton({ title, children }) {
    const buttonRef = React.useRef();
    const [open, setOpen] = React.useState(false);
    const [topPosition, setTopPosition] = React.useState(0);
    const [leftPosition, setLeftPosition] = React.useState(0);
    const [rightPosition, setRightPosition] = React.useState(0);
    const [buttomPosition, setButtomPosition] = React.useState(0);

    function handleClick(state) {
        setOpen(state);
    }

    React.useLayoutEffect(() => {
        function handleResize() {
            let bottom = buttonRef.current.getBoundingClientRect().bottom;
            let left = buttonRef.current.getBoundingClientRect().left;
            let right = buttonRef.current.getBoundingClientRect().right;
            let top = buttonRef.current.getBoundingClientRect().top;
            setTopPosition(top);
            setButtomPosition(bottom);
            setRightPosition(right);
            setLeftPosition(left);
        }

        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("load", handleResize)
        };
    }, [])

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

    }, [buttonRef, topPosition, leftPosition])

    return (
        <div>
            <button className="btn btn-outline-warning" ref={buttonRef} onClick={() => handleClick(!open)}>{title}</button>
            <div className={`dropdown__menu flex-column ${open ? "d-flex " : "d-none"}`}
                style={{ top: buttomPosition, left: leftPosition, minWidth: rightPosition - leftPosition }}>
                {children}
            </div>
        </div>
    )
}

export default DropdownButton;