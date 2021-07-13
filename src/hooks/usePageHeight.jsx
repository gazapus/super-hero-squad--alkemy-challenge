import { useLayoutEffect, useState } from 'react';

/** 
 */
function usePageHeight() {
    const [height, setHeight] = useState(0);
    useLayoutEffect(() => {
        function updateHeight() {
            setHeight(document.body.scrollHeight
                );
        }
        window.addEventListener('resize', updateHeight);
        updateHeight();
        return () => window.removeEventListener('resize', updateHeight);
    }, []);
    return height;
}

export default usePageHeight;