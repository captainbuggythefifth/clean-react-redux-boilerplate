import React from 'react';
import { Route } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import { RouteProps } from 'react-router';
import history from '../config/history';
import { IRootReducerInterface } from '../interfaces/root.interface';
import { useEffect } from 'react';
import { profileActionGet } from '../actions/profile/profile.actions';

interface Props extends RouteProps {
  authenticated: string;
}

class AuthorizedRouteHOC extends Route<any> {
  componentDidMount() {
      console.log("componentDidMount: ")
    if (!this.props.authenticated) {
        console.log("push: ")
      history.push('/login');
    }
  }
}

function mapStateToProps(state: IRootReducerInterface) {
  return {
    authenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps)(AuthorizedRouteHOC);