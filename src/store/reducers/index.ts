import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    currentUser: userReducer,
    modal: modalReducer,
})


export type RootState = ReturnType<typeof rootReducer>
