export interface UserState {
    currentUser: {};
    loggedIn: boolean;
}

export enum UserActionTypes {
    FETCH_CURR_USER_SUCCESS = 'FETCH_CURR_USER_SUCCESS',
    FETCH_CURR_USER_ERROR = 'FETCH_CURR_USER_ERROR',
}

interface FetchCurrUserSuccessAction {
    type: UserActionTypes.FETCH_CURR_USER_SUCCESS;
    payload: {};
}

interface FetchCurrUserErrAction {
    type: UserActionTypes.FETCH_CURR_USER_ERROR;
}

export type UserAction = FetchCurrUserSuccessAction | FetchCurrUserErrAction;
