import { combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';
import { IRootReducerInterface } from '../interfaces/root.interface';
import profileReducer from './profile/profile.reducer';
import authReducer from './auth/auth.reducer';

export default combineReducers<IRootReducerInterface>({
    counter: counterReducer,
    profile: profileReducer,
    auth: authReducer
});