import React, {Component} from 'react';
import { Router, Switch, Route } from 'react-router'
import {Vedios, Home} from './Components';
import {Signup, Login } from './Container';
import { MapsLocalGasStation } from 'material-ui';
import history from './History';
const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/tutorials/:name" component={Vedios}/>
            </Switch>
        </Router>

    )
}

export default Routes;