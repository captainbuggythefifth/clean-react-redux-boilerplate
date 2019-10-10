import { ReactHttpRequest } from "../../utils/http/http.util";
import { PROFILE_ACTION_TYPE_GET, PROFILE_ACTION_TYPE_GET_IS_REQUESTING, PROFILE_ACTION_TYPE_GET_SUCCESS, PROFILE_ACTION_TYPE_GET_FAIL } from "./profile.action.types";
import { API_PROFILE } from "../../config/api";
import { Dispatch } from "redux";
import { IDispatchActionPayload } from "../../interfaces/common.interface";


  const profileActionGet = async (apiStringUrl?: string) => {
    
    return async (dispatch: Dispatch<IDispatchActionPayload>) => {
        dispatch({
          type: PROFILE_ACTION_TYPE_GET_IS_REQUESTING,
          payload: true
        });
        try {
          const profile = await ReactHttpRequest.get(apiStringUrl ? apiStringUrl : API_PROFILE);
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
        } catch(e) {
          dispatch({
            type: PROFILE_ACTION_TYPE_GET_IS_REQUESTING,
            payload: false
          });
          dispatch({
            type: PROFILE_ACTION_TYPE_GET_SUCCESS,
            payload: false
          });
        }
        
    }
  }

  export {
    profileActionGet
  }