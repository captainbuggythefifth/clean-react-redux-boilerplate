export interface IResponseDataState {
    isRequesting: boolean,
    success: boolean,
    data: any
}

export interface IDispatchActionPayload {
    type: string,
    payload: any
}