import { PROFILE_ACTION_TYPE_GET, PROFILE_ACTION_TYPE_GET_IS_REQUESTING, PROFILE_ACTION_TYPE_GET_SUCCESS, PROFILE_ACTION_TYPE_GET_FAIL } from '../../actions/profile/profile.action.types';
import { IProfileState, profileInitialState } from '../../interfaces/profile/profile.interface';
import { IDispatchActionPayload } from '../../interfaces/common.interface';


const initialState: IProfileState = profileInitialState

const profileReducer = (state: IProfileState = initialState, action: IDispatchActionPayload): IProfileState => {
  switch(action.type) {
    case PROFILE_ACTION_TYPE_GET:
      return {
        ...state,
        data: action.payload
      }
    case PROFILE_ACTION_TYPE_GET_IS_REQUESTING:
      return {
        ...state,
        isRequesting: action.payload
      }
    case PROFILE_ACTION_TYPE_GET_SUCCESS:
      return {
        ...state,
        success: true
      }
    default:
      return state;
  }
};


export default profileReducer;