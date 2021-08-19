import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {publicRoutes} from "../routes";
import { HOME_ROUTE } from "../utils/Const"
import Main from './pages/Main';

export default function AppRouter() {
    localStorage.clear();
    return (
        <div style={{marginTop: "30px"}}>
            <Switch>
                <Route exact  path="/" component={Main} />
                {publicRoutes.map(({path, Component}) => 
                    <Route  key={path} path={path} component={Component} exact />
                )}
                
                <Redirect to={HOME_ROUTE} />
            </Switch>
        </div>
    )
}
