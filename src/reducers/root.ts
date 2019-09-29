import { combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';
import { IRootReducerInterface } from '../interfaces/root.interface';

export default combineReducers<IRootReducerInterface>({
    counterReducer
});