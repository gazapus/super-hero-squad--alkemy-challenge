import React from 'react';
import { Switch, Route } from "react-router-dom";
import pathNames from './utils/pathnames';
import Home from './views/Home';
import Login from './views/Login';
import HomeTeam from './views/HomeTeam';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={pathNames.login} component={Login} />
            <Route exact path={pathNames.team} component={HomeTeam} />
        </Switch>
    );
}

export default Routes;

// <Route component={NotFound} />