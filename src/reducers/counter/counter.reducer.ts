import { ICounterState, IReducerAction } from '../../interfaces/counter/counter.interface';
import { COUNTER_ACTION_TYPE_CHANGE_COUNT } from '../../actions/counter/counter.action.types';



const initialState: ICounterState = {
  count: 0
}

const counterReducer = (state: ICounterState = initialState, action: IReducerAction): ICounterState => {
  switch(action.type) {
    case COUNTER_ACTION_TYPE_CHANGE_COUNT:
      return {
        ...state,
        count: action.payload
      }
    default:
      return state;
  }
};


export default counterReducer;