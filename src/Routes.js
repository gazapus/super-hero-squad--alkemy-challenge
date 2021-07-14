import React from 'react';
import { Switch, Route } from "react-router-dom";
import pathNames from './utils/pathnames';
import Home from './pages/Home';
import Login from './pages/Login';
import HomeTeam from './pages/HomeTeam';

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