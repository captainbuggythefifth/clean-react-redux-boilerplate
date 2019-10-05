import React from 'react';
import { ProtectedRoute, ProtectedRouteProps } from '../hoc/ProtectedRoute';
import { Route, Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootReducerInterface } from '../interfaces/root.interface';
import history from './../config/history';
import routeList, { IRoute } from './route.list';
import { URL_LOGIN_PAGE } from '../config/url';
import NotFound from '../components/404';


const Routes: React.FC = () => {
    const auth = useSelector(({auth}: IRootReducerInterface) => {
        return auth
      });
    
      const defaultProtectedRouteProps: ProtectedRouteProps = {
        isAuthenticated: auth.authenticated,
        authenticationPath: URL_LOGIN_PAGE,
      };

    

        let privateRoutes = routeList.map((route: IRoute) => {
            if (route.isPrivate) return <ProtectedRoute exact={true} path={route.path} component={route.component} {...defaultProtectedRouteProps} key={route.path}/>
        });

        let routes = routeList.map((route: IRoute) => {
            if (!route.isPrivate) return <Route path={route.path} component={route.component} key={route.path} />
        });

         console.log("rerender");


    return (
        <Router history={history}>
            <Switch>
                {privateRoutes}
                {routes}
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
};

export default Routes