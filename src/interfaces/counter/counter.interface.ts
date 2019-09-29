export enum IAction {
    CHANGE_COUNT
}

export interface ICounterState {
    count: number,
}

export interface IReducerAction {
    type: string,
    payload: any
}