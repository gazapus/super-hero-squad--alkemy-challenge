import React from 'react';
import { Switch, Route } from "react-router-dom";
import pathNames from './utils/pathnames';
import Home from './pages/Home';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
        </Switch>
    );
}

export default Routes;

// <Route component={NotFound} />