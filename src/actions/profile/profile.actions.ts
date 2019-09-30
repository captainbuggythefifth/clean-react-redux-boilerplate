import { ReactHttpRequest } from "../../utils/http/http.util";
import { PROFILE_ACTION_TYPE_GET } from "./profile.action.types";

interface IAction {
  type: string,
  payload: any
}
  const profileActionGet = () => {
    return async (dispatch: any) => {
        const profile = await ReactHttpRequest.get('https://randomuser.me/api/');
        dispatch({
            type: PROFILE_ACTION_TYPE_GET,
            payload: profile.data.results[0]
        })
    }
  }

  export {
    profileActionGet
  }