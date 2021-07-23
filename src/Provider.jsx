import React from 'react';
const AppContext = React.createContext();

function Provider(props) {
    const [team, setTeam] = React.useState([]);

    return(
        <AppContext.Provider value={{team, setTeam }} {...props}/>
    )
}

export default Provider;

export function useAppContext() {
    return React.useContext(AppContext);
}