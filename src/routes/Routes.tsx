import React from 'react';
import { ProtectedRoute, ProtectedRouteProps } from '../hoc/ProtectedRoute';
import { Route, Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootReducerInterface } from '../interfaces/root.interface';
import history from './../config/history';
import routeList, { IRoute } from './route.list';


const Routes: React.FC = () => {
    const auth = useSelector(({auth}: IRootReducerInterface) => {
        return auth
      });
    
      const defaultProtectedRouteProps: ProtectedRouteProps = {
        isAuthenticated: auth.authenticated,
        authenticationPath: '/login',
      };

    return (
        <Router history={history}>
            {routeList.map((route: IRoute) => {
                if (route.isPrivate) {
                    return <ProtectedRoute exact={true} path={route.path} component={route.component} {...defaultProtectedRouteProps} key={route.path}/>
                }

                return <Route path={route.path} component={route.component} key={route.path} />
            })}
        </Router>
    )
};

export default Routes