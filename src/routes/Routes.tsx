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

      const routes = routeList.map((route: IRoute) => {
        if (route.isPrivate) {
            return <ProtectedRoute exact={true} path={route.path} component={route.component} {...defaultProtectedRouteProps} key={route.path}/>
        }

        return <Route path={route.path} component={route.component} key={route.path} />
    });


    return (
        <Router history={history}>
            <Switch>
                {routes}
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
};

export default Routes