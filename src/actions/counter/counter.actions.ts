import { COUNTER_ACTION_TYPE_CHANGE_COUNT } from "./counter.action.types";

interface IAction {
  type: string,
  payload: any
}
  const counterActionIncrement = (count: number): IAction => ({
    type: COUNTER_ACTION_TYPE_CHANGE_COUNT,
    payload: count + 1
  });
  
  const counterActionDecrement = (count: number): IAction => ({
    type: COUNTER_ACTION_TYPE_CHANGE_COUNT,
    payload: count - 1
  });

  export {
    counterActionIncrement,
    counterActionDecrement
  }