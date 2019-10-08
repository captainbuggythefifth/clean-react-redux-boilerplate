import { COUNTER_ACTION_TYPE_CHANGE_COUNT } from "./counter.action.types";
import { IDispatchActionPayload } from "../../interfaces/common.interface";

  const counterActionIncrement = (count: number): IDispatchActionPayload => ({
    type: COUNTER_ACTION_TYPE_CHANGE_COUNT,
    payload: count + 1
  });
  
  const counterActionDecrement = (count: number): IDispatchActionPayload => ({
    type: COUNTER_ACTION_TYPE_CHANGE_COUNT,
    payload: count - 1
  });

  export {
    counterActionIncrement,
    counterActionDecrement
  }