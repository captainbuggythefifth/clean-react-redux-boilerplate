import { IReducerAction } from '../../interfaces/counter/counter.interface';
import { COUNTER_ACTION_TYPE_CHANGE_COUNT } from '../../actions/counter/counter.action.types';
import { IAuthState } from '../../interfaces/auth/auth.interface';

const initialState: IAuthState = {
  authenticated: false
}

const authReducer = (state: IAuthState = initialState, action: IReducerAction): IAuthState => {
  switch(action.type) {
    case COUNTER_ACTION_TYPE_CHANGE_COUNT:
      return {
        ...state,
        authenticated: action.payload
      }
    default:
      return state;
  }
};


export default authReducer;