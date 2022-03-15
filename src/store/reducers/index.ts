import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { userReducer } from "./userReducer";

export const rootReduser = combineReducers({
    currentUser: userReducer,
    modal: modalReducer,
})
