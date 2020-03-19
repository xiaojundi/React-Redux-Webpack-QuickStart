import React from 'react';
import Example from "../pages/exmaple/exmaple";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Example} />
            </Switch>
        </Router> 
    );
};