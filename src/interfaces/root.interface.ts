import { ICounterState } from "./counter/counter.interface";
import { IProfileState } from "./profile/profile.interface";

export interface IRootReducerInterface {
    counter: ICounterState,
    profile: IProfileState
}