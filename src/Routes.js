import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Listing from './Listing';
import Home from './Home';

const Routes = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/listing" exact component={Listing} />
                </Switch>
            </HashRouter>
            
        </div>
    );
}

export default Routes;