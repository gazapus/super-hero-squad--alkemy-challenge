import './Home.css'
import LoadingPage from '../components/LoadingPage';
import React, { useState } from 'react';

function Home() {
    const [loadFinished, setLoadFinished] = useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setLoadFinished(true)
        }, 3000);
    }, [])

    return (
        <div>
            <LoadingPage loaded={loadFinished}/>
            <button onClick={() => setLoadFinished(!loadFinished)}>Recargar</button>
        </div>
    )
}

export default Home;