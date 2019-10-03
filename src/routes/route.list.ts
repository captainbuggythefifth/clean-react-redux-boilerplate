import { Component } from "react";
import Counter from "../components/counter/Counter";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";

export interface IRoute {
    path: string,
    component: any,
    isPrivate: boolean
}
const routeList: IRoute[] = [
    {
        path: '/counter',
        component: Counter,
        isPrivate: false
    },
    {
        path: '/login',
        component: Login,
        isPrivate: false
    },
    {
        path: '/profile',
        component: Profile,
        isPrivate: true
    }
];

export default routeList