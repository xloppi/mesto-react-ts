import { combineReducers } from "redux";
import { userReducer } from "./userReducer";


export const rootReduser = combineReducers({
    currentUser: userReducer,
})