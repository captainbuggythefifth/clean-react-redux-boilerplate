import { ReactHttpRequest } from "../../utils/http/http.util";
import { PROFILE_ACTION_TYPE_GET, PROFILE_ACTION_TYPE_GET_IS_REQUESTING, PROFILE_ACTION_TYPE_GET_SUCCESS } from "./profile.action.types";
import { API_PROFILE } from "../../config/api";

interface IAction {
  type: string,
  payload: any
}
  const profileActionGet = () => {
    
    return async (dispatch: any) => {
        dispatch({
          type: PROFILE_ACTION_TYPE_GET_IS_REQUESTING,
          payload: true
        });
        const profile = await ReactHttpRequest.get(API_PROFILE);
        dispatch({
            type: PROFILE_ACTION_TYPE_GET,
            payload: profile.data.results[0]
        });
        dispatch({
          type: PROFILE_ACTION_TYPE_GET_IS_REQUESTING,
          payload: false
        });
        dispatch({
          type: PROFILE_ACTION_TYPE_GET_SUCCESS,
          payload: true
        });
    }
  }

  export {
    profileActionGet
  }