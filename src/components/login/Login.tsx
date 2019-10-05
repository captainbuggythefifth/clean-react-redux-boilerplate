import React, { useEffect } from 'react';
import { IRootReducerInterface } from '../../interfaces/root.interface';
import { useSelector } from 'react-redux';
import { RouteNavigation } from '../../utils/navigation/navigation.utils';
import { URL_HOME_PAGE } from '../../config/url';

const Login: React.FC = () => {
    const authenticated = useSelector(({auth}: IRootReducerInterface) => auth.authenticated);

    useEffect(() => {
        if (authenticated) {
            RouteNavigation.popAndNavigateTo(URL_HOME_PAGE);
        }
    }, [authenticated]);
    
    
    return (
        <div>
            This is login
        </div>
    )
};

export default Login