import * as actions from '../../../actions/profile/profile.actions'
import * as types from '../../../actions/profile/profile.action.types'
import { IDispatchActionPayload } from '../../../interfaces/common.interface';

describe('actions', () => {
  it('should get the profile and is requesting true', () => {
    const expectedAction: IDispatchActionPayload = {
      type: types.PROFILE_ACTION_TYPE_GET_IS_REQUESTING,
      payload: true
    };

    // console.log("actions.profileActionGet(): ", actions.profileActionGet());
    expect(actions.profileActionGet()).toEqual(expectedAction)
  });

  it('should get the profile and is requesting false', async () => {
    const expectedAction: IDispatchActionPayload = {
      type: types.PROFILE_ACTION_TYPE_GET_IS_REQUESTING,
      payload: false
    }
    await actions.profileActionGet();

    expect(actions.profileActionGet()).toEqual(expectedAction);

    //actions.profileActionGet.then()
    // expect(actions.profileActionGet()).toEqual(expectedAction)
  });
})