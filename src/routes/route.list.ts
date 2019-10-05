import Counter from "../components/counter/Counter";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";
import Home from "../components/home/Home";
import { URL_HOME_PAGE, URL_COUNTER_PAGE, URL_LOGIN_PAGE, URL_PROFILE_PAGE } from "../config/url";

export interface IRoute {
    path: string,
    component: any,
    isPrivate: boolean
}
const routeList: IRoute[] = [
    {
        path: URL_HOME_PAGE,
        component: Home,
        isPrivate: true
    },
    {
        path: URL_COUNTER_PAGE,
        component: Counter,
        isPrivate: false
    },
    {
        path: URL_LOGIN_PAGE,
        component: Login,
        isPrivate: false
    },
    {
        path: URL_PROFILE_PAGE,
        component: Profile,
        isPrivate: true
    }
];

export default routeList