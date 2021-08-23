import React from 'react';
import {Switch, Route, Redirect, Router} from 'react-router-dom';
import {publicRoutes} from "../routes";
import { HOME_ROUTE } from "../utils/Const"
import Main from './pages/Main';
import History from "./pages/History";

export default function AppRouter() {
    localStorage.removeItem('order');
    return (
        <div style={{marginTop: "30px"}}>
            {/*<Router history={History}>*/}
                <Switch>
                    <Route exact  path="/" component={Main} />
                    {publicRoutes.map(({path, Component}) =>
                        <Route  key={path} path={path} component={Component} exact />
                    )}

                    <Redirect to={HOME_ROUTE} />
                </Switch>
            {/*</Router>*/}
        </div>
    )
}


