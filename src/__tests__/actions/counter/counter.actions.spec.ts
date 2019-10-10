import * as actions from '../../../actions/counter/counter.actions'
import * as types from '../../../actions/counter/counter.action.types'
import { IDispatchActionPayload } from '../../../interfaces/common.interface';

describe('actions', () => {
  it('should increment counter', () => {
    const counter = 1;
    const expectedAction: IDispatchActionPayload = {
      type: types.COUNTER_ACTION_TYPE_CHANGE_COUNT,
      payload: 2
    }
    expect(actions.counterActionIncrement(counter)).toEqual(expectedAction)
  });

  it('should decrement counter', () => {
    const counter = 1;
    const expectedAction: IDispatchActionPayload = {
      type: types.COUNTER_ACTION_TYPE_CHANGE_COUNT,
      payload: 0
    }
    expect(actions.counterActionDecrement(counter)).toEqual(expectedAction)
  })
})