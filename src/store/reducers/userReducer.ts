import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
    currentUser: {},
    loggedIn: false,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_CURR_USER_SUCCESS:
            return {currentUser: action.payload, loggedIn: true}
        case UserActionTypes.FETCH_CURR_USER_ERROR:
            return {currentUser: {}, loggedIn: false}
        default:
            return state

    }
}
