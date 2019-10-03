import { ICounterState } from "./counter/counter.interface";
import { IProfileState } from "./profile/profile.interface";
import { IAuthState } from "./auth/auth.interface";

export interface IRootReducerInterface {
    counter: ICounterState,
    profile: IProfileState,
    auth: IAuthState
}