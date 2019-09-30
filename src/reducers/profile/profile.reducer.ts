import { IReducerAction } from '../../interfaces/counter/counter.interface';
import { PROFILE_ACTION_TYPE_GET } from '../../actions/profile/profile.action.types';
import { IProfileState, profileInitialState } from '../../interfaces/profile/profile.interface';



const initialState: IProfileState = profileInitialState

const profileReducer = (state: IProfileState = initialState, action: IReducerAction): IProfileState => {
  switch(action.type) {
    case PROFILE_ACTION_TYPE_GET:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};


export default profileReducer;