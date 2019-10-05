import INavigation from "./navigation.interface";
import history from './../../config/history';
export const reactRouterHistory = history;

export const ReactRouterNavigation: INavigation = {

  currentPath: (): string => {
    return reactRouterHistory.location.pathname;
  },

  navigateTo: (path) => {
    reactRouterHistory.push(path);
  },

  popAndNavigateTo: (path) => {
    reactRouterHistory.replace(path);
  },

  backward: () => {
    reactRouterHistory.goBack();
  },

  forward: () => {
    reactRouterHistory.goForward();
  }

};

export const RouteNavigation = ReactRouterNavigation;